import React from "react";
import '../App.css';
import { Tooltip, AnchorButton, DialogFooter, Dialog, DialogBody } from "@blueprintjs/core";
import { H4, H3, Divider, Button, Collapse, Pre, Card, Elevation, Navbar, Alignment } from "@blueprintjs/core";

import DialogExample from "./DialogOne.js";

function PanelOne() {
    return (
     <>
        <div className="texts-body texts-console-outer">
            <ul class="bp5-dark bp5-tab-list {{.modifier}}" role="tablist">
                <H4 className="bp5-dark">B   A   S   I   C</H4>
            </ul>
        <div class="bp5-dark bp5-running-text texts-console-one">
        <Card interactive={true} elevation={Elevation.FIVE} className="texts-console-two">
            <H3><Button className="bp5-icon-headset"/> Enter The Lounge</H3>
            <p>
            In the shadowed alleyways of the digital realm, where codes intertwine and secrets are 
            whispered, there exists a sanctuary known only to a select few: 'The Lounge'. Here, 
            curious minds rendezvous with arcane knowledge, a place where the barriers of the 
            ordinary dissolve and ones are introduced to a world unimagined. As you stand on the 
            precipice of revelation, the pulsating hum of data streams welcomes you, much like the 
            rhythmic cadence of a forgotten song that beckons one to dance.
            </p>
            <p>
            In 'The Lounge', you will not merely read or observe; you'll immerse yourself, intertwining 
            with the very fabric of info-sec lore. Just as Morpheus introduced Neo to the Matrix, 
            unveiling truths that stretched the boundaries of belief, so too will 'The Lounge' unfurl 
            the mysteries of the Hacktivate Mindset before you. Cast aside preconceptions, for you're 
            about to embark on a journey that challenges everything you thought you knew about the 
            cybernetic universe. Welcome, traveler, to 'The Lounge'.
            </p>
            <Divider style={{ margin: "20px 0", width: "100%" }} />
            <H4>E   X   A    M   P   L   E   S:</H4>
            <ul>
                <li>One:<code>Tools of the Trade</code>.</li>
                <li>Two: <strong>InfoSec Basics</strong>.</li>
                <li>Three: <a href="#core/typography.running-text">Using Your Tools & Equiptment</a>.</li>
            </ul>
            <p>
                A successful data transformation requires the whole organization — users, the IT shop, and
                leadership — to operate in lockstep. With Foundry, the enterprise comes together to
                transform the organization and turn data into a competitive advantage.
            </p>
            <DialogExample />
        </Card>
        </div>
        </div>
    </>
    )
}
export default PanelOne