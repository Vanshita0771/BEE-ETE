import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa';
import './Footer.css';
function Footer(){
    return(
        <div className='main'>
        <table className='footer'>
            <tr>
                <td className="fbody"><FaFacebook className='icon' /></td>
                <td className="fbody"><FaInstagram className='icon' /></td>
                <td className="fbody"><FaTwitter className='icon' /></td>
                <td className="fbody"><FaPinterest className='icon' /></td>
            </tr>
            <tr>
                <th>About</th>
                <th>Company</th>
                <th>Legal</th>
                <th>Information</th>
            </tr>
            <tr>
                    <td className="fbody">Company</td>
                    <td className="fbody">Future</td>
                    <td className="fbody">Employment</td>
                    <td className="fbody">Scheduling</td>
            </tr>
            <tr>
                    <td className="fbody">Policies</td>
                    <td className="fbody">Details</td>
                    <td className="fbody">Planning</td>
                    <td className="fbody">About Us</td>
            </tr>
            <tr>
                    <td className="fbody">Legal</td>
                    <td className="fbody">Terms</td>
                    <td className="fbody">Policies</td>
                    <td className="fbody">Advertising</td>
            </tr>

        </table>
        </div>
    )
}
export default Footer;
