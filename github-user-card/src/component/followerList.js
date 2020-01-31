import React from 'react';
import FollowerCard from './followercard';
import styled from 'styled-components';

const ListDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`

const FollowerList = props => {
    console.log(props);
    return (
        <div>
            <h2>Followers</h2>
            <ListDiv>
                {props.fUsers.map(el =>
                    <FollowerCard
                        login={el.login}
                        avatar_url={el.avatar_url}
                        key={el.id}
                    />
                )}
            </ListDiv>
        </div>
    )
}

export default FollowerList;