/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";

import {
    AnchorButton,
    Button,
    Code,
    Dialog,
    DialogBody,
    DialogFooter,
    type DialogProps,
    H5,
    Switch,
    Tooltip,
} from "@blueprintjs/core";
import { Example, type ExampleProps, handleBooleanChange } from "@blueprintjs/docs-theme";

import type { BlueprintExampleData } from "../../tags/types";

export interface DialogExampleState {
    autoFocus: boolean;
    canEscapeKeyClose: boolean;
    canOutsideClickClose: boolean;
    enforceFocus: boolean;
    shouldReturnFocusOnClose: boolean;
    usePortal: boolean;
}
export default class DialogExample extends React.PureComponent<ExampleProps<BlueprintExampleData>, DialogExampleState> {
     state: DialogExampleState = {
        autoFocus: true,
        canEscapeKeyClose: true,
        canOutsideClickClose: true,
        enforceFocus: true,
        shouldReturnFocusOnClose: true,
        usePortal: true,
    };

     handleAutoFocusChange = handleBooleanChange(autoFocus => this.setState({ autoFocus }));

     handleEnforceFocusChange = handleBooleanChange(enforceFocus => this.setState({ enforceFocus }));

     handleEscapeKeyChange = handleBooleanChange(canEscapeKeyClose => this.setState({ canEscapeKeyClose }));

     handleOutsideClickChange = handleBooleanChange(val => this.setState({ canOutsideClickClose: val }));

     handleShouldReturnFocusOnCloseChange = handleBooleanChange(shouldReturnFocusOnClose =>
        this.setState({ shouldReturnFocusOnClose }),
    );

     handleUsePortalChange = handleBooleanChange(usePortal => this.setState({ usePortal }));

     render() {
        return (
            <Example {...this.props}>
                {/*<ButtonWithDialog
                    className={this.props.data}
                    buttonText="Show dialog"
                    {...this.state}
                    footerStyle="none"
                />
                <ButtonWithDialog
                    className={this.props.data}
                    icon="info-sign"
                    title="Palantir Foundry"
                    buttonText="Show dialog with title"
                    footerStyle="none"
                    {...this.state}
        />*/}
                <ButtonTools
                    className={this.props.data}
                    icon="buggy"
                    title="Tools"
                    buttonText="Tools"
                    footerStyle="default"
                    {...this.state}
                />
                <ButtonBasics
                    className={this.props.data}
                    icon="manual"
                    title="Basics"
                    buttonText="Basics"
                    footerStyle="default"
                    {...this.state}
                />
                {/*<ButtonWithDialog
                    className={this.props.data}
                    icon="info-sign"
                    title="Palantir Foundry"
                    buttonText="Show dialog with title and minimal footer"
                    footerStyle="minimal"
                    {...this.state}
    />*/}
            </Example>
        );
    }
}

function ButtonTools({
    buttonText,
    footerStyle,
    ...props
}: Omit<DialogProps, "isOpen"> & { buttonText: string; footerStyle: "default" | "minimal" | "none" }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleButtonClick = React.useCallback(() => setIsOpen(!isOpen), []);
    const handleClose = React.useCallback(() => setIsOpen(false), []);
    const footerActions = (
        <>
            <Tooltip content="This button is hooked up to close the dialog.">
                <Button onClick={handleClose}>Close</Button>
            </Tooltip>
            <VisitFoundryWebsiteAnchorButton />
        </>
    );

    return (
        <>
            <Button onClick={handleButtonClick} text={buttonText} />
            <Dialog {...props} isOpen={isOpen} onClose={handleClose}>
                <DialogBody useOverflowScrollContainer={footerStyle === "minimal" ? false : undefined}>
                    <p>
                        <strong>
                            Lounge Tools
                        </strong>
                    </p>
                    <p>
                        Palantir Foundry radically reimagines the way enterprises interact with data by amplifying and
                        extending the power of data integration. With Foundry, anyone can source, fuse, and transform
                        data into any shape they desire. Business analysts become data engineers — and leaders in their
                        organization’s data revolution.
                    </p>
                    <p>
                        Foundry’s back end includes a suite of best-in-class data integration capabilities: data
                        provenance, git-style versioning semantics, granular access controls, branching, transformation
                        authoring, and more. But these powers are not limited to the back-end IT shop.
                    </p>
                    <p>
                        In Foundry, tables, applications, reports, presentations, and spreadsheets operate as data
                        integrations in their own right. Access controls, transformation logic, and data quality flow
                        from original data source to intermediate analysis to presentation in real time. Every end
                        product created in Foundry becomes a new data source that other users can build upon. And the
                        enterprise data foundation goes where the business drives it.
                    </p>
                    <p>Start the revolution. Unleash the power of data integration with Palantir Foundry.</p>
                </DialogBody>

                {footerStyle === "default" && <DialogFooter actions={footerActions}>All checks passed</DialogFooter>}

                {footerStyle === "minimal" && <DialogFooter minimal={true} actions={footerActions} />}
            </Dialog>
        </>
    );
}
function ButtonBasics({
    buttonText,
    footerStyle,
    ...props
}: Omit<DialogProps, "isOpen"> & { buttonText: string; footerStyle: "default" | "minimal" | "none" }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleButtonClick = React.useCallback(() => setIsOpen(!isOpen), []);
    const handleClose = React.useCallback(() => setIsOpen(false), []);
    const footerActions = (
        <>
            <Tooltip content="This button is hooked up to close the dialog.">
                <Button onClick={handleClose}>Close</Button>
            </Tooltip>
            <VisitFoundryWebsiteAnchorButton />
        </>
    );

    return (
        <>
            <Button onClick={handleButtonClick} text={buttonText} />
            <Dialog {...props} isOpen={isOpen} onClose={handleClose}>
                <DialogBody useOverflowScrollContainer={footerStyle === "minimal" ? false : undefined}>
                    <p>
                        <strong>
                            Basics Manual
                        </strong>
                    </p>
                    <p>
                        Palantir Foundry radically reimagines the way enterprises interact with data by amplifying and
                        extending the power of data integration. With Foundry, anyone can source, fuse, and transform
                        data into any shape they desire. Business analysts become data engineers — and leaders in their
                        organization’s data revolution.
                    </p>
                    <p>
                        Foundry’s back end includes a suite of best-in-class data integration capabilities: data
                        provenance, git-style versioning semantics, granular access controls, branching, transformation
                        authoring, and more. But these powers are not limited to the back-end IT shop.
                    </p>
                    <p>
                        In Foundry, tables, applications, reports, presentations, and spreadsheets operate as data
                        integrations in their own right. Access controls, transformation logic, and data quality flow
                        from original data source to intermediate analysis to presentation in real time. Every end
                        product created in Foundry becomes a new data source that other users can build upon. And the
                        enterprise data foundation goes where the business drives it.
                    </p>
                    <p>Start the revolution. Unleash the power of data integration with Palantir Foundry.</p>
                </DialogBody>

                {footerStyle === "default" && <DialogFooter actions={footerActions}>All checks passed</DialogFooter>}

                {footerStyle === "minimal" && <DialogFooter minimal={true} actions={footerActions} />}
            </Dialog>
        </>
    );
}

function VisitFoundryWebsiteAnchorButton(props: { fill?: boolean }) {
    return (
        <Tooltip content="Opens link in a new page" fill={props.fill}>
            <AnchorButton
                intent="primary"
                href="https://www.palantir.com/palantir-foundry/"
                target="_blank"
                icon="share"
                fill={props.fill}
            >
                Visit the Foundry website
            </AnchorButton>
        </Tooltip>
    );
}