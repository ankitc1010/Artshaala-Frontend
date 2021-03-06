import React,{Component} from 'react';
import Cardstyle from "./cardStyle";
import Link from "next/link";

class Cards extends Component{
    render(){
        
        return(
            <Cardstyle>
                
            <div className="main">
            {(() => {
                if(this.props.Cardcontent.off ==null | this.props.Cardcontent.off =="" ){
                    return <span></span>
             }else{
                return <p className="off">{this.props.Cardcontent.off}</p>
             }
             })()}
                    <Link href={this.props.Cardcontent.url}>
                        <img src={Object.values(this.props.Cardcontent.img).toString()} className="pic"/>
                    </Link>
                    <div className="sub"><p className="cost">{this.props.Cardcontent.cost}</p>
                    <Link href={this.props.Cardcontent.url}><p className="descrip">{this.props.Cardcontent.descrip}</p></Link>
                        <p className="review">
                            {this.props.Cardcontent.reviews}

                            <span className="stars">
                            
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i></span>
                        
                    </p>
                    </div>
            </div>
            </Cardstyle>
        );
    }
}

export default Cards;