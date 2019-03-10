import sc from 'styled-components';

const Body=sc.body` 
body {
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
}
`;
  

  export default Body;