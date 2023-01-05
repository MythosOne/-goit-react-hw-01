import styled from 'styled-components';

export const StatSection = styled.section`
width: 240px;
background-color: white;
border: 1px solid #ececec;
box-shadow: 0px 1px 3px rgb(0, 0, 0, 0.12);
`;

export const Title = styled.h2`
text-align: center;
color: #535353;
font-size: 18px;
font-weight: 700;
text-transform: uppercase;

margin: 0;
padding: 30px;
`;

export const StatList = styled.ul`
display: flex;
align-items: center;
justify-content: center;

padding: 0;
margin: 0;
list-style: none;
`;
export const ListItem = styled.li`
width: 48px;
height: 48px;

display: flex;
flex-direction: column;
align-items: center;
background-color: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}}
`;

export const Label = styled.span`
font-size: 14px;
color: #ececec;
margin-bottom: 5px;
margin-top: 5px;
`;

export const  Percentage = styled.span`
font-size: 18px;
color: #ececec;
margin-bottom: 5px;
`;
