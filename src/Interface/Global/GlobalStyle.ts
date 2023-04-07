import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    background-color: #141414;
    color:white;
  }
  a{
    text-decoration: none;
  }
`;