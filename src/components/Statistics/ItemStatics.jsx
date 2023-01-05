import PropTypes from 'prop-types';
import { ListItem, Label, Percentage  } from './Statistics.styled';

export const Item = ({ item: { label, percentage } }) => {
    return (
        <ListItem>
            <Label>{label}</Label>
            <Percentage>{percentage}</Percentage>
        </ListItem>
    )
};

Item.propTypes = {
    item: PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired,
};