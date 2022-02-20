import * as React from 'react';
interface PasswordProps {
    
}
 
interface PasswordState {
    
}
 
class Password extends React.Component<PasswordProps, PasswordState> {
    constructor(props: PasswordProps) {
        super(props);
    }
    render() { 
        return (
            <input type="password" className='password' placeholder='Password'/>
        );
    }
}
 
export default Password;