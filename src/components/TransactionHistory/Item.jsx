import PropTypes from 'prop-types';
import { TableRow, TableData } from './TransactionHistory.styled';

export const Item = ({ item: { type, amount, currency } }) => {
    return (
        <TableRow>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
        </TableRow>
    )
};

Item.propTypes = {
    item: PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
};