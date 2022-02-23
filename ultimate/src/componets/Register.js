import React, { useState} from "react";
import axios from 'axios'

function Register () {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname ] = useState("")
    const [middlename, setMiddle ] = useState("")
    const [phonenumber, setPhonenumber ] = useState("")
    const [idnumber, setIdnumber] = useState("")
    const [email , setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false)
        try{

            const res = await axios.post("/users/api/register", {
                firstname,
                lastname,
                middlename,
                phonenumber,
                idnumber,
                email,
                password
            })  
            res.data && window.location.replace("/login")
        }catch(err){
            console.log(err)
            setError(true)
        }
    }


    return (
        <div>
        <div class="container login-container">
            <div class="row">
                <div class="login-form-1">
                    <h3>Create Account</h3>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="First Name "
                            onChange={e=>setFirstname(e.target.value)} />
                        </div><br/>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Last Name"
                            onChange={e=>setLastname(e.target.value)}/>
                        </div><br/>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Middle Name" 
                            onChange={e=>setMiddle(e.target.value)}/>
                        </div><br/>
                        <div class="form-group">
                            <input type="number" class="form-control" placeholder="Phone Number" 
                            onChange={e=>setPhonenumber(e.target.value)} />
                        </div><br/>
                        <div class="form-group">
                            <input type="number" class="form-control" placeholder="ID Number"
                            onChange={e=>setIdnumber(e.target.value)}/>
                        </div><br/>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Email "
                            onChange={e=>setEmail(e.target.value)}/>
                        </div><br/>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Your Password" 
                            onChange={e=>setPassword(e.target.value)} />
                        </div><br/>
                        <div class="form-group">
                            <button type="submit" class="btnSubmit">Create Account</button>
                        </div><br/>

                    </form>
                </div>
                </div>
                </div>
        </div>
    )
}

export default Register;