// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol"; // Import or implement the Base64 library
import "@openzeppelin/contracts/access/Ownable.sol"; // Import Ownable
import "@openzeppelin/contracts/security/Pausable.sol"; // Import Pausable
import "@openzeppelin/contracts/access/AccessControl.sol"; // Import Access Control
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract DeclarationNFT is ERC721URIStorage, Pausable, AccessControl {
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
    event DeclarationReSigned(address indexed signer, uint256 tokenId);

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
    //event DeclarationSigned(address indexed signer, uint256 tokenId);
    event TokenURIUpdated(uint256 indexed tokenId, string newTokenURI);


  constructor(string memory name, string memory symbol) ERC721(name, symbol) {
    _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    _grantRole(PAUSER_ROLE, msg.sender);
    _grantRole(AMENDER_ROLE, msg.sender);
    _grantRole(URI_SETTER_ROLE, msg.sender);
    declaration3Active = false; // Initially turned off
}
    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721URIStorage, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
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
    // Withdraw function that only the DEFAULT_ADMIN_ROLE can call
    function withdraw() public {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "Caller is not a default admin");

        uint256 balance = address(this).balance;
        require(balance > 0, "No Ether left to withdraw");

        // Transfer the contract balance to the caller
        (bool success, ) = msg.sender.call{value: balance}("");
        require(success, "Transfer failed.");
    }


    // Function to update the content of Declaration 1
    function setDeclaration1(string memory newDeclaration) public {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "Caller is not a default admin");
        string memory declaration1 = newDeclaration;
    }

    // Function to update the content of Declaration 2
    function setDeclaration2(string memory newDeclaration) public {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "Caller is not a default admin");
        string memory declaration2 = newDeclaration;
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

    function pause() public {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender) || hasRole(PAUSER_ROLE, msg.sender), 
                "Caller does not have permission to pause");
        _pause();
    }

    function unpause() public {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender) || hasRole(PAUSER_ROLE, msg.sender), 
                "Caller does not have permission to pause");
        _unpause();
    }

    function signDeclaration() public payable whenNotPaused {
        require(!hasSigned[msg.sender], "Already signed");
        require(msg.value == 0.00001 ether, "Incorrect amount of ETH sent");
        require(hasAcceptedDeclarationOne[msg.sender], "Must accept Declaration 1");
        require(hasAcceptedDeclarationTwo[msg.sender], "Must accept Declaration 2");

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
         // Conditionally add Declaration 3 if active
           if (declaration3Active) {
            string memory svg = Base64.encode(bytes(abi.encodePacked(
                <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">',
                '<style>',
                '@import url("https://fonts.googleapis.com/css?family=Roboto");',
                'text { font-family: "Roboto", sans-serif; }',
                '</style>',
                '<rect width="100%" height="100%" fill="#2F343C"/>',
                '<rect x="1" y="1" width="298" height="298" fill="none" stroke="#D33D17" stroke-width="8"/>', // Border added here #2D72D2
                // Background for Declaration One
                '<rect x="80" y="35" width="140" height="20" fill="#D3D8DE"/>',
                '<svg x="33" y="52"><path d="M24.36,.07C15.2-.92,8.26,9.05,7.49,15.04c2.75-3.91,7.46-9.44,12.59-12.46-4.57,3.27-9.3,8.35-12.67,13.58-.15,.24-.3,.47-.45,.71-.02,.04-.04,.07-.07,.11-.07,.11-.13,.21-.19,.32H3c-.21,0-.38,.17-.38,.38v.98c0,.21,.17,.38,.38,.38h.45v1.4H1.5c-.52,0-.99,.42-1.06,.94L0,25.03c-.06,.52,.31,.94,.83,.94H12c.52,0,.89-.42,.83-.94l-.44-3.65c-.06-.52-.54-.94-1.06-.94h-1.95v-1.4h.45c.21,0,.38-.17,.38-.38v-.98c0-.21-.17-.38-.38-.38h-2.27c.22-.37,.44-.75,.68-1.13,3.43,.02,6.09-.82,8.2-2.21-1.35-.68-3.47-1.45-4.98-1.75,1.82,.05,3.45,.06,6.07,.94,2.79-2.31,4.46-5.69,5.66-9.21-1.08-.18-2.22-.3-3.12-.31,1.09-.18,2.11-.36,3.36-.4,.34-1.06,.64-2.13,.92-3.18ZM10.22,21.02l.53,4.46h-1.33l-.53-4.46h1.33Zm-1.92-3.47h.53v1.27h-.53v-1.27Zm-.2,2.12h.42v.78h-.42v-.78Z"/></svg>'
                '<text x="150" y="50" fill="#96290D" font-size="16" text-anchor="middle">Declaration 1</text>',
                // Background for Declaration Two #184A90
                '<rect x="80" y="60" width="140" height="20" fill="#D3D8DE"/>',
                '<text x="150" y="75" fill="#96290D" font-size="16" text-anchor="middle">Declaration 2</text>',
                // Background for Declaration Three #184A90
                '<rect x="80" y="85" width="140" height="20" fill="#D3D8DE"/>',
                '<text x="150" y="100" fill="#96290D" font-size="16" text-anchor="middle">Declaration 3</text>',
                // Background for Wallet Address and TokenID
                '<rect x="5" y="125" width="290" height="40" fill="#2F343C"/>',
                '<text x="150" y="140" fill="#D3D8DE" font-size="10" text-anchor="middle">ID: ', Strings.toString(tokenId), '</text>',
                '<text x="150" y="155" fill="#D3D8DE" font-size="10" text-anchor="middle">', Strings.toHexString(uint256(uint160(msg.sender)), 20), '</text>',
                '<text x="150" y="260" fill="#FFFFFF" font-size="10" text-anchor="middle">Minted: ', timestamp, '</text>',
                '<text x="45" y="290" fill="#FFFFFF" font-size="14" font-style="italic" text-anchor="middle">"V.V.V.V.V"</text>',
                '<text x="290" y="290" fill="#FFFFFF" font-size="10" font-style="italic" text-anchor="end">~Hacktivate Mindset</text>',
                '</svg>'
            )));

        // Generate the SVG image
        string memory svg = Base64.encode(bytes(abi.encodePacked(
            <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">',
            '<style>',
            '@import url("https://fonts.googleapis.com/css?family=Roboto");',
            'text { font-family: "Roboto", sans-serif; }',
            '</style>',
            '<rect width="100%" height="100%" fill="#2F343C"/>',
            '<rect x="1" y="1" width="298" height="298" fill="none" stroke="#D33D17" stroke-width="8"/>', // Border added here #2D72D2
            // Background for Declaration One
            '<rect x="80" y="35" width="140" height="20" fill="#D3D8DE"/>',
            '<svg x="33" y="42"><path d="M24.36,.07C15.2-.92,8.26,9.05,7.49,15.04c2.75-3.91,7.46-9.44,12.59-12.46-4.57,3.27-9.3,8.35-12.67,13.58-.15,.24-.3,.47-.45,.71-.02,.04-.04,.07-.07,.11-.07,.11-.13,.21-.19,.32H3c-.21,0-.38,.17-.38,.38v.98c0,.21,.17,.38,.38,.38h.45v1.4H1.5c-.52,0-.99,.42-1.06,.94L0,25.03c-.06,.52,.31,.94,.83,.94H12c.52,0,.89-.42,.83-.94l-.44-3.65c-.06-.52-.54-.94-1.06-.94h-1.95v-1.4h.45c.21,0,.38-.17,.38-.38v-.98c0-.21-.17-.38-.38-.38h-2.27c.22-.37,.44-.75,.68-1.13,3.43,.02,6.09-.82,8.2-2.21-1.35-.68-3.47-1.45-4.98-1.75,1.82,.05,3.45,.06,6.07,.94,2.79-2.31,4.46-5.69,5.66-9.21-1.08-.18-2.22-.3-3.12-.31,1.09-.18,2.11-.36,3.36-.4,.34-1.06,.64-2.13,.92-3.18ZM10.22,21.02l.53,4.46h-1.33l-.53-4.46h1.33Zm-1.92-3.47h.53v1.27h-.53v-1.27Zm-.2,2.12h.42v.78h-.42v-.78Z"/></svg>'
            '<text x="150" y="50" fill="#96290D" font-size="16" text-anchor="middle">Declaration 1</text>',
            // Background for Declaration Two #184A90
            '<rect x="80" y="60" width="140" height="20" fill="#D3D8DE"/>',
            '<text x="150" y="75" fill="#96290D" font-size="16" text-anchor="middle">Declaration 2</text>',
            // Background for Wallet Address and TokenID
            '<rect x="5" y="125" width="290" height="40" fill="#2F343C"/>',
            '<text x="150" y="140" fill="#D3D8DE" font-size="10" text-anchor="middle">ID: ', Strings.toString(tokenId), '</text>',
            '<text x="150" y="155" fill="#D3D8DE" font-size="10" text-anchor="middle">', Strings.toHexString(uint256(uint160(msg.sender)), 20), '</text>',
            '<text x="150" y="260" fill="#FFFFFF" font-size="10" text-anchor="middle">Minted: ', timestamp, '</text>',
            '<text x="45" y="290" fill="#FFFFFF" font-size="14" font-style="italic" text-anchor="middle">"V.V.V.V.V"</text>',
            '<text x="290" y="290" fill="#FFFFFF" font-size="10" font-style="italic" text-anchor="end">~Hacktivate Mindset</text>',
            '</svg>'
        )));

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
        hasReSigned[msg.sender] = true;
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, _buildTokenURI(newItemId));
        _tokenIds++;

        emit DeclarationReSigned(msg.sender, newItemId);
    }

}
