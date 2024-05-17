'use client'
import React, { useState } from 'react'

export default function Login() {
    const [isEmail, setIsEmail] = useState("")
    const [isPassword, setIsPassword] = useState("")

    const isSumbit = (e) => {
        e.preventDefault(); 
        
        if(!isEmail.includes("@") || !isEmail.includes(".", isEmail.indexOf("@")) ){
            alert("Please add @ and . in your email")
        }
        else{
            alert("Form Submited")
            setIsEmail("")
            setIsPassword("")
        }
    }

    const handleEmailChange = (e) => {
        setIsEmail(e.target.value);
        console.log("isEmail----------->", isEmail);
    };

    const handlePasswordChange = (e) => {
        setIsPassword(e.target.value);
        console.log("isPassword------------->", isPassword);
    };
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" required value={isEmail} onChange={handleEmailChange} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" required value={isPassword} onChange={handlePasswordChange} />
                </div>
                <div>
                    <input type="button" value="Click" onClick={isSumbit}/>
                </div>
            </form>
        </div>
    )
}
