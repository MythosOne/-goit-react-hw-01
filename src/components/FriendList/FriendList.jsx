import PropTypes from 'prop-types'
import { FriendListItem } from './FriendListItem';
import { ListFriend } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <ListFriend>
            {friends.map(friend => (
                <FriendListItem key={friend.id} friend={friend} />))}
        </ListFriend>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};