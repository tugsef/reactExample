import React from 'react'
import './style.css'

import { useWeater } from '../../context/WeaterContext'
function Weather() {
    const { weater } = useWeater();
    return (
        <div className='R3Y3ec rr3bxd' >

            <div className='wob_dfc' style={{ left: "0px; top: 0px", transform: "translate3d(0px, 0px, 0px)", transition: "-webkit-transform 0ms ease-in-out 0s" }}>

                <ul className='container float'>
                    {


                        weater.map((item, index) => {
                            const date = new Date(item.date);
                            const dayNumber = date.getDay()
                            const daysOfWeek = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt']
                            const day = daysOfWeek[dayNumber];
                            return (

                                <li className='wob_df float-item' key={index}>
                                    
                                        <div className="Z1VzSb" >{day}</div>
                                        <div className='DxhUm'>
                                            <g-img>
                                                <img className='YQ4gaf zr758c' src={item.day.condition.icon} alt="" />
                                            </g-img>
                                        </div>

                                        <div className="wNE31c">
                                            <div className="gNCp2e">
                                                <span className="wob_t" style={{ display: "inline" }}>{Math.round(item.day.mintemp_c)}</span>

                                                °
                                            </div>
                                            <div className="QrNVmd ZXCv8e">
                                                <span className="wob_t" style={{ display: "inline" }}>{Math.round(item.day.maxtemp_c)}</span>

                                                °
                                            </div>
                                        </div>

                                    
                                </li>

                            )
                        }

                        )


                    }






                </ul>



            </div>

        </div>
    )
}

export default React.memo(Weather);