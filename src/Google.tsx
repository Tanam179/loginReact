import * as React from 'react';
interface GoogleProps {
    content: string,
    subContent: string
}
 
interface GoogleState {
    
}
 
class Google extends React.Component<GoogleProps, GoogleState> {
    constructor(props: GoogleProps) {
        super(props);
        
    }
    render() { 
        return ( 
            <a href="#">{this.props.content} <span>{this.props.subContent}</span></a>
        );
    }
}
 
export default Google;