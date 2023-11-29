
import { FlatList } from 'react-native';

import { DATA } from "../data/data";
import ButtonGrid from '../components/ButtonGrid';
import FavoritesCard from '../components/FavoritesCard'

function HomeScreen({ navigation }){
    function renderButtonItem(itemData){    
        return(
            <ButtonGrid 
                buttonName={itemData.item.buttonName}                
            />
        )
    }
    
    return(
        <>
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={renderButtonItem} 
            />
            <FavoritesCard />
        </>
    )
}

export default HomeScreen;
