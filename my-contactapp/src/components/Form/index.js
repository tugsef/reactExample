import {useState , useEffect} from 'react'

const intivitalFormValue = {full_name: "" , phone_number: ""};

function Form({addContacts , contacts}) {



    const [form , setForm] = useState(intivitalFormValue)

    const onChangeInput = (e) =>{
        setForm({...form , [e.target.name]: e.target.value})   
    }
    useEffect(()=>{
        setForm(intivitalFormValue)
    } , [contacts])

    const onSubmit = (e) =>{
        e.preventDefault();
        if(form.full_name === '' || form.phone_number===''){
            return false;
        }

        addContacts([...contacts , form])

        console.log(form)
       
    }

  
  return (
    <form onSubmit={onSubmit}>
        <div>
            <input name='full_name' placeholder='Full Name' value={form.full_name} onChange={onChangeInput}/>
        </div>
        <div>
            <input name='phone_number' placeholder='Phone Number' value={form.phone_number} onChange={onChangeInput} />
        </div>
        <div className='btn'>
            <button > Add</button> 
        </div>
        


    </form>
  )
}

export default Form