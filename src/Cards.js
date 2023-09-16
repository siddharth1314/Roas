import React from 'react'

const Cards = () => {
    return (
        <>
            <div className='text-container'>
                <h2 className='card-component-header'>Results</h2>
                <p className='card-component-content'>What can you expect?</p>
            </div>
            <div className='card-container'>
                <div className='Cards-list'>
                    <div className='card'>
                        <div className='outerCard'>
                            <div className='innerCard'>
                                <img className='card-image' src='./customer-success-1.png' alt='' />
                                <h3 className='inner-card-heading'>Building demos with your team</h3>
                                <p className='inner-card-paragraph'>Throughout our contract, not just during onboarding.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='outerCard'>
                            <div className='innerCard'>
                                <img className='card-image' src='./customer-success-2.png' alt='' />
                                <h3 className='inner-card-heading'>Demo ideas & best practices</h3>
                                <p className='inner-card-paragraph'>What’s the best format & narrative of the demo.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='outerCard'>
                            <div className='innerCard'>
                                <img className='card-image' src='./customer-success-3.png' alt='' />
                                <h3 className='inner-card-heading'>How to leverage your demos</h3>
                                <p className='inner-card-paragraph'>Where you could/should apply demos with Demoboost?</p>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='outerCard'>
                            <div className='innerCard'>
                                <img className='card-image' src='./customer-success-4.png' alt='' />
                                <h3 className='inner-card-heading'>Demo ideas & best practices</h3>
                                <p className='inner-card-paragraph'>What’s the best format & narrative of the demo.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='outerCard'>
                            <div className='innerCard'>
                                <img className='card-image' src='./customer-success-5.png' alt='' />
                                <h3 className='inner-card-heading'>Building demos with your team</h3>
                                <p className='inner-card-paragraph'>Throughout our contract, not just during onboarding.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards