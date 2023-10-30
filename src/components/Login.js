import { useState } from "react";
import { loginApi } from "../services/UserService";
import { toast } from "react-toastify";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isShowPassword, setIsShowpassword] = useState(false);

    const handleLogin = async() => {
        if(!email || ! password) {
            toast.error("Email/Password Is requied!")
            return;
        }
        let res =  await loginApi(email, password);
        if( res &&res.toke){
            localStorage.setItem("token", res.toke)
        }
    console.log("check log" , res);
    }



    return (<>
        <div className="login-container col-12 col-sm-4">
            <div className="title" >Login</div>
            <div className="text"> Email or UserName</div>
            <input
                type="text"
                placeholder="Email or UserName.."
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <div className="input-1">
                <input type={isShowPassword===true ? "text":"password"} placeholder="PassWord..."
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}

                />
                <i class="fa-regular fa-eye-slash"
                    onClick={() => setIsShowpassword(!isShowPassword)}
                > </i>
            </div>

            <button className={email && password ? "active" : ""}
                disabled={email && password ? false : true}
                onClick={() => handleLogin()}

            >Login</button>
            <div className="back">
                <i class="fa-solid fa-backward"></i> Go Back
            </div>
            
        </div>
    </>)
}

export default Login;