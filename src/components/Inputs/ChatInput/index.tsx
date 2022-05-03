import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import {
  ArrowRight,
  CammeraIcon,
  GaleryIcon,
  LikeIcon,
  MicIcon,
} from "../../../assets/svgs";
import { Colors } from "../../../constants/Corlors";
import styles from "./style";

const ChatInput = () => {
  const [showIcons, setShowIcon] = useState(true);
  return (
    <View style={styles.container}>
      {!showIcons && (
        <TouchableOpacity
          style={{
            width: 20,
            justifyContent: "center",
            alignItems: "flex-end",
          }}
          onPress={() => setShowIcon(true)}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 20 }}
        >
          <ArrowRight color={Colors.BLUE} width={8.5} height={15.5} />
        </TouchableOpacity>
      )}
      {showIcons && (
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
      )}
      <View style={styles.second}>
        <TextInput
          placeholder="Aa"
          onBlur={() => setShowIcon(true)}
          style={styles.input}
          onFocus={() => setShowIcon(false)}
          blurOnSubmit={showIcons}
          onChangeText={() => {
            if (showIcons) {
              setShowIcon(false);
            }
          }}
        />
        <TouchableOpacity style={styles.like}>
          <LikeIcon width={24} height={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatInput;
