import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </>
  );
}

// const styles = StyleSheet.create({});
