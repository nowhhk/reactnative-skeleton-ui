import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

import Skeleton from "../components/Skeleton";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import styled from "styled-components/native";

export default function Home({ navigation }) {
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<string[] | null>(null);
  const [randomNumber, setRandomNumber] = useState<number>(
    Math.floor(20 * Math.random())
  );
  console.log(randomNumber);
  console.log(movies);

  const getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    setLoading(false);
    setMovies(movies);
  };

  useEffect(getMovies, []);

  const onPress = (): void => {
    setRandomNumber(Math.floor(movies && movies.length * Math.random()));
  };

  const goAll = (): void => {
    navigation.navigate("All", { movies });
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <Title> 랜덤 영화추천😎 </Title>

      <Skeleton isLoading={loading}>
        <Image
          style={{ height: 300, width: 250, marginBottom: 10 }}
          source={movies && { uri: movies[randomNumber].medium_cover_image }}
        ></Image>
      </Skeleton>

      <Skeleton
        isLoading={loading}
        style={{ marginBottom: 10 }}
        width={250}
        height={20}
      >
        <Name>{movies && movies[randomNumber].title}</Name>
      </Skeleton>

      <Skeleton isLoading={loading} width={150} style={{ marginBottom: 10 }}>
        <Desc style={{ marginBottom: 10 }}>
          The Rating is <Data>{movies && movies[randomNumber].rating}</Data>
        </Desc>
      </Skeleton>

      <Skeleton isLoading={loading} width={200} style={{ marginBottom: 10 }}>
        <Desc style={{ marginBottom: 10 }}>
          The Genres is
          {movies &&
            movies[randomNumber].genres.map((genres: string, idx: number) => (
              <Data key={idx}> {genres}</Data>
            ))}
        </Desc>
      </Skeleton>
      <Buttons>
        <TouchableOpacity onPress={onPress}>
          <More>더 보기</More>
        </TouchableOpacity>
        <TouchableOpacity onPress={goAll}>
          <More>모두보기</More>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </Buttons>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#383e56",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Title = styled.Text`
  font-size: 36px;
  font-weight: 600;
  color: #383e56;
  margin-bottom: 20px;
  background-color: #f69e7b;
`;

const More = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #383e56;
  padding: 10px;
  margin: 10px;
  background-color: #d4b5b0;
  border-radius: 10px;
`;

const Desc = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #f3e1e1;
`;

const Name = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #f3e1e1;
`;

const Data = styled.Text`
  /* color: #f69e7b; */
  color: yellow;
  font-weight: 700;
`;

const Buttons = styled.View`
  flex-direction: row;
`;
