import React from "react";

function Register () {
    return (
        <div>
        <div class="container login-container">
            <div class="row">
                <div class="login-form-1">
                    <h3>Create Account</h3>
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="First Name "/>
                        </div><br/>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Last Name"/>
                        </div><br/>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Middle Name" />
                        </div><br/>
                        <div class="form-group">
                            <input type="number" class="form-control" placeholder="Phone Number"/>
                        </div><br/>
                        <div class="form-group">
                            <input type="number" class="form-control" placeholder="ID Number"/>
                        </div><br/>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Email "/>
                        </div><br/>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Your Password " />
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