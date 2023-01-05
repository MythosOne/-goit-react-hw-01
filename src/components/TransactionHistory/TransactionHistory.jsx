import { Item } from './Item';
import PropTypes from 'prop-types';
import { TableTransaction, TableHead, TableHeadRow, TableHeadData, TableBody } from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
    return (
        <TableTransaction>
            <TableHead>
                <TableHeadRow>
                    <TableHeadData>Type</TableHeadData>
                    <TableHeadData>Amount</TableHeadData>
                    <TableHeadData>Currency</TableHeadData>
                </TableHeadRow>
            </TableHead>

            <TableBody>{
                items.map(item => (
                    <Item key={item.id} item={item} />
                ))
            }
            </TableBody>
        </TableTransaction>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
};
