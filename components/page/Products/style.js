import sc from 'styled-components';


const Body = sc.body`
//Main css start
.main{
    display:grid;
    grid-template-columns:1fr 2fr;
    grid-gap:50px;
    grid-auto-flow: column;
    padding:10px;
    grid-template-areas: 'gallery description';
  h3{
    font: 24px "Fira Sans", sans-serif;
  }
   .rev{
     display:grid
     grid-template-columns:150px 100px;
     grid-auto-flow: column;
     grid-gap:30px;
}  
  p{
    font: 18px "Fira Sans", sans-serif;
  }
  .mon{
    font: 18px "Fira Sans", sans-serif;
}
.mon-num{
    font: 18px "Fira Sans", sans-serif;
    color:#3498db;
}
.myButton{
    background-color:#FFB400;
	border:0.5px solid #000000;
	display:inline-block;
	cursor:pointer;
	color:black;
	font-family:Verdana;
	font-size:15px;
	padding:12px 62px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
}
.myButton:hover {
	background-color:#f7cb2f;
}
.myButton:active {
	position:relative;
	top:1px;
}

}
.gallery{
    grid-area:gallery;
}
.description{
    grid-area:description;
    justify-items:center;
}
.specs{
    display:grid;
    grid-template-rows:1fr;
    grid-auto-flow:row;
    grid-template-areas:'specs';
    justify-items:left;
    padding-left:40px;
}
  h2{
    padding-top:100px;
    padding-bottom:0px;
    padding-left:38px;
    color:#f39c12;
    font: 24px "Fira Sans", sans-serif;
  }
  li{
    font: 20px"Fira Sans", sans-serif;
    list-style-type: none;
  }
  //Main css start
  //rating box start 
  .rating{
    display:grid;
    padding-left:80px;
    grid-template-columns:200px 200px 300px;
    grid-auto-flow: columns;
    }
    .rating-box{
    display:grid;
    padding:30px;
    grid-template-columns:1fr 1fr;
    grid-gap:50px;
    }
  
  }
  //rating box end

  // comment start
  .comment{
    padding-top:80px;
    padding-bottom:60px;
    padding-left:80px;
    padding-right:50px;
  }
    .head{
      font: 25px "Fira Sans", sans-serif;
     }
     .date{
       font: 25px "Fira Sans", sans-serif;
      }
     .content, .revS{
       font: 18px "Fira Sans", sans-serif;
        }
        .rp{
          font: 20px "Fira Sans", sans-serif;
          padding-left:550px;
        }
  
    
  // comment end
  @media (max-width: 1024px){
    .main{
      display:grid;
      grid-template-columns:1fr 2fr;
      grid-gap:50px;
      grid-auto-flow: column;
      padding:10px;
      grid-template-areas: 'gallery description';
    h3{
      font: 4vw "Fira Sans", sans-serif;
    }
     .rev{
       display:grid
       grid-template-columns:150px 100px;
       grid-auto-flow: column;
       grid-gap:30px;
  }  
    p{
      font: 14px "Fira Sans", sans-serif;
    }
    .mon{
      font: 13px "Fira Sans", sans-serif;
  }
  .mon-num{
      font: 13px "Fira Sans", sans-serif;
      color:#3498db;
  }
  .myButton{
    background-color:#FFB400;
    border:0.5px solid #000000;
    display:inline-block;
    cursor:pointer;
    color:black;
    font-family:Verdana;
    font-size:12px;
    padding:10px 42px;
    text-decoration:none;
    text-shadow:0px 1px 0px #2f6627;
  }
  .myButton:hover {
    background-color:#f7cb2f;
  }
  .myButton:active {
    position:relative;
    top:1px;
  }
  
  }
  .gallery{
      grid-area:gallery;
  }
  .description{
      grid-area:description;
      justify-items:center;
  }
  .specs{
      display:grid;
      grid-template-rows:1fr;
      grid-auto-flow:row;
      grid-template-areas:'specs';
      justify-items:left;
      padding-left:0px;
  }
    h2{
      padding-top:100px;
      padding-bottom:0px;
      padding-left:40px;
      color:#f39c12;
      font: 20px "Fira Sans", sans-serif;
    }
    li{
      font: 13px"Fira Sans", sans-serif;
      list-style-type: none;
      padding-right:100px;
    }
    .rating{
      display:grid;
      padding-left:30px;
      grid-template-columns:200px 200px 500px;
      grid-template-areas: 'rating' 
                            'desc' 
                           'stats';
      }
      .rt{
        grid-area:rating;  
      }
      .rr{
        grid-area:desc;
      }
      .rating-box{
      display:grid;
      grid-area:stats;
      padding:20px;
      
      grid-template-columns:100px 100px;
      grid-gap:50px;

      .star{
        font-size: 1em;
      }
      }
    
    }
  
    .comment{
      padding-top:80px;
      padding-bottom:60px;
      padding-left:30px;
      padding-right:50px;
      .head{
        font: 15px "Fira Sans", sans-serif;
       }
       .date{
        font: 12px "Fira Sans", sans-serif;
       }
       .content , .rev {
      font: 15px "Fira Sans", sans-serif;
       }
    }
     
    .rp{
      font: 20px "Fira Sans", sans-serif;
      padding-left:90px;
    }
//media query for 768
@media (max-width: 768px){
  .main{
    display:grid;
    grid-template-columns:1fr 2fr;
    grid-gap:50px;
    grid-auto-flow: column;
    padding:10px;
    grid-template-areas: 'gallery description';
  h3{
    font: 4vw "Fira Sans", sans-serif;
  }
   .rev{
     display:grid
     grid-template-columns:150px 100px;
     grid-auto-flow: column;
     grid-gap:30px;
}  
  p{
    font: 14px "Fira Sans", sans-serif;
  }
  .mon{
    font: 13px "Fira Sans", sans-serif;
}
.mon-num{
    font: 13px "Fira Sans", sans-serif;
    color:#3498db;
}
.myButton{
  background-color:#FFB400;
  border:0.5px solid #000000;
  display:inline-block;
  cursor:pointer;
  color:black;
  font-family:Verdana;
  font-size:12px;
  padding:10px 42px;
  text-decoration:none;
  text-shadow:0px 1px 0px #2f6627;
}
.myButton:hover {
  background-color:#f7cb2f;
}
.myButton:active {
  position:relative;
  top:1px;
}

}
.gallery{
    grid-area:gallery;
}
.description{
    grid-area:description;
    justify-items:center;
}
.specs{
    display:grid;
    grid-template-rows:1fr;
    grid-auto-flow:row;
    grid-template-areas:'specs';
    justify-items:left;
    padding-left:0px;
}
  h2{
    padding-top:100px;
    padding-bottom:0px;
    padding-left:40px;
    color:#f39c12;
    font: 20px "Fira Sans", sans-serif;
  }
  li{
    font: 13px"Fira Sans", sans-serif;
    list-style-type: none;
    padding-right:100px;
  }
  .rating{
    display:grid;
    padding-left:30px;
    grid-template-columns:200px 200px 500px;
    grid-template-areas: 'rating' 
                          'desc' 
                         'stats';
    }
    .rt{
      grid-area:rating;  
    }
    .rr{
      grid-area:desc;
    }
    .rating-box{
    display:grid;
    grid-area:stats;
    padding:20px;
    
    grid-template-columns:100px 100px;
    grid-gap:50px;

    .star{
      font-size: 1em;
    }
    }
  
  }

  .comment{
    padding-top:80px;
    padding-bottom:60px;
    padding-left:30px;
    padding-right:50px;
    .head{
      font: 15px "Fira Sans", sans-serif;
     }
     .date{
      font: 12px "Fira Sans", sans-serif;
     }
     .content , .rev {
    font: 15px "Fira Sans", sans-serif;
     }
  }
   
  .rp{
    font: 20px "Fira Sans", sans-serif;
    padding-left:90px;
  }


// media query for  480px
@media (max-width: 480px){
  .main{
    display:grid;
    grid-template-columns:1fr 2fr;
    grid-gap:50px;
    grid-auto-flow: column;
    padding:10px;
    grid-template-areas: 'gallery'
                         'description';
  h3{
    font: 4vw "Fira Sans", sans-serif;
  }
   .rev{
     display:grid
     grid-template-columns:150px 100px;
     grid-auto-flow: column;
     grid-gap:30px;
}  
  p{
    font: 14px "Fira Sans", sans-serif;
  }
  .mon{
    font: 13px "Fira Sans", sans-serif;
}
.mon-num{
    font: 13px "Fira Sans", sans-serif;
    color:#3498db;
}
.myButton{
  background-color:#FFB400;
  border:0.5px solid #000000;
  display:inline-block;
  cursor:pointer;
  color:black;
  font-family:Verdana;
  font-size:12px;
  padding:10px 42px;
  text-decoration:none;
  text-shadow:0px 1px 0px #2f6627;
}
.myButton:hover {
  background-color:#f7cb2f;
}
.myButton:active {
  position:relative;
  top:1px;
}

}
.gallery{
    grid-area:gallery;
}
.description{
    grid-area:description;
    justify-items:center;
}
.specs{
    display:grid;
    grid-template-rows:1fr;
    grid-auto-flow:row;
    grid-template-areas:'specs';
    justify-items:left;
    padding-left:0px;
}
  h2{
    padding-top:100px;
    padding-bottom:0px;
    padding-left:40px;
    color:#f39c12;
    font: 20px "Fira Sans", sans-serif;
  }
  li{
    font: 13px"Fira Sans", sans-serif;
    list-style-type: none;
    padding-right:100px;
  }
  .rating{
    display:grid;
    padding-left:30px;
    grid-template-columns:200px 200px 500px;
    grid-template-areas: 'rating' 
                          'desc' 
                         'stats';
    }
    .rt{
      grid-area:rating;  
    }
    .rr{
      grid-area:desc;
    }
    .rating-box{
    display:grid;
    grid-area:stats;
    padding:20px;
    
    grid-template-columns:100px 100px;
    grid-gap:50px;

    .star{
      font-size: 1em;
    }
    }
  
  }

  .comment{
    padding-top:80px;
    padding-bottom:60px;
    padding-left:30px;
    padding-right:50px;
    .head{
      font: 15px "Fira Sans", sans-serif;
     }
     .date{
      font: 12px "Fira Sans", sans-serif;
     }
     .content , .rev {
    font: 15px "Fira Sans", sans-serif;
     }
  }
   
  .rp{
    font: 20px "Fira Sans", sans-serif;
    padding-left:90px;
  }

`;

const BlueText = sc.div`
      padding-top:10px;
      color:#3498db;
      font: 18px "Fira Sans", sans-serif; 
      @media (max-width: 1024px){
        padding-top:10px;
        color:#3498db;
        font: 14px "Fira Sans", sans-serif;
      }
`;
const Button = sc.div`
.myButton {
	background-color:#000000;
	border:1px solid #000000;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:10px;
	padding:3px 30px;
  text-decoration:none;
}
.myButton:hover {
	background-color:#606160;
}
.myButton:active {
	position:relative;
	top:1px;
}

@media (max-width: 1024px){
  .myButton {
    background-color:#000000;
    border:1px solid #000000;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:10px;
    padding:3px 10px;
    text-decoration:none;
  }
  .myButton:hover {
    background-color:#606160;
  }
  .myButton:active {
    position:relative;
    top:1px;
  }
}
`;
export  {Body,BlueText,Button} ;