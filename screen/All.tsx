import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

export default function All({ navigation, route }) {
  return (
    <View style={styles.container}>
      <StatusBar />

      <ScrollView>
        {route.params.movies.map((movie) => {
          return (
            <View style={styles.container}>
              <Image
                style={{ height: 300, width: 250, marginBottom: 10 }}
                source={{
                  uri: movie.medium_cover_image,
                }}
              ></Image>
              <Text>{movie.title} </Text>
              <Text>{movie.rating}</Text>
              <Text>
                {movie.genres.map((genres: string, idx: number) => (
                  <Data key={idx}> {genres}</Data>
                ))}
              </Text>
            </View>
          );
        })}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Data = styled.Text`
  /* color: #f69e7b; */
  color: brown;
  font-weight: 700;
`;
