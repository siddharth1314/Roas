import React from 'react'

const Footer = () => {
    return (
        <div className='footerComponent'>
            <div className='footer-logo-container'>
                <img src='../demoBoostWhite.png' alt='logo' />
                <div className='footer-button'>
                <button className='Demo-button1-footer'>Login</button>
                <button className='Demo-button2-footer'>Book a Demo</button>
                </div>
            </div>
            <div class="footer">
                <div class="contain">
                    <div class="col">
                        <h1>Use cases</h1>
                        <ul>
                            <li>Marketing</li>
                            <li>Business Development</li>
                            <li>Sales</li>
                            <li>Customer Sucess and Training</li>
                            <li>Get in touch</li>
                        </ul>
                    </div>
                    <div class="col">
                        <h1>Product</h1>
                        <ul>
                            <li>How it works</li>
                            <li>About</li>
                            <div className='footer-career'>
                            <li>Careers</li>
                            <div className='hiring-div'>we're hiring!</div>
                            </div>
                            
                        </ul>
                    </div>
                    <div class="col">
                        <h1>Resources</h1>
                        <ul>
                            <li>Documentation</li>
                            <li>Partners</li>
                            <li>Privacy Policy</li>
                            <li>GDPR Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer