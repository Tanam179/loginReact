import "./index.scss";
import * as React from 'react';
import ReactDOM from 'react-dom';
import Image from "./image";
import Google from "./Google";
import Facebook from "./Facebook";
import Logo from "./Logo";
import UserName from "./userNameInput";
import Password from "./passwordInput";
import Remember from "./Remember";
import LoginButton from "./LoginBtn";
import SignUp from "./Signup";
import CopyRight from "./CopyRight";

interface AppProps {
    
}
 
interface AppState {
    
}
 
class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
    }   

    render() { 
        

        return (
            <div className="container">
                <div className="wrapper-left">
                    <Image></Image>
                    <div className="wrapper-left-circle">
                    </div>
                    <div className="wrapper-left-content">
                        <div className="title">
                            <span></span>
                            <p>or Sign in with:</p>
                            <span></span>
                        </div>
                        <Google content="Sign in with" subContent="Google"></Google>
                        <Facebook content="Sign in with" subContent="Facebook"></Facebook>   
                    </div>
                </div>
                <div className="wrapper-right">
                    <div className="d-flex-col">
                        <div className="logo">
                            <Logo></Logo>
                        </div>
                        <div className="Login">
                            <h1>Login</h1>
                            <UserName></UserName>
                            <Password></Password>
                        </div>
                        <div className="remember">
                            <div className="remember-left">
                                <Remember></Remember>
                            </div>
                            <a href="#" className="forgot">Forgot Password?</a>
                        </div>
                        <div className="login">
                            <LoginButton content="LOGIN"></LoginButton>
                        </div>
                        <SignUp content="Don't have an account?" subContent="Sign up?"></SignUp>
                    </div>
                    
                    <CopyRight content="© 2022 ANFLASH TECHNOLOGY. All rights reserved."></CopyRight>
                </div>
            </div>
            
        )
    }
}
 
ReactDOM.render(
    <App/>,
    document.getElementById("wrapper")
)