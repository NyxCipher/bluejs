import './App.css';
import React from "react";
import { Button, Card, Elevation, Navbar, Alignment } from "@blueprintjs/core";

// Banner
import BannerIMG from "./assets/Banner-2.png"
import ITIMG from "./assets/IT.png"

function App () {
  return (
    <div className='backdropOne'>
      {/*<Navbar className='nav-asset'>
      <Navbar.Group align={Alignment.LEFT} className='nav-asset'>
      <nav class="bp5-navbar bp5-dark">
        <div class="bp5-navbar-group bp5-align-left">
          <div class="bp5-navbar-heading bp5-dark bp5-icon-headset">H4cktivate</div>
        </div>
        <div class="bp5-navbar-group bp5-align-right">
            <button class="bp5-button bp5-minimal bp5-icon-home">Home</button>
            <button class="bp5-button bp5-minimal bp5-icon-document">Files</button>
            <span class="bp5-navbar-divider"></span>
            <button class="bp5-button bp5-minimal bp5-icon-user"></button>
            <button class="bp5-button bp5-minimal bp5-icon-notifications"></button>
            <button class="bp5-button bp5-minimal bp5-icon-cog"></button>
        </div>
    </nav>
      </Navbar.Group>
  </Navbar>*/}
      <Card interactive={true} elevation={Elevation.FIVE} className='card-hero'>
        <div className='div-h5-hero'>
            <h1 className="bp5-dark">
              
            </h1>
        </div>
        <div className='div-hero-container'>
        </div>
        <p>Card Content</p>
        
        </Card>
        {/*<img class="triClass-1" src={BannerIMG} />
        <img class="triClass-2" src={BannerIMG} />
        <img class="triClass-3" src={BannerIMG} />*/}
        <Card interactive={true} elevation={Elevation.TWO} className='card-body-one'>
        </Card>
        <Card interactive={true} elevation={Elevation.TWO} className='card-body-two'>
        </Card>
        <Card interactive={true} elevation={Elevation.TWO} className='card-body-three'>
        </Card>
        <Card interactive={true} elevation={Elevation.ONE} className='main-card'>
          <Card interactive={true} elevation={Elevation.FIVE} className='main-card'>
            <h1 className='bp5-dark'>...Wake Up...</h1>
            </Card>
            <Card interactive={true} elevation={Elevation.ONE} className='main-card-2'>
              <div className="bp5-running-text {{.modifier}}">
              <blockquote>
                <i>Everyone has the right to freedom of thought, conscience and religion; this right 
                  includes freedom to change his religion or belief, and freedom, either alone or in 
                  community with others and in public or private, to manifest his religion or belief 
                  in teaching, practice, worship and observance. Everyone has the right to freedom of 
                  opinion and expression; this right includes freedom to hold opinions without 
                  interference and to seek, receive and impart information and ideas through any 
                  media and regardless of frontiers. Everyone has the right to rest and leisure, 
                  including reasonable limitation of working hours and periodic holidays with pay.</i>
              </blockquote>
              <p className='author'><i>~Christian Robertson</i></p>
              <h3>Scale, Speed, Agility</h3>
              <p>
                A successful data transformation requires the whole organization — users, the IT shop, and
                leadership — to operate in lockstep. With Foundry, the enterprise comes together to
                transform the organization and turn data into a competitive advantage.
              </p>
              <p>
                Hacktivate Mindset focuses on the Mental Schema <sup>[1]</sup> of the IT Ingeniator <sup>[2]</sup>. 
                This person, <strong>He</strong>/<strong>She</strong>/<strong>They</strong>/<strong>Them</strong>, is not limited to any class of work, from Help-Desk to Analyst, 
                we all fit in. The Goal & Purpose of <i><strong>H.M.</strong></i> is to educate the <code>Free-Thinker</code> and arm them the way
                the <strong>Hats</strong> arm their adepts.
              </p>
              <p>
                <i><strong>H.M.</strong></i> is comprised of a dedicated array of individuals who contribute to The Archive.
              </p>
              <div className="card-container">
                <Card interactive={true} elevation={Elevation.ONE} className='sub-card-1 inline-card'>
                  <h5><i><sup><a href="https://dictionary.apa.org/schema">[1]</a></sup> Schema</i></h5>
                  <p>
                    <code>n. <i>(pl. schemata)</i></code>
                  </p>
                  <p class='tab wrap-text'>
                    1. a collection of basic knowledge about a concept or entity that serves as a guide to 
                    perception, interpretation, imagination, or problem solving. For example, the schema 
                    “dorm room” suggests that a bed and a desk are probably part of the scene, that a 
                    microwave oven might or might not be, and that expensive Persian rugs probably will 
                    not be. Also called cognitive schema. See also frame; perceptual schema.
                  </p>
                  <p className='tab wrap-text'>
                    2. a cognitive structure representing a person’s knowledge about some entity or 
                    situation, including its qualities and the relationships between these. Schemas 
                    are usually abstractions that simplify a person’s world. In 1932, Frederic C. Bartlett 
                    showed that past experiences are stored in memory as schemas; impressions of other 
                    people are also thought to be organized in this way.
                  </p>
                  <p className='tab wrap-text'>
                    3. an outlook or assumption that an individual has of the self, others, or the world 
                    that endures despite objective reality. For example, “I am a damaged person” and 
                    “Anyone I trust will eventually hurt me” are negative schemas that may result from 
                    negative experiences in early childhood. A goal of treatment, particularly stressed 
                    in cognitive therapy, is to help the client to develop more realistic, present-oriented 
                    schemas to replace those developed during childhood or through traumatic experiences. 
                    See also self-image; self-schema. —schematic adj.
                  </p>
                </Card>
                <Card interactive={true} elevation={Elevation.ONE} className='sub-card-2 inline-card'>
                  <h5><i><sup><a href="https://www.ultraworking.com/ingeniator#:~:text=An%20%E2%80%9CIngeniator%E2%80%9D%20in%20the%20classical,marvelous%20things%20in%20the%20world.">[2]</a></sup> Ingeniator</i></h5>
                    <code>adj. <i>(s. ingeniator)</i></code>
                    <p class='tab wrap-text-2'>
                    An “Ingeniator” in the classical world was someone who combined ingenium (genius, cleverness, inspired thought) and ingeniare (creation, generation, establishing). Engineers — in the classical sense — were literally people who bridged the world of inspired thought to build and establish marvelous things in the world.
                    </p>
                    <ul>
                      <li>See: <code>Hacker</code>.</li>
                      <li>See: <strong>Programmer</strong>.</li>
                      <li>See:<a href="#core/typography.running-text">IT (Nerd/Geek)</a>.</li>
                    </ul>
                    <p align="right"><img className="sub-img" src={ITIMG} /></p>
                </Card>
              </div>
            </div>
            </Card>
        </Card>
    </div>
  );
}

export default App;
