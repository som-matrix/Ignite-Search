import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
 
  *{
      padding:0;
      margin:0;
      box-sizing:border-box;
  }
  html{
      &::-webkit-scrollbar{
          width:0.5rem;
      }
      &::-webkit-scrollbar-thumb{
          background-color:darkgrey;
      }
  }
  body{
      width:100%;
      font-family: 'Montserrat', sans-serif;
  }
  h1{
      font-size:4rem;
      letter-spacing:0.2rem;
      padding:1.5rem;
  }
  h2{
      font-size:3rem;
      font-family: 'Lobster', cursive;
      color:black;
      font-weight:lighter;
  }
  h3{
      font-size:1.4rem;
      color:#333;
      padding:1.5rem;
  }
  p{
      font-size:1rem;
      color:grey;
      line-height:200%;
  }
  a{
     font-size:1rem;
      color:#eee;
      text-decoration:none;
  }
  
    input{
        font-weight: bold;
    font-family: "Montserrat", sans-serif;
    }
  
`

export default GlobalStyle;