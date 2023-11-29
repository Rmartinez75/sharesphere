
import { Stack } from 'expo-router';

const RootLayout = () => {
    return(
        <Stack>
            <Stack.Screen name='index' />
            <Stack.Screen name='screens/FriendsScreen' />
            <Stack.Screen name='screens/ListScreen' />
            <Stack.Screen name='screens/CalendarScreen' />
            <Stack.Screen name='screens/PollsScreen' />
        </Stack>
    )
}

export default RootLayout;
