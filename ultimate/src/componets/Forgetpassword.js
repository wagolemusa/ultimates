import axios from "axios";
import React, { useState }from "react";

function ForgetPassord () {

    const [ email, setEmail ] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.put("/users/api/reset-password", {
                email
            })
            res.data && window.location.replace("/")
        }catch(error){
            console.log(error)
        }
    }

    return (
        <div>
        <div class="container login-container">
            <div class="row">
                <div class="login-form-1">
                    <h3>Request to change  password</h3>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Email" 
                             onChange={e=>setEmail(e.target.value)}/>
                        </div><br/>
                        <div class="form-group">
                            <button type="submit" class="btnSubmit">Submit</button>
                        </div>
                    
                    </form>
                </div>
                </div>
                </div>
        </div>
    )
}

export default ForgetPassord;


