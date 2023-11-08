import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashPage from './screens/splash/Splash';
import Home from './screens/home/Home';
import SignIn from './screens/sign_in/SignIn';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from './screens/home/Home.tabbar';


const Stack = createNativeStackNavigator();

function App() {
    const [isSignedIn, setIsSignedIn] = useState<Boolean | null>()

    async function checkIsSignedInGoogle() {
        const res = await GoogleSignin.isSignedIn();
        console.log(res)
        if (res) {
            setIsSignedIn(true)
        } else {
            setIsSignedIn(false)
            console.log("Not signed in")
        }
    }

    useEffect(() => {
        checkIsSignedInGoogle()
    }, [])


    return (
        <NavigationContainer>
            {!isSignedIn && <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={SplashPage} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Home" component={Home} options={{
                    headerShown: false
                }} initialParams={{ isSignedIn: false }} />
                <Stack.Screen name="SignIn" component={SignIn} options={{
                    headerShown: false
                }} />
            </Stack.Navigator>}
            {isSignedIn && <Stack.Navigator initialRouteName="HomeTab">
                <Stack.Screen name="HomeTab" component={HomeTab} options={{
                    headerShown: false
                }} initialParams={{ isSignedIn: false }} />
                <Stack.Screen name="SignIn" component={SignIn} options={{
                    headerShown: false
                }} />
            </Stack.Navigator>}
        </NavigationContainer>
    );
}

export default App;