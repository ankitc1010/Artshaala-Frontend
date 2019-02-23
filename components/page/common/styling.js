import styled from "styled-components";
import instrument from './instruments1.png';


const Styling = styled.div`


    .main {
        background-color: #fffcff;
        background-image:url(${instrument});
        background-size:100%;
        background-position: center;
        background-repeat: no-repeat;
        font-size:15px;
        padding-top:20vw;
        padding-bottom:20vw;
        text-align: center;
    }

 

    .words {
        margin-top:-2vh;
        margin-left:5vw;
        display:inline-block;
        position:relative;
    }

    .line1 {
        padding:0;
        margin:0 auto;
        color:#FBBD1D;
        font-family: myriad-pro, sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size:2vmin;       
    }
  
    .line2 {
        padding:0;
        margin:0 auto;
        font-size:5vmin;
        font-family:courier-prime, monospace;
        font-style: normal;
        font-weight: 400;   
    }

    .line3 {
        display:inline-block;
        padding:0;
        margin:0 auto;
        font-family: myriad-pro, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size:3vmin;
        
    }
    .line4 {
        display:inline-block;
        padding:1vw 3vw 1vw 3vw; 
        margin:15px auto;
        border:0px;
        background-color:#FBBD1D;
        font-family: myriad-pro, sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size:2vmin;
        color:white;
        
    }

    .l1 {
        display:inline-block;
        position: absolute;
        padding:2vw;
        border: 1px solid #8c8c8c;
        border-radius:700px;
        opacity:0.2;
    } 

    .l2 {
        position:absolute;
        display:inline-block;
        padding:3vw;
        margin:-1vw;
        border: 1px solid #8c8c8c;
        border-radius:60px;
        opacity: 0.3;

    } 

    .l3 {
        position:absolute;
        display:inline-block;
        margin:-2vw;
        padding:4vw;
        border: 1px solid #8c8c8c;
        border-radius:65px;
        opacity: 0.5;
    } 

    .l4 {
        position:absolute;
        display:inline-block;
        margin:-4vw;
        padding:6vw;
        border: 1px solid #858585;
        border-radius:110px;
        opacity: 0.5;
    } 

    .l5 {     
        position:absolute;
        display:inline-block;
        margin:-6vw;
        padding:8vw;
        border: 1px solid #808080;       
        border-radius:150px;
        opacity: 0.5;
    } 

    .l6 {
        position:absolute;
        display:inline-block;
        margin:-8vw;
        padding:10vw;
        border: 1px solid #737373;       
        border-radius:170px;
        opacity: 0.6;
    } 

    .l7 {    
        position:absolute;
        display:inline-block;
        margin:-11vw;
        padding:13vw;
        border: 1px solid #666666;  
        border-radius:200px;
        opacity: 0.7;
    }
        
`;

export { Styling };

