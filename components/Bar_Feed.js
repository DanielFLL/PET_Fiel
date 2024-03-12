import * as React from 'react';
import { Appbar } from 'react-native-paper';
import Text_Feed from './Text_Feed';

const Bar_Feed = () => (
    <Appbar.Header style={{ marginTop: -40, backgroundColor: '#FEFDF0' }}>
        <Appbar.Action icon="heart-outline" onPress={() => { }} />
        <Appbar.Action icon="chat" onPress={() => { }} />
        <Appbar.Action icon="share" onPress={() => { }} />
        <Text_Feed />
    </Appbar.Header>
);

export default Bar_Feed;