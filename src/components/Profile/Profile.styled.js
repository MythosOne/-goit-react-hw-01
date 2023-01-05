import styled from 'styled-components';

export const CardUser = styled.div`
margin-top: 16px;
border: 1px solid #ececec;
border-radius: 4px;
background-color: white;
width: 240px;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
`;

export const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px 0;
gap: 10px
`;

export const Avatar = styled.img`
margin: 0;
width: 64px;
border-radius: 50%;
border: 2px solid #ececec;
`;

export const Name = styled.p`
font-weight: 700;
margin: 0;
`;

export const Tag = styled.p`
font-size: 14px;
color: #757575;
margin: 0;
`;

export const Location = styled.p`
font-size: 14px;
color: #757575;
margin: 0;
`;

export const StatsUser = styled.ul`
list-style: none;
display: flex;
justify-content: center;
gap: 10px;

margin: 0;
padding: 0 0 20px;
`;
export const CardStats = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LabelUser = styled.span`
font-size: 14px;
color: #757575;
margin-bottom: 5px;
`;

export const QuantityUser = styled.span`
font-weight: 700;
`;

    