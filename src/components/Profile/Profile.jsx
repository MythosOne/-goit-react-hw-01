import PropTypes from "prop-types";
import {CardUser, Description, Avatar, Name, Tag, Location, StatsUser, CardStats, LabelUser, QuantityUser} from './Profile.styled';

export const Profile = ({ user: {avatar, username, tag, location, stats:{followers, views, likes}}}) => {
    return (
        <CardUser>
            <Description>
                <Avatar
                    src={avatar}
                    alt="User avatar"
                />
                <Name>{username}</Name>
                <Tag>{tag}</Tag>
                <Location>{location}</Location>
            </Description>

            <StatsUser>
                <CardStats>
                    <LabelUser>Followers</LabelUser>
                    <QuantityUser>{followers}</QuantityUser>
                </CardStats>
                <CardStats>
                    <LabelUser>Views</LabelUser>
                    <QuantityUser>{views}</QuantityUser>
                </CardStats>
                <CardStats>
                    <LabelUser>Likes</LabelUser>
                    <QuantityUser>{likes}</QuantityUser>
                </CardStats>
            </StatsUser>
        </CardUser>
    )
};

Profile.propTypes = {
    user: PropTypes.shape({
        avatar: PropTypes.string,
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,}),}).isRequired,
};


