import React from "react";
import '../App.css';
import { Collapse, Pre, Button, Card, Elevation, Navbar, Alignment } from "@blueprintjs/core";

function PanelOne() {
    return (
     <>
        <div>
        <div class="bp5-tabs">
            <ul class="bp5-tab-list {{.modifier}}" role="tablist">
                <li class="bp5-tab" role="tab" aria-selected="true">Selected tab</li>
                <li class="bp5-tab" role="tab">Another tab</li>
                <li class="bp5-tab" role="tab" aria-disabled="true">Disabled tab</li>
            </ul>
            <div class="bp5-tab-panel" role="tabpanel">Selected panel</div>
            <div class="bp5-tab-panel" role="tabpanel" aria-hidden="true">Another panel</div>
            <div class="bp5-tab-panel" role="tabpanel" aria-hidden="true">Disabled panel</div>
        </div>
        </div>
    </>
    )
}
export default PanelOne