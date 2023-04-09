import React from 'react'
import List from './Contacts/List'
import Form from './Form'
import { useState , useEffect } from 'react';
import "./styles.css"

function Contacts() {
    const [contacts , setContacts] = useState([
      {
        full_name : "Sefa",
        phone_number:"12341234"
      }
      ,
      {
        full_name: "Veli",
        phone_number: "56785678"
      }
      ,
      {
        full_name: "Can",
        phone_number: "85208520"
      }
    ]);
    useEffect(()=>{
      console.log(contacts);
    } , [contacts])
  return (
    <div id='container'>
     <h1>Contacts</h1>
     <List  contacts = {contacts} />
   <Form addContacts = {setContacts} contacts = {contacts}/>

    </div>  
  )
}

export default Contacts