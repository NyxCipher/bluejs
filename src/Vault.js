import React from 'react';
import './App.css';
import { Collapse, Pre, Button, Card, Elevation, Navbar, Alignment } from "@blueprintjs/core";

import KevinMitnick from './assets/KevinMitnick.jpg';
import RootKit from './assets/rootkit.webp';
import DataPrivacy from './assets/privacy.webp';
import Hacking from './assets/hacking.webp';
import HackADay from './assets/Unknown.png';
import TwoSix00 from './assets/2600_Spring_2012.gif';
import LinuxFormat from './assets/linuxFormat.jpeg';
import EyeSpy from './assets/eye-spy-magazine-issue-129-cover.jpg'

import Ubuntu from './VaultOS/ubuntu';
import EndOs from './VaultOS/endos';
import Tails from './VaultOS/tails';
import Koda from './VaultOS/kodachi';
import Kali from './VaultOS/kali';
import Blackarch from './VaultOS/blackarch';

export interface CollapseExampleState {
    isOpen?: boolean;
};

export class CollapseExample extends React.Component<{}, CollapseExampleState> {
    state = {
        isOpen: false,
        isOpenTwo: false,
        isOpenThree: false,
        isOpenFour: false,
        isOpenFive: false,
        isOpenSix: false,
    };

    render() {
        return (
            <div>
                <button id="one" type="button" class="bp5-icon-add bp5-minimal" onClick={this.handleClick}>
                    {this.state.isOpen ? "Hide" : "Show"} Ubuntu
                </button>
                <Collapse isOpen={this.state.isOpen}>
                    <Pre className="bp5-dark vault-console bp5-monospace-text">
                        <Ubuntu/>
                    </Pre>
                </Collapse>
                <button id="two" type="button" class="bp5-minimal bp5-icon-add {{.modifier}}" onClick={this.handleClickTwo}>
                    {this.state.isOpenTwo ? "Hide" : "Show"} Endavour OS
                </button>
                <Collapse isOpen={this.state.isOpenTwo}>
                    <Pre className="bp5-dark vault-console bp5-monospace-text">
                        <EndOs/>
                    </Pre>
                </Collapse>
                <button id="three" type="button" class="bp5-minimal bp5-icon-add {{.modifier}}" onClick={this.handleClickThree}>
                    {this.state.isOpenThree ? "Hide" : "Show"} Tails OS
                </button>
                <Collapse isOpen={this.state.isOpenThree}>
                    <Pre className="bp5-dark vault-console bp5-monospace-text">
                        <Tails/>
                    </Pre>
                </Collapse>
                <button id="four" type="button" class="bp5-minimal bp5-icon-add {{.modifier}}" onClick={this.handleClickFour}>
                    {this.state.isOpenFour ? "Hide" : "Show"} Kodachi OS
                </button>
                <Collapse isOpen={this.state.isOpenFour}>
                    <Pre className="bp5-dark vault-console bp5-monospace-text">
                        <Koda/>
                    </Pre>
                </Collapse>
                <button id="five" type="button" class="bp5-minimal bp5-icon-add {{.modifier}}" onClick={this.handleClickFive}>
                    {this.state.isOpenFive ? "Hide" : "Show"} Kali OS
                </button>
                <Collapse isOpen={this.state.isOpenFive}>
                    <Pre className="bp5-dark vault-console bp5-monospace-text">
                        <Kali/>
                    </Pre>
                </Collapse>
                <button id="six" type="button" class="bp5-minimal bp5-icon-add {{.modifier}}" onClick={this.handleClickSix}>
                    {this.state.isOpenSix ? "Hide" : "Show"} BlackArch OS
                </button>
                <Collapse isOpen={this.state.isOpenSix}>
                    <Pre className="bp5-dark vault-console bp5-monospace-text">
                        <Blackarch/>
                    </Pre>
                </Collapse>
            </div>
        );
    }

    handleClick = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    handleClickTwo = () => {
        this.setState({ isOpenTwo: !this.state.isOpenTwo });
    }
    handleClickThree = () => {
        this.setState({ isOpenThree: !this.state.isOpenThree });
    }
    handleClickFour = () => {
        this.setState({ isOpenFour: !this.state.isOpenFour });
    }
    handleClickFive = () => {
        this.setState({ isOpenFive: !this.state.isOpenFive });
    }
    handleClickSix = () => {
        this.setState({ isOpenSix: !this.state.isOpenSix });
    }
}


// Main App Component
function Vault() {
  return (
   <div>
   <Card interactive={true} elevation={Elevation.ONE} className='vault-card'>
       <div>
            <Card interactive={true} elevation={Elevation.ONE} className='vault-head-card'>
                <h2 className="bp5-dark">InfoSec Distro Watch:</h2>
                <div class="bp5-monospace-text">
                    <p>Closely Used & Assess Linux Distros</p>
                </div>
            </Card>
            <Card elevation={Elevation.ONE} className='vault-head-card'>
                <CollapseExample/>
            </Card>
            <Card interactive={true} elevation={Elevation.ONE} className='vault-head-card'>
                <h2 className="bp5-dark">Recommended Books:</h2>
                <div class="bp5-monospace-text">
                    <p>Though there exists countless books on <strong>InfoSec</strong>, <strong>Hacking</strong>, <strong>Security</strong>, and <strong>Privacy</strong>, I have decided only to list the ones that I have read and partially read so that I can speak on them best.</p>
                </div>
            </Card>
            <div className="vault-card-container">
            <Card interactive={true} elevation={Elevation.ONE} className='vault-sub-card vault-inline-card'>
                <img className="vault-img" src={RootKit}/>
            </Card>
            <Card interactive={true} elevation={Elevation.ONE} className='vault-sub-card vault-inline-card'>
                <img src={KevinMitnick}/>
            </Card>
            <Card interactive={true} elevation={Elevation.ONE} className='vault-sub-card vault-inline-card'>
                <img className="vault-img" src={DataPrivacy}/>
            </Card>
            <Card interactive={true} elevation={Elevation.ONE} className='vault-sub-card vault-inline-card'>
                <img className="vault-img" src={Hacking}/>
            </Card>
            </div>
            <div className="vault-card-container">
            <Card interactive={true} elevation={Elevation.ONE} className='vault-sub-card vault-inline-card-text'>
                <img className="vault-img-mag-rectangle" src={TwoSix00}/>
            </Card>
            <Card interactive={true} elevation={Elevation.ONE} className='vault-sub-card vault-inline-card-mid'>
                <img className="vault-img-mag-square" src={HackADay}/>
            </Card>
            <Card interactive={true} elevation={Elevation.ONE} className='vault-sub-card vault-inline-card-text'>
                <img className="vault-img-mag-rectangle" src={EyeSpy}/>
            </Card>
            </div>
        </div>
    </Card>
   </div>
  );
}

export default Vault;
