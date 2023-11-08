import React from "react";
import '../App.css';
import { Tooltip, AnchorButton, DialogFooter, Dialog, DialogBody } from "@blueprintjs/core";
import { H4, H3, Divider, Button, Collapse, Pre, Card, Elevation, Navbar, Alignment } from "@blueprintjs/core";

import DialogExample from "./DialogOne.js";

function PanelTwo() {
    return (
     <>
        <div className="texts-body texts-console-outer">
            <ul class="bp5-dark bp5-tab-list {{.modifier}}" role="tablist">
                <H4 className="bp5-dark">N  0   0   B   S</H4>
            </ul>
        <div class="bp5-dark bp5-running-text texts-console-one">
        <Card interactive={true} elevation={Elevation.FIVE} className="texts-console-two">
            <H3><Button className="bp5-icon-repeat"/> Back to the Basics</H3>
            <p>
                Yes, the 90's were a long time ago. However, back then, the Hat's adhered to a strict line of standards.
                One thing was common knowledge, everyone starts out as N00b. There's no escaping this fact. If you want 
                to be <code>Uber1337</code> or even be a <code>Hat</code> one has to become a programmer. 
                There is no escaping this fact as well.
            </p>
            <p>
                Before you begin programming you may want to explore other peoples work, apps, code, and software. This is perfectly fine. This is how we learn.
                However, if you have only set your sights on the toolset of other people, then maybe you don't want to wear a <code>Hat</code>...
            </p>
            <p>
                Start off in our archives and explore the Linux OS's, Books, Tutorials, and Guides. Learn the basics of Networking through other people's work. 
                There is no better way. There is no way, on the face of this planet where one can be a N00b and a 1337 at the same time. It just doesn't work.
                One can not handle an OpenSSL library in C++, one can not handle AV/EDR Obfuscation, one can not handle ASM. If one can not handle ASM, one can not be Uber-1337.
                Breaking down how to start is also near impossible, but the guide below should help you find your way...
            </p>
            <Divider style={{ margin: "20px 0", width: "100%" }} />
            <H4>T   H   E&nbsp;&nbsp;&nbsp;S   T   E   P   S:</H4>
            <ul>
                <li><strong>One:</strong> What is your Mission?</li>
                <li><strong>Two:</strong> How far are you willing to go?</li>
                <li><strong>Three:</strong> Why do you Hack?</li>
            </ul>
            <p>
                You're first step is to answer these questions to your self. For example, if you have a mortal enemy or a rogue website that needs a vigilante to take it down, you may want to start with XSS as your Goal.
                Once you have your goal set, work backgrounds and develop a training path of your own. Let's dive in:
                <ul>
                    <li>1. XSS-Cross Site Scripting To Obtain Access To Forms</li>
                    <li>2. What language is the target site written in?</li>
                    <li>3. What software is running on the front-end, back-end, middleware? How can I tell?</li>
                    <li>4. Which cloud or is a cloud hosting this site?</li>
                    <li>5. How strong are the cloud's defenses, now you are hacking a cloud...?</li>
                    <li>6. What exploits already exist from the data one gathered from one's recon sesh.</li>
                    <li>7. What do I do now with the exploit that I found!?</li>
                    <li>8. I'm ready, but won't I get caught? Hey wait a minuet, this isn't true hacking yet...</li>
                    <li>9. Okay, that's what a VPN Tunnel is...</li>
                    <li>10. Not to bad for my first hack!</li>
                </ul>
            </p>
            <p>
                We can do this kind of thought experiment for any area of Hacking. However, that isn't our job, it is yours N00b! Practice and hone your craft accordingly...
                <ul>
                    <li>1. Social Engineering</li>
                    <li>2. Dark Psychology</li>
                    <li>3. Social Engineering-Tech Focused</li>
                    <li>4. OSI Model</li>
                    <li>5. Attack Frameworks: MITRE & Threat Model</li>
                    <li>6. OSINT</li>
                    <li>7. Choose a Machine Language: ASM, C/C++/C#</li>
                    <li>8. Choose a Langue Further from the Kernel: Python, Java, PHP</li>
                    <li>9. Learn All Scripting Languages: Batch, PowerShell, Bash</li>
                    <li>10. Learn NMAP - Code an NMAP App in Python</li>
                    <li>11. Learn Networking - You can't hack if you can't traverse a network.</li>
                    <li>12. Learn Protocols, RDP, SSH, TELNET, FTP, SFTP, TFTP</li>
                    <li>13. Start Covering Your Tracks At the Start - Learn CISCO iOS</li>
                    <li>14. Exploitation Frameworks</li>
                    <li>15. Metasploit & CVEs</li>
                    <li>16. Remote Administrative Tools</li>
                    <li>17. RootKits</li>
                    <li>18. Malware</li>
                    <li>19. EDR Evasion</li>
                    <li>20. Reverse Engineering & Debugging</li>
                    <li>21. BlackJack: Write your first Virus</li>
                </ul>
                Once you go through those 21 Steps in explicit detail you can call yourself a Hat and no longer a N00b. Why? Because now, you are responsible for the knowlede you hold.
            </p>
            <p><strong>The Hat's As They Once Were</strong>
                <ul>
                    <li>White: Vigilante Hacker for the Good - Never breaks the Law unless to achieve end goal</li>
                    <li>Grey: Vigilante Hacker for the Good - Hacker For Profit for Self as well</li>
                    <li>Black: No Rules. Take No Prisoners. Hack The Planet.</li>
                </ul>
            </p>
            <p><strong>The Grades: 2023</strong>
                <ul>
                    <li>White: InfoSecurity Professional, Penetration Tester</li>
                    <li>Grey: Vigilante Hacker for the Good - Breaks the Law, and Crosses The Line - Penetration Tester w/o Legal Framework</li>
                    <li>Black: No Rules. Take No Prisoners. Hack The Planet. Enemy of the State</li>
                    <li>Blue Team: Defensive Team - Threat Intelligence, OSINT, Hardening, AI-EDR</li>
                    <li>Red Team: Attack Team - Simulated Black & Grey Hats under protection of the Law</li>
                    <li>Purple Teaming: Mixture of Red & Blue, Offensively Defensive</li>
                </ul>
            </p>
            <p><strong>Black Hats: 2023</strong>
                <ul>
                    <li>Criminal</li>
                    <li>Hacktivist/Defacer/Law Breaking To Further Political or Otherwise Hidden Motive</li>
                    <li>Organizational - Hacker Criminal Group - For Profit</li>
                    <li>Persistant Threat - Targets an entity/organization and dedicates months to years of network camping and traversal</li>
                    <li>State Sponsored - See SCADA Hacking - Hacking to further Agenda of Nation State</li>
                </ul>
            </p>
            <p><strong>White & Grey Hats: 2023</strong>
                <ul>
                    <li>Dabbelers - See N00bs</li>
                    <li>InfoSec Students & Professionals</li>
                    <li>InfoSec Teachers & Educators</li>
                    <li>Reporters & New/Media Personas</li>
                    <li>Vigilante Hackers - If they even exist any more...</li>
                </ul>
            </p>
            <p>
                You can either Choose your Hat or let your actions determine the Hat you shall wear. This is my disclaimer. I wanted to develop and craft a real-down-to-earth,
                gritty, grunge, and real TextFile-esque site to give 'one' the feel of being a rogue hacker in the 90's learning how to hack when even being a White Hat was illegal.
                Because of my Mission, I pull no punches and share the details I want to share about hacking. Due to this, as your teacher I must make you aware that if you abuse your
                power in any such way, they are fingerprints on the Key's, On the MAC, on the Network, On The ISPs Routing Table, In The ISPs log files, In the ISPs Backup Files, and 
                assumed in the hands of greater powers - and No do not expect a Canary to come. Ie: You are responsible for <strong>ALL</strong> of your own actions.

                <strong><i> I Bid you Adieu</i></strong>
            <p>
                <br />
                I have an idea, why don't we all chip in and reverse engineer some EDRs. [Brute Ratel Beat Us To It...] Come on, Let's get in the game! Back then, in order to make a name for
                yourself you have to Pwn a whole Platform. Today, just write some bad-ass code that helps a lot of bad-ass people and you're in. You've made your hacker name for yourself. Isn't that
                why you hack in the first place? To be remembered? Then again, who cares anymore? I'll maintain this site for the 'Good of the Cause' and in rememberance of how it use to be.
            </p>
            </p>
            <DialogExample />
        </Card>
        </div>
        </div>
    </>
    )
}
export default PanelTwo