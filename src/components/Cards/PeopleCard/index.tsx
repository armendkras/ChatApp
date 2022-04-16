import { View, Text, Pressable } from "react-native";
import React, { FC } from "react";
import { MainAvatar, PrimaryText } from "../../";
import RoundButton from "../../Buttons/RoundButton";
import { WaveHand } from "../../../assets/svgs";
import styles from "./style";

interface PeopleCardProps {
  containerStyle?: {};
  img?: string;
  name: string;
}

const PeopleCard: FC<PeopleCardProps> = ({ containerStyle, img, name }) => {
  return (
    <Pressable style={[styles.container, containerStyle]}>
      <MainAvatar size={40} img={img} />
      <View style={styles.textIcon}>
        <PrimaryText value={name} style={styles.text} />
        <RoundButton disabled icon={<WaveHand width={17} height={18} />} />
      </View>
    </Pressable>
  );
};

export default PeopleCard;
