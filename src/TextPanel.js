import React from "react";
import { Texts } from "./Texts";
import { Tab, Tabs } from "@blueprintjs/core";

import PanelOne from "./TextPanels/One";
import PanelTwo from "./TextPanels/Two";

function TextPanel() {
    return (
     <>
        <div>
            {Texts}
        </div>
    </>
    )
}
export default TextPanel
