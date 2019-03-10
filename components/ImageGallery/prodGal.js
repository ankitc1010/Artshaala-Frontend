
import sc from 'styled-components';

const Body = sc.div`
@import "~slick-carousel/slick/slick.css";
@import "~slick-carousel/slick/slick-theme.css";

.react-slick * {
  min-height: 0;
  min-width: 0;
}

.react-slick .slick-prev, .react-slick .slick-next {
  background-color: rgb(187, 184, 184);
  border-radius: 10px;
}

.react-slick .fluid__instructions {
  margin-top: 30px;
}

@media (min-width: 480px) {
  .react-slick .fluid__image-container{
    margin: 40px;
  }

  .react-slick .fluid__instructions {
    margin: 0 20px;
    padding-top: 20px;
  }
}

`;
const Body1=sc.body` {
  font-family: Arial;
}

.layout {
  max-width: 900px;
  margin: 0 auto;
}

.fluid {
  display: flex;
  flex-direction: column;
}

.fluid__image-container {
  flex: 0 0 auto;
  margin: 20px auto;
}

.fluid__instructions {
  flex: 0 0 auto;
  margin: 0 20px;
}

@media (min-width: 480px) {
  .fluid {
    flex-direction: row;
  }

  .fluid__image-container{
    flex: 0 0 30%;
  }

  .fluid__instructions {
    flex: 0 0 50%;
    padding-top: 20px;
  }
}`;
export default Body;