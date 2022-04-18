import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowLeft, PhoneIcon, VideoIcon } from "../../../assets/svgs";
import { SafeAreaView } from "react-native-safe-area-context";
import MainAvatar from "../../Avatars/MainAvatar";
import PrimaryText from "../../Typography/PrimaryText";
import { Colors } from "../../../constants/Corlors";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

const MessageRoomHeader = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.container}>
      <View style={styles.first}>
        <Pressable
          onPress={() => navigation.goBack()}
          hitSlop={{ left: 15, right: 5, top: 6, bottom: 5 }}
        >
          <ArrowLeft width={13} height={22} color={Colors.BLUE} />
        </Pressable>
        <MainAvatar containerStyle={styles.avatar} size={36} />
        <Pressable style={styles.texts}>
          <PrimaryText value="Martha Craig" style={styles.text1} />
          <PrimaryText value="Messenger" style={styles.text2} />
        </Pressable>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity style={styles.phone}>
          <PhoneIcon width={23} height={23} color={Colors.BLUE} />
        </TouchableOpacity>
        <TouchableOpacity>
          <VideoIcon width={27} height={18} color={Colors.BLUE} />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

export default MessageRoomHeader;
