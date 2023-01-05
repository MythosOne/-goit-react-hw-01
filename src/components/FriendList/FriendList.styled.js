import styled from 'styled-components';

export const ListFriend = styled.ul`
gap: 10px;
display: flex;
flex-direction: column;

list-style: none;
padding: 0;
`;

export const ListFriendItem = styled.li`
width: 240px;
display: flex;
align-items: center;
gap: 10px;

border: 1px solid #ececec;
background-color: white;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
`;

export const Status = styled.span`
width: 10px;
height: 10px;
border-radius: 50%;
border: 1px solid #ececec;
margin-left: 10px;

background-color: ${props => {
    return props.Boolean ? 'green' : 'red';
}}
`;

export const Avatar = styled.img`
width: 50px;
height: 50px;

border: 2px solid #ececec;
border-radius: 4px;

background-color: #ececec;
`;

export const Name = styled.p`
font-size: 18px;
font-weight: 700;
`;