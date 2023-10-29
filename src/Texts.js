import React from "react";
import './App.css';
import { Tab, Tabs, type TabId, } from "@blueprintjs/core";
import { Alignment, Classes, Divider, H4, H5, InputGroup, Navbar, Switch } from "@blueprintjs/core";
import { Collapse, Pre, Button, Card, Elevation } from "@blueprintjs/core";
import { Example, Examples, handleBooleanChange } from "@blueprintjs/docs-theme";
// Panels
import PanelOne from "./TextPanels/One";
import PanelTwo from "./TextPanels/Two";

export interface TextsState {
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

export class Texts extends React.PureComponent<ExampleProps, TextsState> {
    state: TextsState = {
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


    render(){
        const options = (
            <>
                <H5>Appearance props</H5>
                <Switch checked={this.state.large} label="Large size" onChange={this.toggleLarge} />
                <Switch checked={this.state.animate} label="Animate tab indicator" onChange={this.toggleAnimate} />
                <H5>Behavior props</H5>
                <Switch
                    checked={this.state.activePanelOnly}
                    label="Render active tab panel only"
                    onChange={this.toggleActiveOnly}
                />
                <H5>Tab content props</H5>
            </>
        )
            return (
            <>
                <div>
                <Texts className="docs-tabs-example" options={options} {...this.props}>
                <h4>T   e   x   t   s</h4>
                <Switch checked={this.state.fill} label="Fill height" onChange={this.toggleFill} />
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
                </Navbar>
                <Divider style={{ margin: "20px 0", width: "100%" }} />
                <H4>Verticle Tabs</H4>
                <Switch checked={this.state.vertical} label="Use vertical tabs" onChange={this.toggleVertical} />
                <Tabs
                    animate={this.state.animate}
                    id="VertAngle"
                    key={this.state.vertical ? "vertical" : "horizontal"}
                    large={this.state.large}
                    renderActiveTabPanelOnly={this.state.activePanelOnly}
                    vertical={this.state.vertical}
                >
                    <Tab id="rx" title="React" panel={<PanelTwo />} />
                    <Tab
                        id="ng"
                        title="Angular"
                        panel={<PanelOne />}
                        tagContent={this.state.showTags ? 10 : undefined}
                        tagProps={{ round: this.state.useRoundTags }}
                    />
                    <Tab id="mb" title="Ember" panel={<PanelOne />} panelClassName="ember-panel" />
                    <Tab id="bb" disabled={true} title="Backbone" panel={<PanelTwo />} />
                    <Tabs.Expander />
                    <InputGroup fill={true} type="text" placeholder="Search..." />
                </Tabs>
                </Texts>
                </div>
            </>
            )
        }
        handleNavbarTabChange = (navbarTabId: TabId) => this.setState({ navbarTabId });
    }