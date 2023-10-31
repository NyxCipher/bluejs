import React from "react";
import '../App.css';
import { H4, Collapse, Pre, Button, Card, Elevation, Navbar, Alignment } from "@blueprintjs/core";

function PanelOne() {
    return (
     <>
        <div className="texts-body texts-console-outer">
            <ul class="bp5-dark bp5-tab-list {{.modifier}}" role="tablist">
                <H4 className="bp5-dark">B   A   S   I   C</H4>
            </ul>
        <div class="bp5-dark bp5-running-text texts-console-one">
        <Card interactive={true} elevation={Elevation.FIVE} className="texts-console-two">
        <p>
            We build products that make people better at their most important
            work — the kind of work you read about on the front page of the
            newspaper, not just the technology section.
        </p>
        <ul>
            <li>Item the <code>first</code>.</li>
            <li>Item the <strong>second</strong>.</li>
            <li>Item the <a href="#core/typography.running-text">third</a>.</li>
        </ul>
        <p>
            A successful data transformation requires the whole organization — users, the IT shop, and
            leadership — to operate in lockstep. With Foundry, the enterprise comes together to
            transform the organization and turn data into a competitive advantage.
        </p>
        </Card>
        </div>
        </div>
    </>
    )
}
export default PanelOne