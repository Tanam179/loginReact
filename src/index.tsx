import "./index.scss";
import * as React from 'react';
import ReactDOM from 'react-dom';
const  logo = require('../src/assets/images/backgroundAF.jpg');
import Image from "./image";
import Google from "./Google";
import Facebook from "./Facebook";

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
                        <div className="wrapper-left-content">
                            <p>or Sign in with:</p>
                            <Google content="Sign in with" subContent="Google"></Google>
                            <Facebook content="Sign in with" subContent="Facebook"></Facebook>
                        </div>
                    </div>
                </div>
                <div className="wrapper-right">
                    
                </div>
                
            </div>
            
        )
    }
}
 
ReactDOM.render(
    <App/>,
    document.getElementById("app")
)