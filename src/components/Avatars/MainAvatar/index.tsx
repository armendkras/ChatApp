import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "./style";

interface MainAvatarProps {
  size: number;
}

const MainAvatar: FC<MainAvatarProps> = ({ size = 60 }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { height: size, width: size }]}
      disabled
    >
      <FastImage
        source={{
          uri: "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
        }}
        style={styles.image}
      />

      <View
        style={[
          styles.active,
          {
            width: size / 3,
            height: size / 3,
            borderWidth: size / 17,
          },
        ]}
      />
    </TouchableOpacity>
  );
};

export default MainAvatar;
