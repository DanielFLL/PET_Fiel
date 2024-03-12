import * as React from 'react';
import { Button } from 'react-native-paper';

const BotaoCriarFeed = () => (
    <Button
        style={{
            backgroundColor: '#7A00DA', borderRadius: 12, width: 340, marginLeft: 10
            , marginTop: 20
        }}
        labelStyle={{ fontSize: 20, fontWeight: '700', letterSpacing: 2 }}
        contentStyle={{ paddingVertical: 3, paddingHorizontal: 20 }}
        mode="contained"
        onPress={() => console.log('Pressed')}>
        + Criar Feed
    </Button>
);

export default BotaoCriarFeed;