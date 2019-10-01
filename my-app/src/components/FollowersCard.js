import React from 'react';

const FollowersCard = props => {
    return (
                <>
                <img src={props.item.avatar_url} alt="user"></img>
                <p>{props.item.login}</p>
                <p>{props.item.location}</p>
                <p>{props.item.bio}</p>
                </>
            )
}

export default FollowersCard;