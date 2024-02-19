import * as React from 'react';
import {Appbar} from 'react-native-paper';

//Header for top of the screen

const myHeader = () => {
    return (
        <Appbar.Header style={{backgroundColor:'black'}}>
            <Appbar.Content title="Stopwatch v2" style={{alignItems: 'center'}}/>

        </Appbar.Header>
    )
}

export default myHeader;