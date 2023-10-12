import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RestaurentEntry from './RestaurentEntry';

const Stack = createNativeStackNavigator();

const RestaurentScreenStack = () => {
    return(
        <Stack.Navigator initialRouteName='RestaurentsScreen'>
            <Stack.Screen name="RestaurentsScreen" component={RestaurentEntry} />
        </Stack.Navigator>
    );
}
export default RestaurentScreenStack;