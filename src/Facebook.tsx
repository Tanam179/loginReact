import * as React from 'react';
interface FacebookProps {
    content: string,
    subContent: string
}
 
interface FacebookState {
    
}
 
class Facebook extends React.Component<FacebookProps, FacebookState> {
    constructor(props: FacebookProps) {
        super(props);
    }
    render() { 
        return (
            <a href="#">{this.props.content} <span>{this.props.subContent}</span></a>
          );
    }
}
 
export default Facebook;