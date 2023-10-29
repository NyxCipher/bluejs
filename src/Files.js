import React from 'react';
import './App.css';
import { Button, Card, Elevation, Navbar, Alignment } from "@blueprintjs/core";
import { TreeExample } from './Tree';

// Main App Component
function Files() {
  return (
   <>
   <Card interactive={true} elevation={Elevation.ONE} className='files-card'>
   <div className="card-container">
    <Card interactive={true} elevation={Elevation.ONE} className='files-sub-card files-inline-card'>
    <div class="bp5-running-text">
        <div class="custom_font">
            <table class="bp5-html-table-striped .files-dark">
            <thead>
                <tr>
                <th>Project</th>
                <th>Description</th>
                <th>Levels</th>
                <th>Data Points</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Education</td>
                <td>IT Certifications, Education, & Roadmaps</td>
                <td>4</td>
                <td>17</td>
                </tr>
                <tr>
                <td>Confernces</td>
                <td>Black-Hat Oriented Events</td>
                <td>1</td>
                <td>2</td>
                </tr>
                <tr>
                <td>Crypto</td>
                <td>Cryptography, Bitcoin, Currency</td>
                <td>3</td>
                <td>22</td>
                </tr>
                <tr>
                <td>CVEs</td>
                <td>Security, Vulnerabilities, & Reverse Engineering</td>
                <td>2</td>
                <td>24</td>
                </tr>
                <tr>
                <td>Hardware</td>
                <td>Lo-Fi Tech, Hacking, and Phreaking</td>
                <td>2</td>
                <td>31</td>
                </tr>
                <tr>
                <td>Cloud Defense</td>
                <td>Next-Gen Cloud Info</td>
                <td>3</td>
                <td>23</td>
                </tr>
                <tr>
                <td>Intel</td>
                <td>Intelligence Briefs</td>
                <td>3</td>
                <td>83</td>
                </tr>
                <tr>
                <td>Networking</td>
                <td>Firewalls, Networks, VLANs, Etc.</td>
                <td>2</td>
                <td>7</td>
                </tr>
                <tr>
                <td>OpenSource</td>
                <td>Firewalls, Networks, VLANs, Etc.</td>
                <td>2</td>
                <td>74</td>
                </tr>
                <tr>
                <td>Psychology</td>
                <td>Psych & Social Engineering</td>
                <td>2</td>
                <td>25</td>
                </tr>
                <tr>
                <td>Standards</td>
                <td>Industry Backed Standards</td>
                <td>1</td>
                <td>4</td>
                </tr>
                <tr>
                <td>The Forest</td>
                <td>Microsoft Active Directory</td>
                <td>1</td>
                <td>5</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                <td colspan='3'>Total</td>
                <td>317</td>
                </tr>
            </tfoot>
            </table>
        </div>
        </div>
        </Card>
        <Card interactive={true} elevation={Elevation.ONE} className='files-sub-card files-inline-card'>
            <TreeExample/>
        </Card>
        </div>
    </Card>
   </>
  );
}

export default Files;
