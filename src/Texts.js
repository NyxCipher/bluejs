import React from "react";
import './App.css';
import {
    Alignment,
    Classes,
    Divider,
    H4,
    H5,
    InputGroup,
    Navbar,
    Switch,
    Tab,
    type TabId,
    Tabs,
} from "@blueprintjs/core";
import { Collapse, Pre, Button, Card, Elevation } from "@blueprintjs/core";
import { Example, Examples, handleBooleanChange } from "@blueprintjs/docs-theme";
import { Flame } from "@blueprintjs/icons";

// Panels
import PanelOne from "./TextPanels/One";
import PanelTwo from "./TextPanels/Two";
import PanelEmber from "./TextPanels/Ember";

export interface TheLoungeState {
    verticle: boolean;
    navbarTabId: TabId;
    fill: boolean;
    animate: boolean;
    fill: boolean;
    large: boolean;
    showIcon: boolean;
    showTags: boolean;
    useRoundTags: boolean;
};

class TheLounge extends React.PureComponent<ExampleProps, TheLoungeState> {
    state: TheLoungeState = {
        navbarTabId: "Home",
        verticle: true,
        fill: true,
        animate: true,
        showIcon: true,
        showTags: true,
        useRoundTags: true,

    };

    toggleAnimate = handleBooleanChange(animate => this.setState({ animate }));

    toggleVertical = handleBooleanChange(vertical => this.setState({ vertical }));

    toggleTag = handleBooleanChange(tag => this.setState({ showTags: tag }));

    toggleFill = handleBooleanChange(fill => this.setState({ fill }));

    toggleRoundTags = handleBooleanChange(useRoundTags => this.setState({ useRoundTags }));

    toggleTag = handleBooleanChange(tag => this.setState({ showTags: tag }));

        render() {
            const options = (
                <>
                    {/*<H5>Appearance props</H5>
                    <Switch checked={this.state.large} label="Large size" onChange={this.toggleLarge} />
                    <Switch checked={this.state.animate} label="Animate tab indicator" onChange={this.toggleAnimate} />
                    <H5>Behavior props</H5>
                    <Switch
                        checked={this.state.activePanelOnly}
                        label="Render active tab panel only"
                        onChange={this.toggleActiveOnly}
                    />
            <H5>Tab content props</H5>*/}
                </>
            );
            return (
            <div className="master-lounge">
                <div className="lounge-card">
                    
                    <Card interactive={true} elevation={Elevation.FIVE} className='lounge-card-two'>
                    <Example className="docs-tabs-example" options={options} {...this.props}>
                        <div className="div-h5-hero">
                            <h4>T   h   e &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; L  o   u   n   g   e&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     //&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      T   e   x   t   s</h4>
                            <div className="lounge-vert">
                                <Switch className="" checked={this.state.vertical} label="Use vertical tabs" onChange={this.toggleVertical} />
                            </div>
                        </div>
                {/*}<Switch checked={this.state.fill} label="Fill height" onChange={this.toggleFill} />
                <Navbar>
                    <Navbar.Group>
                        <Navbar.Heading>
                            Page: <strong>{this.state.navbarTabId}</strong>
                        </Navbar.Heading>
                    </Navbar.Group>
                    <Navbar.Group align={Alignment.RIGHT}>
                        <Tabs
                            animate={this.state.animate}
                            fill={this.state.fill}
                            id="navbar"
                            large={this.state.large}
                            onChange={this.handleNavbarTabChange}
                            selectedTabId={this.state.navbarTabId}
                        >
                            <Tab id="Home" title="Home" icon={this.state.showIcon ? "home" : undefined} />
                            <Tab id="Files" title="Files" icon={this.state.showIcon ? "folder-open" : undefined} />
                            <Tab
                                id="Builds"
                                title="Builds"
                                icon={this.state.showIcon ? "build" : undefined}
                                tagContent={this.state.showTags ? 4 : undefined}
                                tagProps={{ round: this.state.useRoundTags }}
                            />
                        </Tabs>
                    </Navbar.Group>
            </Navbar>*/}
                <Divider style={{ margin: "20px 0", width: "100%" }} />
                    <Tabs
                        animate={this.state.animate}
                        id="VertAngle"
                        key={this.state.vertical ? "vertical" : "horizontal"}
                        large={this.state.large}
                        renderActiveTabPanelOnly={this.state.activePanelOnly}
                        vertical={this.state.vertical}
                    >
                        <Tab id="rx" icon="database" title="B   A   S   I   C" panel={<PanelOne />} />
                        <Tab
                            id="ng"
                            icon="learning"
                            title="N    0   0   B   S"
                            panel={<PanelTwo />}
                            tagContent={this.state.showTags ? 10 : undefined}
                            tagProps={{ round: this.state.useRoundTags }}
                        />
                        <Tab id="bb" icon="hat" title="U   B   E   R" panel={<PanelTwo />} />
                        <Tab id="mb" icon="flame" title="E   M   B   E   R" panel={<PanelEmber />} panelClassName="ember-panel" />
                        <Tabs.Expander />
                    </Tabs>
                </Example>
                </Card>
                </div>
            </div>
            )
        }
        handleNavbarTabChange = (navbarTabId: TabId) => this.setState({ navbarTabId });
    }

    export default TheLounge