import PropTypes from 'prop-types';
import { ListFriendItem, Status, Avatar, Name } from './FriendList.styled';

export const Friend = ({ friend: { avatar, name, isOnline }}) => {
    return (
        <ListFriendItem>
            <Status Boolean={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </ListFriendItem>
    )
};

Friend.propTypes = {
    friend: PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
};