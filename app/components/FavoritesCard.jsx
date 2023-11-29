
import React from 'react';
import { Card, Text } from 'react-native-paper';

const FavoritesCard = () => (
    
    <Card style={{
        width:350, 
        height: 300, 
        alignSelf: 'center', 
        marginTop: 5, 
        shadowColor: '#333333',
        shadowOffset:{
            width:6,
            height:6
        },
        shadowOpacity:0.8,
        shadowRadius: 6,
        elevation:15 
      }} >      
      <Card.Content >
        <Text style={{textAlign: 'center', fontSize:35}}>Favorites</Text>        
      </Card.Content>
    </Card>
  
);

export default FavoritesCard;
