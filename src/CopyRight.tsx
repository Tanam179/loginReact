import * as React from 'react';
interface CopyrightProps {
    content: string,
}
 
interface CopyrightState {
    
}
 
class Copyright extends React.Component<CopyrightProps, CopyrightState> {
    constructor(props: CopyrightProps) {
        super(props);
        
    }
    render() { 
        return (
            <div className="copyright">
                <p>{this.props.content}</p>
            </div>
        );
    }
}
 
export default Copyright;