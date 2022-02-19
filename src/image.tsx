import * as React from 'react';
const  logo = require('../src/assets/images/backgroundAF.jpg');
interface ImageProps {
    
}
 
interface ImageState {
    
}
 
class Image extends React.Component<ImageProps, ImageState> {
    constructor(props: ImageProps) {
        super(props);
        
    }
    render() { 
        return (  
            <img src={logo} alt="" />
        );
    }
}
 
export default Image;