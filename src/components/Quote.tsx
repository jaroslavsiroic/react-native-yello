import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color } from "../styles";

interface QuoteProps {
    text?: string;
    author?: string;
}

export const Quote: React.FC<QuoteProps> = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
            <Text style={styles.author}>{props.author}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 20,
        backgroundColor: Color.mainYello,
        margin: 20,
    },
    text: {
        //fontFamily: "sans-serif-medium",
        color: Color.white,
        textAlign: "justify",
        fontSize: 20,
        fontWeight: "normal",
    },
    author: {
        marginTop: 10,
        textAlign: "right",
        color: Color.white,
        fontSize: 20,
        fontWeight: "300",
    },
});
