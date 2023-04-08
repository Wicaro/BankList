import { Button, Card } from "react-bootstrap";
import styled from "styled-components";

export const CardBody = styled(Card.Body)`
    border: 0px;
    background-color: #1c1c1c;
    color:white;
    height: 250px;
`

export const ButtonNext = styled(Button)`
    border: 0px;
    background-color: #9400ff;
    color:white;
`

export const ButtonCreate = styled(Button)`
    border: 0px;
    background-color: #9400ff;
    color:white;
    margin-right: 5px;
`


export const ButtonPrev = styled(Button)`
    border: 0px;
    background-color: #9400ff;
    color:white;
    margin-right: 5px;
`


export const FormControl = styled.input`
    height: 51px;
    border-radius: 5px;
    position: relative;
    background-color:#eaeaea;
    border:0px;
`;
