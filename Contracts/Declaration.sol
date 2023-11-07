// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol"; // Import or implement the Base64 library
import "@openzeppelin/contracts/access/Ownable.sol"; // Import Ownable
import "@openzeppelin/contracts/security/Pausable.sol"; // Import Pausable
import "@openzeppelin/contracts/access/AccessControl.sol"; // Import Access Control
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract DeclarationNFT is ERC721URIStorage, Pausable, Ownable, AccessControl {
    using Strings for uint256;
    
    uint256 private _tokenIds;
    string private constant declaration1 = "Hello World 1";
    string private constant declaration2 = "Hello World 2";
    string[] private declaration3;
    bool public declaration3Active;

    bytes32 public constant DEFAULT_ADMIN_ROLE = keccak256("DEFAULT_ADMIN_ROLE");
    bytes32 public constant AMENDER_ROLE = keccak256("AMENDER_ROLE");
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant URI_SETTER_ROLE = keccak256("URI_SETTER_ROLE");

    event DeclarationSigned(address indexed signer, uint256 tokenId);
    mapping(address => bool) public hasSigned;
    mapping(address => bool) public acceptDeclaration1;
    mapping(address => bool) public acceptDeclaration2;
    mapping(address => bool) public hasAcceptedDeclarationOne;
    mapping(address => bool) public hasAcceptedDeclarationTwo;
    mapping(address => bool) public hasAcceptedDeclarationThree;
    mapping(address => bool) public hasReSigned;
    address[] public signers;

    // Events for accepting declarations
    event DeclarationOneAccepted(address indexed signer);
    event DeclarationTwoAccepted(address indexed signer);
    event DeclarationThreeAccepted(address indexed signer);
    event DeclarationSigned(address indexed signer, uint256 tokenId);
    event TokenURIUpdated(uint256 indexed tokenId, string newTokenURI);


  constructor(string memory name, string memory symbol) ERC721(name, symbol) {
    _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    _grantRole(PAUSER_ROLE, msg.sender);
    _grantRole(AMENDER_ROLE, msg.sender);
    _grantRole(URI_SETTER_ROLE, msg.sender);
    declaration1 = "Hello World 1";
    declaration2 = "Hello World 2";
    declaration3Active = false; // Initially turned off
}

    function setDeclaration3(string[] calldata _declaration3) public onlyRole(AMENDER_ROLE) {
        declaration3 = _declaration3;
    }

    function getDeclaration3() public view returns (string[] memory) {
        return declaration3;
    }

    function toggleDeclaration3Active() public onlyRole(AMENDER_ROLE) {
        declaration3Active = !declaration3Active;
    }

    function addAmendmentToDeclaration3(string calldata _amendment) public onlyRole(AMENDER_ROLE) {
        declaration3.push(_amendment);
    }
    // Function to grant roles
    function grantRole(bytes32 role, address account) public override {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "Caller is not an admin");
        _grantRole(role, account);
    }

    // Function to revoke roles
    function revokeRole(bytes32 role, address account) public override {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "Caller is not an admin");
        _revokeRole(role, account);
    }

    // Withdraw function that only the owner can call
    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No Ether left to withdraw");

        // Transfer the contract balance to the owner
        (bool success, ) = owner().call{value: balance}("");
        require(success, "Transfer failed.");
    }

    // Function to update the content of Declaration 1
    function setDeclaration1(string memory newDeclaration) public onlyOwner {
        declaration1 = newDeclaration;
    }

    // Function to update the content of Declaration 2
    function setDeclaration2(string memory newDeclaration) public onlyOwner {
        declaration2 = newDeclaration;
    }

    // Call function to read Declaration 1
    function getDeclaration1() public pure returns (string memory) {
        return declaration1;
    }

    // Call function to read Declaration 2
    function getDeclaration2() public pure returns (string memory) {
        return declaration2;
    }

    function acceptDeclarationOne() public {
        require(!hasAcceptedDeclarationOne[msg.sender], "Already accepted Declaration One");
        hasAcceptedDeclarationOne[msg.sender] = true;
        emit DeclarationOneAccepted(msg.sender);
    }

    function acceptDeclarationTwo() public {
        require(!hasAcceptedDeclarationTwo[msg.sender], "Already accepted Declaration Two");
        hasAcceptedDeclarationTwo[msg.sender] = true;
        emit DeclarationTwoAccepted(msg.sender);
    }

    function acceptDeclarationThree() public {
        require(declaration3Active, "Declaration Three is not active");
        require(!hasAcceptedDeclarationThree[msg.sender], "Already accepted Declaration Three");
        hasAcceptedDeclarationThree[msg.sender] = true;
        hasReSigned[msg.sender] = true;
        emit DeclarationThreeAccepted(msg.sender);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function signDeclaration() public payable whenNotPaused {
        require(!hasSigned[msg.sender], "Already signed");
        require(msg.value == 0.00001 ether, "Incorrect amount of ETH sent");
        require(acceptDeclaration1[msg.sender], "Must accept Declaration 1");
        require(acceptDeclaration2[msg.sender], "Must accept Declaration 2");

        hasSigned[msg.sender] = true;
        signers.push(msg.sender);
        uint256 newItemId = _tokenIds;
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, _buildTokenURI(newItemId));
        _tokenIds++;

        emit DeclarationSigned(msg.sender, newItemId);
    }

    function getAllSigners() public view returns (address[] memory) {
        return signers;
    }
    
    // Function to alter the URI
    function setTokenURI(uint256 tokenId, string memory newTokenURI) public {
        require(hasRole(URI_SETTER_ROLE, msg.sender), "Must have URI_SETTER_ROLE to set tokenURI");
        _setTokenURI(tokenId, newTokenURI);
        emit TokenURIUpdated(tokenId, newTokenURI);
    }

    // Updated _buildTokenURI function
    function _buildTokenURI(uint256 tokenId) internal view returns (string memory) {
        // Get the timestamp of the block
        string memory timestamp = Strings.toString(block.timestamp);

        // Generate the SVG image
        string memory svg = Base64.encode(bytes(abi.encodePacked(
            '<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">',
            '<rect width="100%" height="100%" fill="#2F343C"/>',
            // Quill & Inkwell next to Declaration One
            '<path d="M70 40 l10 0 l0 10 l-10 0 z" fill="#184A90"/>',
            '<circle cx="75" cy="45" r="3" fill="#FFFFFF"/>',
            '<text x="90" y="50" fill="#184A90" font-size="16">Declaration 1</text>',
            // Scroll next to Declaration Two
            '<rect x="70" y="60" width="20" height="10" fill="#FFFFFF"/>',
            '<circle cx="70" cy="65" r="5" fill="#FFFFFF"/>',
            '<circle cx="90" cy="65" r="5" fill="#FFFFFF"/>',
            '<text x="100" y="70" fill="#184A90" font-size="14">Declaration 2</text>',
            // TokenID & Wallet address
            '<text x="50" y="160" fill="#D3D8DE" font-size="10" text-anchor="start">ID: ', tokenId.toString(), '</text>',
            '<text x="150" y="160" fill="#D3D8DE" font-size="10" text-anchor="middle">', Strings.toHexString(uint256(uint160(msg.sender)), 20), '</text>',
            '<text x="150" y="280" fill="#FFFFFF" font-size="10" text-anchor="middle">Minted: ', timestamp, '</text>',
            // Quotes
            '<text x="150" y="290" fill="#FFFFFF" font-size="14" text-anchor="middle">V.V.V.V.V</text>',
            '<text x="290" y="290" fill="#FFFFFF" font-size="10" text-anchor="end">~Hacktivate Mindset</text>',
            '</svg>'
        )));

        // Conditionally add Declaration 3 if active
           /* if (declaration3Active) {
                svg = string(abi.encodePacked(
                    svg,
                    '<text x="150" y="90" fill="#184A90" font-size="12" text-anchor="middle">', declaration3, '</text>'
                ));
            }*/

            if (declaration3Active) {
                for (uint i = 0; i < declaration3.length; i++) {
                    svg = string(abi.encodePacked(
                        svg,
                        '<text x="150" y="', Strings.toString(90 + i * 20), '" fill="#184A90" font-size="12" text-anchor="middle">', declaration3[i], '</text>'
                    ));
                }
            }


        // Encode the JSON metadata
        string memory json = Base64.encode(bytes(abi.encodePacked(
            '{"name": "Declaration NFT #', tokenId.toString(),
            '", "description": "A token to represent signing a declaration.", "image": "data:image/svg+xml;base64,', svg, '"}'
        )));
        
        return string(abi.encodePacked('data:application/json;base64,', json));
}

// Allow users to re-sign after accepting Declaration 3
// Updated reSignDeclaration function
    function reSignDeclaration() public {
        require(hasSigned[msg.sender], "You must sign the initial declaration first");
        require(declaration3Active, "Declaration Three is not active");
        require(hasAcceptedDeclarationThree[msg.sender], "You must accept Declaration 3 first");
        
        uint256 newItemId = _tokenIds;
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, _buildTokenURI(newItemId, msg.sender));
        _tokenIds++;

        emit DeclarationSigned(msg.sender, newItemId);
    }

}
