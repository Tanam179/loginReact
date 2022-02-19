import * as React from 'react';

interface ButtonProps {
    content:string
}
 
interface ButtonState {
    
}
 
class Button extends React.Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps) {
        super(props);
    }
    render() { 
        return (
            <button>{this.props.content}</button>
        );
    }
}
 
export default Button;
