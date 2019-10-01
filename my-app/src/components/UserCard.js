import React from 'react';

const UserCard = props => {
    return (
        <>
        <img src={props.avatar} alt="user"></img>
        <p>{props.name}</p>
        <p>{props.login}</p>
        <p>{props.location}</p>
        <p>{props.bio}</p>
        </>
    )
}

export default UserCard;