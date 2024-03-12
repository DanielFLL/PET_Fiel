import * as React from 'react';
import { useState, useEffect } from 'react';
import { List } from 'react-native-paper';

const PubliAcord = () => {
  const [expanded, setExpanded] = React.useState(false);
  
  const [publicacoes, setPublicacoes] = useState([]);
  
  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:8080/publication', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao buscar publicações');
          }
          return response.json();
        })
        .then(data => {
          setPublicacoes(data);
        })
        .catch(error => {
          console.error('Erro ao buscar publicações:', error.message);
        });
    };
    fetchData();
  }, []);


  const handlePress = () => setExpanded(!expanded);


  return (
    <List.Section>
        <List.Accordion
            title="Minha Publicações"
            left={props => <List.Icon {...props} icon="folder" />}
            titleStyle={{ color: '#2F2F2F', fontSize: 20 }} 
            style={{ backgroundColor: '#FEFDF0' }}
            expanded={expanded}
            onPress={handlePress}
        >
          <List.Section>
            {/* Retirar depois estes 2 itens */}
            <List.Item title="First item" />
            <List.Item title="Second item" />
            {/* Publicações do BD */}
            {publicacoes.map(publicacao => (
              <List.Item key={publicacao.id} title={publicacao.titulo} description={publicacao.conteudo} />
            ))}
          </List.Section>
        </List.Accordion>
    </List.Section>
  );
};

export default PubliAcord;