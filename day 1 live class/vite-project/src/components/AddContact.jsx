import React, { useState } from 'react'



    export const AddContact = (props) => {

        const [text, setText] = useState("")
        const [last, setLast] = useState("")
        const [phone, SetPhone] = useState("")

        const handleClick = () => {
            if (props.handleClick) props.handleClick(text,last, phone);
            setText("")
            SetPhone("")
            setLast("")
        }

        return (

            <div>
                <h1>Contact List</h1>
                <input placeholder="add name"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                /><br />
                <input placeholder="last name"
                    value={last}
                    onChange={(e) => setLast(e.target.value)}
                /><br />
                <input placeholder="add phone"
                    value={phone}
                    onChange={(e) => SetPhone(e.target.value)}
                /><br />
                <button onClick={handleClick}>ADD</button>


            </div>
        )
    }
