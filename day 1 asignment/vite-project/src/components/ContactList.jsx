import { useState } from "react"
import { AddContact } from "./AddContact"
import { ContactCard } from "./ContactCard"


const initState = [
    {
        "id": "1",
        "name": "Sumit",
        "phone": "9467810223",
        "email": "s@s.com",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMED3BXlTDOKGw_AN8BuVQepJ8FTd-WLuT3g&usqp=CAU"

    },
    {
        "id": "2",
        "name": "cat",
        "phone": "5689452346",
        "email": "cat@s.com",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62DqM297wXo4_T_KTOuOxtpZVGUrxVBWP0A&usqp=CAU"

    },
    {
        "id": "3",
        "name": "madhbala",
        "phone": "1546978512",
        "email": "deep@s.com",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuhEB5TN6Ku-wVjzZa_CiltogXAj4q_Cj30A&usqp=CAU"

    },
    {
        "id": "4",
        "name": "ankit",
        "email": "a@a.com",
        "phone": "946786745",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEUSbcFt2ogFZ8THtouuzJFikCE3c2IkOdlg&usqp=CAU"

    }
]

export const ContactList = () => {

    const [list, setlist] = useState(initState)

    const handleChange = (name, email, phone, img) => {
        setlist([
            ...list,
            {
                id: list.length + 1,
                name: name,
                phone: phone,
                email: email,
                img: img,
            }
        ])
    }
    const [state, setState] = useState(false)
    const mobileHide = () => {
        setState(!state)
    }
    return (
        <div>
            <AddContact handleChange={handleChange} />
            {list.map((item, i) => {
                return <div id="divid" onClick={()=> setState(!state)}>
                    <div id="imgdiv">
                        <img src={item.img} />
                    </div>
                    <div id="detail">

                        {item.name} <br />
                        {item.email}<br />
                        <div>
                            {state ? <p>{item.phone}</p>: null}
                           
                        </div>



                    </div>
                </div>


            })}

        </div>
    )
}