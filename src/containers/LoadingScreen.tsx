import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Color } from "../styles";

export const LoadingScreen: React.FC = (props) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <Text style={styles.text}>Yello!</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Color.mainYello,
    },
    text: {
        color: Color.white,
        textAlign: "justify",
        fontSize: 60,
        fontWeight: "normal",
    },
});
