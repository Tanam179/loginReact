import * as React from 'react';
const logoAF = require('../src/assets/images/logoAF.png');
interface LogoProps {
    
}
 
interface LogoState {
    
}
 
class Logo extends React.Component<LogoProps, LogoState> {
    constructor(props: LogoProps) {
        super(props);
    }
    render() { 
        return (
            <img src={logoAF} alt=""/>
        );
    }
}
 
export default Logo;