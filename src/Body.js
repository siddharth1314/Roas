import React from 'react'

const Body = () => {
    return (
        <div className='content-body'>
            <div className='inner-content'>
                <div className='text-wrapper'>
                    <h1 className='inner-content-header'>OUR CUSTOMER SUCCESS PROMISE</h1>
                    <h2 className='inner-content-subHeading'>Instant Time To Value</h2>
                    <p className='inner-content-paragraph'>Unleash the power of an automated demo library with a minimal effort: Demoboost supports you with all the hard work, allowing you to quickly capitalize on automated demo platform and increase your long- term value.</p>
                    <ul className='inner-content-list'>
                        <li className='list-items'><img className='blue-tick-mark' src='../check.png' alt='tick-mark' /><span>We build the demos for you even before you sign the contract.</span></li>
                        <li className='list-items'><img className='blue-tick-mark' src='../check.png' alt='tick-mark' /><span>We support you throughout, no limits. At no additional cost.</span></li>
                        <li className='list-items'><img className='blue-tick-mark' src='../check.png' alt='tick-mark' /><span>We share the best practice, playbooks & ideas</span></li>
                    </ul>
                    <button className='Demo-button'>Book a Demo</button>
                </div>
                <div>
                    <img className='body-image' src='../bodyImage.png' alt='body-img' />
                    <div class="figure-caption">Gabriela Sokół <span class="figure-subtitle">Senior Customer Success Manager @ Demoboost</span></div>
                </div>
            </div>
        </div>
        
    )
}

export default Body