
import React from 'react';
import './style.css'
import { useWeater } from '../../../context/WeaterContext';




function NavLeft() {
  const { weater } = useWeater();

  return (
    <div className='UQt4rd'>

      <img className='wob_tci' src={weater[0].day.condition.icon} alt="" />
      <div className="Ab33Nc" >

        <div className='vk_bk TylWce SGNhVe'>
          <span className="wob_t q8U8x" style={{ display: "inline" }}>
            {Math.round(weater[0].day.avgtemp_c)}

          </span>
          <span className="wob_t" style={{ display: "none" }}>45</span>
        </div>
        <div className='vk_bk wob-unit'>
          <span className="wob_t" style={{ display: "inline" }} >°C</span>
          <span className="Az4ne"></span>
          <a className='wob_t' href="#" style={{ display: "inline , text_decoration:none , marginLeft:1px" }}>
            <span >°F</span>
          </a>
        </div>


      </div>
      <div className='wtsRwe'>
        <div>Yağış:
          <span >{weater[0].day.daily_will_it_rain}%</span>
        </div>
        <div>Nem:
          <span >{weater[0].day.daily_chance_of_rain}%</span>
        </div>
        <div>Rüzgar:
          <span>
            <span className="wob_t" >{weater[0].day.maxwind_kph} km/s</span>

          </span>
        </div>
      </div>

    </div>
  )
}


export default React.memo(NavLeft);