import PropTypes from "prop-types";
import { Item } from './ItemStatics';
import { StatSection, Title, StatList } from './Statistics.styled';

export const Statistics = ({title, stats}) => {
    return (
        <StatSection>
            {title && (<Title>Upload stats</Title>)}
            <StatList>
                {stats.map(item => (
                    <Item key={item.id} item={item} />
                ))}
            </StatList>
        </StatSection>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
};