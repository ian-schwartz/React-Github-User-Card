import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
    height: 200px;
    border-radius: 100px;
`;

const StyledP = styled.p`
    color: #000;
`;

const FollowersCard = props => {
    return (
                <>
                <StyledImg src={props.item.avatar_url} alt="user"></StyledImg>
                <StyledP>{props.item.login}</StyledP>
                <p>{props.item.location}</p>
                <p>{props.item.bio}</p>
                </>
            )
}

export default FollowersCard;