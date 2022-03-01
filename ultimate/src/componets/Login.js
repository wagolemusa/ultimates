import React, { useContext, useRef,useState } from  'react'
import { Link } from "react-router-dom";
import { Context } from '../context/Context';
import axios from 'axios';

function Login () {

    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    const [errors, setError] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      dispatch({ type: "LOGIN_START" });
      try {
        const res = await axios.post("/users/api/authenticate", {
          email: userRef.current.value,
          password: passwordRef.current.value,
        });
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      } catch (errors) {
        setError(errors.value.msg);
        dispatch({ type: "LOGIN_FAILURE" });
      }
    };
  


    return(
        <div>
        <div class="container login-container">
            <div class="row">
                    <h>{errors}</h>
                <div class="login-form-1">
                    <h3>Login</h3>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Email" 
                            ref={userRef} />
                        </div><br/>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Your Password" 
                             ref={passwordRef} />
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