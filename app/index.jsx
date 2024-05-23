import React from "react";
import { Text, View, Image } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { images } from "../constants";
import CustomButton from "./customButton";
import { StatusBar } from "expo-status-bar";

const _layout = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView className="bg-primary h-full">
        <ScrollView>
          <View className="w-full justify-center items-center h-[85vh] px-4">
            <Image
              source={images.logo}
              className="w-[130px] h-[80px]"
              resizeMode="contain"
            />
            <Image
              source={images.cards}
              className="max-w--[380px] w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="relative mt-5">
              <Text className="text-3xl text-white font-bold text-center">
                Discover Endless Possibilities with{" "}
                <Text className="text-secondary-200">Aora</Text>
              </Text>
              <Image
                source={images.path}
                className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                resizeMode="contain"
              />
            </View>
            <Text className="font-sm font-pregular text-gray-100 mt-7 text-center ">
              Where creativity meets innovaation: embark on a journey of
              limitless exploration with Aora
            </Text>
            <CustomButton
              title="Continue with Email"
              handlePress={() => router.push("/sign-in")}
              containerStyle="w-full mt-7"
            />
          </View>
        </ScrollView>
        <StatusBar backgroundColor="#161622" style="light" />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default _layout;
