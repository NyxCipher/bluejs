import React from 'react';
import './App.css';
import { Button, Card, Elevation, Navbar, Alignment } from "@blueprintjs/core";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Routes,
    Router,
    useNavigate
  } from "react-router-dom";

import App from "./App"
import Files from "./Files"
import Vault from "./Vault"
import TextPanel from "./TextPanel"

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/files",
        element: <Files/>,
      },
      {
        path: "/vault",
        element: <Vault/>,
      },
      {
        path: "/textpanel",
        element: <TextPanel />,
      },
  ]);
  
// Main App Component
function NavRoute() {
    const navigate = useNavigate();

    function onClickTexts(){
        navigate('/textpanel');
    }

    function onClickVault(){
        navigate('/vault');
    }

    function onClickFiles(){
        navigate('/files');
    }

    function onClickHome(){
        navigate('/');
    }
  return (
      <>
          {/* Routes */}
    <div className='backdropOne'>
    <Navbar className='nav-asset'>
    <Navbar.Group align={Alignment.LEFT} className='nav-asset'>
    <nav className="bp5-navbar bp5-dark">
      <div className="bp5-navbar-group bp5-align-left">
        <div className="bp5-navbar-heading bp5-dark bp5-icon-headset">H4cktivate</div>
      </div>
      <div class="bp5-navbar-group bp5-align-right">
          <button onClick={onClickHome} id="home" class="bp5-button bp5-minimal bp5-icon-home">Home</button>
          <button onClick={onClickFiles} id="bt" class="bp5-button bp5-minimal bp5-icon-document">Files</button>
          <button onClick={onClickVault} id="bt2" class="bp5-button bp5-minimal bp5-icon-playbook">Vault</button>
          <button onClick={onClickTexts} id="bt3" class="bp5-button bp5-minimal bp5-icon-search-text">Texts</button>
          <span class="bp5-navbar-divider"></span>
          <button class="bp5-button bp5-minimal bp5-icon-user"></button>
          <button class="bp5-button bp5-minimal bp5-icon-notifications"></button>
          <button class="bp5-button bp5-minimal bp5-icon-cog"></button>
      </div>
  </nav>
    </Navbar.Group>
    </Navbar>
    <Routes>
    <Route exact path="/" element={<App />} />
    <Route exact path="/files" element={<Files />} />
    <Route exact path="/vault" element={<Vault />} />
    <Route exact path="/textpanel" element={<TextPanel />} />
    </Routes>
    </div>
    </>
  );
}

export default NavRoute;
