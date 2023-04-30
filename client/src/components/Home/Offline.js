import React from 'react'
import './ofline.css'
import pic from '../../assets/charlesdeluvio-Lks7vei-eAg-unsplash.jpg'

const Offline = () => {
    return (
        <>
            <div style={{paddingBottom:"6rem"}} className='container' >
                <div className='textimg' >
                    <div className='subtexgtimg' >

                        <div className='imgfull' >
                            <img src={pic} alt='img' />
                        </div>

                        <div className='text' >
                            <h1 >Unacademy Centres for IIT JEE and NEET UG</h1><br />
                            <h2>Admissions open in Kota, Delhi, Chandigarh, Sikar, Indore and 20+ other cities!</h2><br />
                            <h3 >Learn from top educators in your city
                                In-person classes & doubt solving
                                Bonus access to online learning
                            </h3><br />
                            <button className="find-btn" inputMode="text" >Find Center</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offline
