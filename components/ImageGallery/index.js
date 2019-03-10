import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify';
// only for magniication .no dependency on Index.js
import Body from './style';

import watchImg from '../ImageGallery/front-1426.jpg';

 class ImgGal extends Component {
    render() {
        return (
          <Body>
              
            <div className="fluid">
                <div className="fluid__image-container">

                    <ReactImageMagnify {...{
                        largeImage: {
                            alt: '',
                            src: watchImg,
                            width: 1200,
                            height: 1800
                        },
                        smallImage: {
                            alt: '',
                            src: watchImg,
                            width: 300,
                            height: 450
                        }
                    }} />
                </div>
            </div>
            </Body>
        );
    }
}

export default ImgGal;