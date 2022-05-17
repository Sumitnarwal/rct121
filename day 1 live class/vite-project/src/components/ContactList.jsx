import React, { useState } from 'react'


import { AddContact } from './AddContact';
import { ContactCard } from './ContactCard';

const initState = [
    {
        "first_name": "Sumit",
        "last_name": "narwal",
        "phone": "9467810223"

    },
    {
        "first_name": "ankit",
        "last_name": "phogat",
        "phone": "946786723"

    }
]
 
export default function ContactList(){ 


const [ContactList, setContactList] = useState(initState);
const handleClick = (name,last, phone) => {
    setContactList([
        ...ContactList,
        {
            id: ContactList.length + 1,
            first_name: name,
            last_name: last,
            phone: phone
        }
    ])
}

//console.log(ContactList)
// const elems = [
//     React.createElement("div", {}, "Albert"),
//     React.createElement("div", {}, "Nrupul")
// ]

const onDelete = (id) => {
    // console.log(id) 
    setContactList(ContactList.filter((items) => items.id !== id))
    
}
return (
    <div>
        <AddContact handleClick={handleClick} /><br/>
        {ContactList.map((items,i) => (

            <ContactCard id={items.id} key={i} name={items.first_name} last={items.last_name} phone={items.phone} onDelete={onDelete} />


        ))}

    </div>
)

}
