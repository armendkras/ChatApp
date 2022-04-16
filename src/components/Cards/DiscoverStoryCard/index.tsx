import { View, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import FastImage from "react-native-fast-image";
import PrimaryText from "../../Typography/PrimaryText";
import MainAvatar from "../../Avatars/MainAvatar";
import { Colors } from "../../../constants/Corlors";

interface DiscoverStoryCardProps {
  name?: string;
  img?: string;
  imgUser?: string;
}

const DiscoverStoryCard: FC<DiscoverStoryCardProps> = ({ img, name }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ height: 200, width: "48%", borderRadius: 10, marginBottom: 10 }}
    >
      <FastImage
        source={{
          uri: img,
        }}
        style={{ height: 200, borderRadius: 10 }}
      />
      <PrimaryText
        value={name}
        style={{
          color: "white",
          fontSize: 18,
          position: "absolute",
          bottom: 10,
          left: 10,
          maxWidth: "90%",
        }}
        numberOfLines={1}
      />
      <MainAvatar
        size={40}
        containerStyle={{
          position: "absolute",
          padding: 2,
          borderWidth: 2,
          borderColor: Colors.BLUE,
          top: 10,
          left: 10,
        }}
      />
    </TouchableOpacity>
  );
};

export default DiscoverStoryCard;
