import * as React from 'react';
interface RememberMeProps {
}
 
interface RememberMeState {
    
}
 
class RememberMe extends React.Component<RememberMeProps, RememberMeState> {
    constructor(props: RememberMeProps) {
        super(props);
    }
    render() { 
        return (
            <div className="remember-left">
                <input type="checkbox"/>
                <span>Remember me</span>
            </div>
            

        );
    }
}
 
export default RememberMe;