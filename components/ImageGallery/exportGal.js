import React, { Component } from 'react';
import ReactSlick from './modprops';
import sc from 'styled-components';


class ImgGal extends Component {
    render() {
        return (
   
        <div> 
            <Body>    
                <ReactSlick />
            </Body>     
         </div>
       
        
        );
    }
}
const Body=sc.body`
display: grid;
grid-template-columns: 400px 400px;
padding-top: 20px;
`;

export default ImgGal;