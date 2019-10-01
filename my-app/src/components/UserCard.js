import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
    height: 200px;
`;

const UserCard = props => {
    return (
        <>
        <StyledImg src={props.avatar} alt="user"></StyledImg>
        <p>{props.name}</p>
        <p>{props.login}</p>
        <p>{props.location}</p>
        <p>{props.bio}</p>
        </>
    )
}

export default UserCard;