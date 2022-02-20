import * as React from 'react';
interface SignUpProps {
    content: string,
    subContent: string,
}
 
interface SignUpState {
    
}
 
class SignUp extends React.Component<SignUpProps, SignUpState> {
    constructor(props: SignUpProps) {
        super(props);
        
    }
    render() { 
        return (
            <div className="sign-up">
                <span>{this.props.content}<a href="#">{this.props.subContent}</a></span>
            </div>
        );
    }
}
 
export default SignUp;