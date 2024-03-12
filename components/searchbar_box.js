import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const Busca = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Searchbar
      placeholder=""
      onChangeText={setSearchQuery}
      value={searchQuery}
      style={{
        width: 170,
        height: 40,
        flexDirection: 'row-reverse',
      }}
    />
  );
};

export default Busca;
