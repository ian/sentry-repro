import React from "react"
import { Button, SafeAreaView, Text, View } from "react-native"

export default function HelloWorldScreen() {
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        },
      ]}
    >
      <View>
        <Text
          style={[
            {
              textAlign: "center",
              fontSize: 24,
              fontWeight: "bold",
              color: "black",
            },
          ]}
        >
          Hello, world.
        </Text>
        <Button
          title="Press me"
          onPress={() => {
            throw new Error("Hello, again, Sentry!")
          }}
        />
      </View>
    </SafeAreaView>
  )
}
