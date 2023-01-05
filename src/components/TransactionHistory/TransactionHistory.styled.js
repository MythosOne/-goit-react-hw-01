import styled from 'styled-components';

export const TableTransaction = styled.table`
border: 1px solid #ececec;
border-radius: 2px;
background-color: white;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);

margin-bottom: 10px;
border-collapse: collapse;
`;

export const TableHead = styled.thead`
background-color: #51cbdd;
font-size: 14px;
color: white;
`;

export const TableHeadRow = styled.tr`

`;

export const TableHeadData = styled.th`
width: 180px;
height: 30px;
text-align: center;
border-right: 1px solid white;
:last-child{
    border-right: none;
}
`;

export const TableBody = styled.tbody`
font-size: 12px;
color: #999999;
font-weight: 600;
`;

export const TableRow = styled.tr`
height: 20px;
border: 1px solid #ececec;
:nth-child(even) { background-color: #f0f0f0; }
`;

export const TableData = styled.td`
border: 1px solid #ececec;
text-align: center;
:first-child{
    padding-left: 75px;
    text-align: left;
}
`;
