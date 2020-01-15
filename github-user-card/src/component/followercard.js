import React from 'react';
import styled from 'styled-components';

const UserDiv = styled.div`
    width: 40%;
    box-shadow: 0 0 10px;
    margin: 2% 0;
    padding: 2%;
    background-color: burlywood;

    img {
        width: 80%;
    }
`

const FollowerCard = props => {
    return (
        <UserDiv>
            <h3>{props.login}</h3>
            <img alt='followers avatar' src={props.avatar_url} />
        </UserDiv>
    )
}

export default FollowerCard;