import React from 'react';
import styled from 'styled-components';

const UserCardDiv = styled.div`
    display: flex;
    box-shadow: 0 0 10px;
    width: 95%;
    margin: 2% auto;
    padding: 4%;
    background: burlywood;
    align-items: center;

    img {
        width: 90%;
        border-radius: 10px;
    }

    .user-foll {
        display: flex;
        justify-content: space-between;
    }

    .info-div {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
`

const UserCard = props => {
    return (
        <UserCardDiv>
            <div>
                <h2>Name: {props.gUser.name}</h2>
                <img alt='User Avatar' src={props.gUser.avatar_url} />
            </div>

            <div className='info-div' >
                <div className='user-foll' >
                    <h3>Username: {props.gUser.login}</h3>
                    <h3>Company: {props.gUser.company}</h3>
                    <h3>Location: {props.gUser.location}</h3>
                </div>

                <div className='user-foll' >
                    <h3>Followers: {props.gUser.followers}</h3>
                    <h3>Following: {props.gUser.following}</h3>
                    <h3># of Repos: {props.gUser.public_repos}</h3>
                </div>

                <div>
                    <h3>{props.gUser.bio}</h3>
                </div>
            </div>
            
        </UserCardDiv>
    )
}

export default UserCard;

{/* <h3>{props.gUser.followers_url}</h3>
    <h3>{props.gUser.following_url}</h3>
    
*/}