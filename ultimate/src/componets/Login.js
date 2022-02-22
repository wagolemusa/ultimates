import React from "react";
import { Link } from "react-router-dom";

function Login () {
    return(
        <div>
        <div class="container login-container">
            <div class="row">
                <div class="login-form-1">
                    <h3>Login</h3>
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Email" /  >
                        </div><br/>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Your Password"  />
                        </div><br/>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Login" />
                        </div><br/>
                        <div class="form-group">
                            <Link to="/forgetpassword" class="ForgetPwd">Forget Password</Link>
                            
                        </div>
                    </form>
                </div>
                </div>
                </div>
        </div>
    )
}
export default Login;