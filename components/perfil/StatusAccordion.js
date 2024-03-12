import * as React from 'react';
import { List } from 'react-native-paper';
import CheBoxStatus from './CheckBoxStatus';
import { View } from 'react-native';

const StatusAccordion = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <List.Section>
            <List.Accordion title="Status" titleStyle={{ color: '#2F2F2F', fontSize: 20 }} style={{ backgroundColor: '#FEFDF0' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: -10 }}>
                    <CheBoxStatus />
                    <List.Item title="Pais de PET" />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: -10 }}>
                    <CheBoxStatus />
                    <List.Item title="Adotando PET" />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: -10 }}>
                    <CheBoxStatus />
                    <List.Item title="Doando PET" />
                </View>
            </List.Accordion>
        </List.Section>
    );
};

export default StatusAccordion;