import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home';
import Maps from '../maps/Maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Social from '../social/Social';

const Tab = createBottomTabNavigator();


function HomeTab({ route }: { route: any }) {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{
            tabBarStyle: { height: 65 }
        }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIconStyle: {
                        display: 'none'
                    },
                    tabBarLabelStyle: {
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        textAlignVertical: 'center',
                        fontWeight: "700",
                        fontSize: 15
                    },

                    headerShown: false
                }} initialParams={{
                    isSignedIn: route.params.isSignedIn
                }} />
            <Tab.Screen options={{
                tabBarIconStyle: {
                    display: 'none'
                },
                tabBarLabelStyle: {
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    textAlignVertical: 'center',
                    fontWeight: "700",
                    fontSize: 15
                },
                headerShown: false
            }} name="Maps" component={Maps} />
            <Tab.Screen options={{
                tabBarIconStyle: {
                    width: 65,
                    height: 65,
                    borderRadius: 100,
                    marginTop: -50,
                },
                tabBarIcon: () => (
                    <LinearGradient colors={["#000000", "#000000C9"]} style={{

                        width: 65,
                        height: 65,
                        borderRadius: 100,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Icon name="play" size={15} color="white" style={{

                        }} />
                    </LinearGradient>
                ),
                tabBarLabelStyle: {
                    display: 'none'
                },
                headerShown: false
            }} name="Play" component={Maps} />
            <Tab.Screen options={{
                tabBarIconStyle: {
                    display: 'none'
                },
                tabBarLabelStyle: {
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    textAlignVertical: 'center',
                    fontWeight: "700",
                    fontSize: 15
                },
                headerShown: false
            }} name="Social" component={Social} />
            <Tab.Screen options={{
                tabBarIconStyle: {
                    display: 'none'
                },
                tabBarLabelStyle: {
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    textAlignVertical: 'center',
                    fontWeight: "700",
                    fontSize: 15
                },
                headerShown: false
            }} name="Achievement" component={Maps} />
        </Tab.Navigator>
    );
}

export default HomeTab;