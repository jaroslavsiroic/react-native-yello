import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, StatusBar } from "react-native";
import { useAtom } from "jotai";
import { Icon } from "react-native-elements";

import { Quote } from "../components/Quote";
import { Color } from "../styles";
import { quoteAtom } from "../atoms";

export const HomeScreen: React.FC = () => {
    const [quote] = useAtom(quoteAtom);

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={Color.mainYello}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}
            >
                <Quote text={quote.content} author={quote.originator.name} />
                <Icon
                    color={Color.mainYello}
                    size={80}
                    name="smileo"
                    type="antdesign"
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: Color.mainYello,
    },
    scrollView: {
        height: "100%",
        backgroundColor: Color.white,
    },
});
