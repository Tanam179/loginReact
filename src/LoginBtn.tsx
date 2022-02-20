import * as React from 'react';
interface LoginBtnProps {
    content: string,
}
 
interface LoginBtnState {
    
}
 
class LoginBtn extends React.Component<LoginBtnProps, LoginBtnState> {
    constructor(props: LoginBtnProps) {
        super(props);
        
    }
    render() { 
        return (
            <button>{this.props.content}</button>
        );
    }
}
 
export default LoginBtn;