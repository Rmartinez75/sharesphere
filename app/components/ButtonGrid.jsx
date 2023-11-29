
import { 
    View, 
    Text, 
    Pressable, 
    StyleSheet, 
    Platform 
} from "react-native";

function ButtonGrid({ buttonName, onPress }){
    return(
        <View style={styles.buttonContainer}>
            <Pressable android_ripple={{color: '#ccc'}} style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}
                onPress={onPress}
            >
                <View style={styles.innerContainer}>
                    <Text>{buttonName}</Text>
                </View>
            </Pressable>
        </View>
    )
}

styles = StyleSheet.create({
    buttonContainer:{
        flex: 1,
        marginHorizontal: 25,
        marginTop: 45,
        height: 50,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button:{
        flex: 1
    },
    buttonPressed:{
        opacity: 0.2
    },
    innerContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ButtonGrid;
