import { View, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import FastImage from "react-native-fast-image";
import PrimaryText from "../../Typography/PrimaryText";
import MainAvatar from "../../Avatars/MainAvatar";
import { Colors } from "../../../constants/Corlors";
import styles from "./style";

interface DiscoverStoryCardProps {
  name?: string;
  img?: string;
  imgUser?: string;
}

const DiscoverStoryCard: FC<DiscoverStoryCardProps> = ({ img, name }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <FastImage
        source={{
          uri: img,
        }}
        style={styles.img}
      />
      <PrimaryText
        value={name}
        style={styles.text}
        //@ts-ignore
        numberOfLines={1}
      />
      <MainAvatar size={40} containerStyle={styles.avatar} />
    </TouchableOpacity>
  );
};

export default DiscoverStoryCard;
