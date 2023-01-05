import PropTypes from 'prop-types'
import { Friend } from './Friend';
import { ListFriend } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <ListFriend>
            {friends.map(friend => (
                <Friend key={friend.id} friend={friend} />))}
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