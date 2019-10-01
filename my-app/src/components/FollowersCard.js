import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
    height: 200px;
`;

const FollowersCard = props => {
    return (
                <>
                <StyledImg src={props.item.avatar_url} alt="user"></StyledImg>
                <p>{props.item.login}</p>
                <p>{props.item.location}</p>
                <p>{props.item.bio}</p>
                </>
            )
}

export default FollowersCard;