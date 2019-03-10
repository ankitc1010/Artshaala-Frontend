import React, { Component } from 'react';
import ReactSlick from './indez';

 class ReactSlick extends Component {
    render() {
        return (
   
            <div className="fluid react-slick">
                <div className="fluid__image-container">
                    <ReactSlick {...{
                        rimProps: {
                            isHintEnabled: true,
                            shouldHideHintAfterFirstActivation: false,
                            enlargedImagePosition: "over"
                        }
                    }} />
                </div>
               
            </div>
            
        );
    }
}

export default  ReactSlick; 