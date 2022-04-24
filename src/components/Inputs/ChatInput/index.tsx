import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import {
  CammeraIcon,
  GaleryIcon,
  LikeIcon,
  MicIcon,
} from "../../../assets/svgs";
import { Colors } from "../../../constants/Corlors";
import styles from "./style";

const ChatInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <TouchableOpacity style={styles.icons}>
          <CammeraIcon width={25} height={32} color={Colors.BLUE} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons}>
          <GaleryIcon width={22} height={22} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons}>
          <MicIcon width={18} height={22} />
        </TouchableOpacity>
      </View>
      <View style={styles.second}>
        <TextInput
          placeholder="Aa"
          onBlur={() => console.log("Bluri")}
          style={styles.input}
        />
        <TouchableOpacity style={styles.like}>
          <LikeIcon width={24} height={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatInput;
