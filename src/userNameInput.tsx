import * as React from 'react';

interface userNameProps {
    
}
 
interface userNameState {
    
}
 
class userName extends React.Component<userNameProps, userNameState> {
    constructor(props: userNameProps) {
        super(props);
        
    }
    render() { 
        return ( 
            <input type="text" className='userName' placeholder='Username'/>
        );
    }
}
 
export default userName;