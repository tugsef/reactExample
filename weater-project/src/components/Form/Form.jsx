
import React, { useEffect, useState } from 'react';
import { useWeater } from '../../context/WeaterContext'
import './style.css'
 
function From() {
    const { setCity, city, weater, cities  } = useWeater();
    const [selectCity , setselectCity] = useState();
 
    
  

    const onChangeInput = (e)=> {
       setselectCity(e.target.value)
    }
    
    const onSubmit = (e) => {

		e.preventDefault();
		

	}
    const text = cities.filter((item)=>{
        if(item.name===selectCity){
            setCity(selectCity)
        }
    })
   
    return (

        <div >
            <div className='test'>
                <h2>{city}</h2>
            </div>
            <div className='seach_a'>
                <div className='seach_abc'>
                    <div className="CcAdNb">
                        <span className="QCzoEc z1asCe MZy1Rb" style={{ height: "20px", lineHeight: "20px", width: "20px" }}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                            </path>
                        </svg>
                        </span>
                    </div>
                </div>

                <form className='form_a' onSubmit={onSubmit}>
                    <input list="cities" name="browser" id="browser" placeholder='Ara' autoFocus onChange={onChangeInput} value={selectCity} />



                    <datalist id='cities'  >
                        {cities.map((item) =>
                            <option value={item.name} key={item.id} />
                        )
                        }
                    </datalist>
                </form>



            </div>


        </div>
    )
}

export default React.memo(From);

