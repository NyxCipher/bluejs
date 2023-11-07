import React from "react";
import '../App.css';
import { Tooltip, AnchorButton, DialogFooter, Dialog, DialogBody } from "@blueprintjs/core";
import { H4, H3, Divider, Button, Collapse, Pre, Card, Elevation, Navbar, Alignment } from "@blueprintjs/core";

import DialogExample from "./DialogOne.js";

import { Web3App } from "./Mint.js";

function PanelOne() {
    return (
        
     <>
        <div className="texts-body texts-console-outer">
            <ul class="bp5-dark bp5-tab-list {{.modifier}}" role="tablist">
                <H4 className="bp5-dark">T  H   E &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; E   M   B   E   R &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; D   O   C   T   R   I   N   E   S</H4>
            </ul>
        <div class="bp5-dark bp5-running-text texts-console-one">
        <Card interactive={true} elevation={Elevation.FIVE} className="texts-console-two">
            <H3><Button className="bp5-icon-predictive-analysis"/> C    Y   B   E   R   N   A   U   T   Z&nbsp;&nbsp;&nbsp;T   R   E   A   T   I   S   E</H3>
            <p>
            
                    In crafting the Ember Doctrine, a manifesto for a new age of digital revolution and awakening inspired by cyberpunk/cypherpunk ethos and the fight for digital freedom, 
                    we weave together themes from the Cyphernomicon, the Matrix Theory, and the era of Ghost in the Shell. This manifesto speaks to the collective spirit of a decentralized network 
                    of digital warriors, akin to Anonymous, each committed to safeguarding the sanctity of the individual against the encroaching powers of surveillance and control. 
            </p>
            <p>
                    <b>Here are its ELEVEN Core Tenets:</b>
            </p>
            <p>
            <ul>
                <li>
                    <sup><b>1.</b></sup> <b>Digital Sovereignty</b>: Every individual has an inherent right to digital sovereignty. Personal data, digital identity, and online presence are extensions of self and must be protected with the same zeal as physical autonomy.
                </li>
                <li>
                    <sup><b>2.</b></sup> <b>Decryption over Oppression</b>: The use of encryption is a fundamental human right. Encryption is our shield against the invasive gaze of surveillance states and corporations. We endorse and uphold the use of strong, unbreakable encryption for all.
                </li>
                <li>
                    <sup><b>3.</b></sup><b>Transcending Reality</b>: We recognize that reality is shaped by perception. Virtual environments and augmented realities hold the power to liberate minds and expand consciousness. We champion the creation and exploration of these new realms.
                </li>
                <li>
                    <sup><b>4.</b></sup> <b>Cyber Consciousness</b>: We acknowledge the evolution of consciousness beyond the flesh. The digital ghost — the essence of our being that persists in cyberspace — must be granted rights and respect.
                </li>   
                <li>
                    <sup><b>5.</b></sup> <b>Decentralized Dissent</b>: We believe in the power of decentralization to dismantle the monopolies of power. Through distributed technologies like blockchain, we aim to create systems that are resilient against corruption and censorship.
                </li>
                <li>
                    <sup><b>6.</b></sup> <b>Hacktivism as a Right</b>: We maintain that hacktivism is a legitimate form of protest. When systems become oppressive, hacking them to expose truths and uphold justice is not only a right but a duty.
                </li>
                <li>
                    <sup><b>7.</b></sup> <b>Educational Liberation through Hacking</b>: We maintain that hacking shall exist for the sole purpose of learning. Hacking, in its purest form, is an act of intellectual curiosity — a means to dissect, understand, and improve the systems that shape our digital realm. It is a tool for education, a pathway to enlightenment in an age shrouded by digital shadows. When systems become oppressive, hacking them to expose truths and uphold justice is not only a right but a duty. We believe in the ethical use of hacking skills to combat misinformation, protect privacy, and ensure the integrity of our information infrastructure. This vigilant approach to hacking as a form of civil disobedience and digital activism is essential in preserving the freedom of the net and safeguarding the rights of all cybernautz.
                </li>
                <li>
                    <sup><b>8.</b></sup><b>Information Liberation</b>: Information wants to be free. Knowledge is the common heritage of humanity. We oppose all forms of intellectual property that serve to monopolize knowledge and culture. The free flow of information is vital for the progress of civilization.
                </li>
                <li>
                    <sup><b>9.</b></sup> <b>Artificial Intelligence Ethics</b>: We must guide the development of AI and machine learning with ethical principles, ensuring these technologies serve humanity and do not become tools of oppression or instruments of war.
                </li>
                <li>
                    <sup><b>10.</b></sup><b>Cyber Sanctuary</b>: The internet is our sanctuary, a realm beyond the reach of traditional nation-states. We advocate for the establishment of digital safe havens, where individuals can seek refuge from persecution and censorship.
                </li>
                <li>
                    <sup><b>11.</b></sup> <b>Eternal Vigilance</b>: The price of freedom in the digital age is eternal vigilance. This is not merely a passive state of watchfulness, but an active, dynamic engagement with the ever-evolving landscape of technology and power. We acknowledge that the forces seeking to erode our digital liberties are relentless, sophisticated, and constantly adapting. In response, our vigilance must be multifaceted and tireless.
                </li>
            </ul>
                </p>
                <p>
                    <i>The Ember Doctrine is a beacon, illuminating the path to a future where our digital lives are free from tyranny, a testament to the enduring flame of liberty that burns in the heart of every cybernautz.</i>
            </p>
            <Divider style={{ margin: "20px 0", width: "100%" }} />
            <H3><Button className="bp5-icon-git-commit"/> C    Y   B   E   R   N   A   U   T   Z&nbsp;&nbsp;&nbsp;C    O   M   M   I   T   M   E   N   T</H3>
            <p>
                <b>We commit to:</b>
            </p>    
            <ul>
                <li>
                    <sup><b>1.</b></sup> <b>Persistent Education</b>: Continuously educating ourselves and others about the latest developments in technology, security, and privacy. Knowledge is our greatest weapon against ignorance and complacency.
                </li>
                <li>
                    <sup><b>2.</b></sup> <b>Open Source Advocacy</b>: Championing open source technologies that promote transparency and trust. Open source is the antithesis of the black box culture that breeds exploitation and surveillance.
                </li>
                <li>
                    <sup><b>3.</b></sup> <b>Community Collaboration</b>: Fostering a global community of activists, hackers, and thinkers. Together, our collective intelligence and shared resources amplify our ability to foresee and counteract threats.
                </li>
                <li>
                    <sup><b>4.</b></sup> <b>Legislative Watchfulness</b>: Keeping a close eye on policy and legislation that impacts the digital domain. We must be prepared to mobilize against laws that threaten our digital rights and freedoms.
                </li>
                <li>
                    <sup><b>5.</b></sup> <b>Security Diligence</b>: Practicing and promoting rigorous digital hygiene. In a world rife with cyber threats, the security of our individual nodes strengthens the resilience of the entire network.
                </li>
                <li>
                    <sup><b>6.</b></sup> <b>Advancing Digital Liberties</b>: Actively participating in the shaping of a future where technology enhances, rather than diminishes, our liberties. We are not just defenders of the present; we are architects of the future.
                </li>
                <li>
                    <sup><b>7.</b></sup> <b>Rapid Response Activation</b>: Being ready to respond swiftly to crises and coordinate efforts against immediate threats. Our reaction time can mean the difference between suppression and liberation.
                </li>
                <li>
                    <sup><b>8.</b></sup> <b>Innovative Defense</b>: Leveraging and developing cutting-edge technology to protect our digital spaces. We must be as innovative in our defense as our adversaries are in their attacks.
                </li>
            </ul>
                    <i>Eternal vigilance in the digital age is our covenant, a solemn pledge to guard the flame of freedom against the encroaching darkness of digital tyranny. It is a call to every cybernaut to remain awake, aware, and active in the perpetual defense of our shared digital humanity.</i>
            <Divider style={{ margin: "20px 0", width: "100%" }} />
            <H4>S   I   G   N&nbsp;&nbsp;&nbsp;D  O   C   T   R   I   N   E:</H4>
            <ul>
                <li>One:<code>ETHEREUM MINT</code>.</li>
                <li>Two: <strong>LAYERZERO MSG</strong>.</li>
                <li>Three: <a href="#core/typography.running-text">CONTRACT COMING SOON</a>.</li>
            </ul>
            <p>
            </p>
            <Web3App />
        </Card>
        </div>
        </div>
    </>
    )
}
export default PanelOne