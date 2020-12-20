import React, { Suspense } from "react";
import { Icon } from "react-native-elements";
import { Color } from "./src/styles";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./src/containers/HomeScreen";
import { Provider } from "jotai";
import { LoadingScreen } from "./src/containers/LoadingScreen";

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <Provider>
            <Suspense fallback={<LoadingScreen />}>
                <NavigationContainer>
                    <Tab.Navigator
                        tabBarOptions={{
                            activeTintColor: Color.mainYello,
                            showLabel: false,
                            style: {
                                backgroundColor: Color.white,
                            },
                        }}
                    >
                        <Tab.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <Icon
                                        name="home"
                                        color={color}
                                        size={size}
                                    />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Settings"
                            component={LoadingScreen}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <Icon
                                        name="settings"
                                        color={color}
                                        size={size}
                                    />
                                ),
                            }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </Suspense>
        </Provider>
    );
};

export default App;
