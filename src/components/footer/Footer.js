import React from 'react'
import databaseIcon from '../../assets/database.png'
import emailIcon from '../../assets/email.png'
import facebookIcon from '../../assets/facebook.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'
import linkedinIcon from '../../assets/linkedin.png'
import './FooterStyles.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                    <img src={databaseIcon} alt="database" className='icon'/>
                        <h2>Secured.</h2>
                    </div>
                </div>
                <div className="col-container">
                    <div className="col">
                        <h3>Navigation</h3>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contact</p>
                    </div>
                    <div className="col">
                        <h3>My Account</h3>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contact</p>
                    </div>
                    <div className="col">
                        <h3>Information</h3>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contact</p>
                    </div>
                    <div className="col">
                        <h3>Legal</h3>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contact</p>
                    </div>
                    <form>
                        <h3>Join Our Team</h3>
                        <input type="email" placeholder='Enter your email' />
                        <img src={emailIcon} alt="database" className='mail-icon'/>
                        <div className="social-group">
                        <img src={facebookIcon} alt="database" className='social-icon'/>
                        <img src={linkedinIcon} alt="database" className='social-icon'/>
                        <img src={githubIcon} alt="database" className='social-icon'/>
                        <img src={instagramIcon} alt="database" className='social-icon'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer