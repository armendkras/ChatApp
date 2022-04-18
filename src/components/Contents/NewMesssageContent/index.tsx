import { View, Text, Pressable } from "react-native";
import React from "react";
import { SearchBar } from "../../";
import PrimaryText from "../../Typography/PrimaryText";
import { Colors } from "../../../constants/Corlors";
import RoundButton from "../../Buttons/RoundButton";
import { ArrowRight, GroupIcon } from "../../../assets/svgs";
import { FlatList } from "react-native-gesture-handler";
import { data } from "../../../assets/dummyData/user";
import PeopleCard from "../../Cards/PeopleCard";
import styles from "./style";

const NewMessage = () => {
  return (
    <View>
      <SearchBar
        placeholder="Search"
        icon={<PrimaryText value="To:" style={styles.text} />}
        containerStyle={styles.searchBar}
      />

      <FlatList
        ListHeaderComponent={<CreateGroupButton />}
        data={data}
        renderItem={({ item }) => (
          <PeopleCard name={item.name} img={item.img} />
        )}
      />
    </View>
  );
};

const CreateGroupButton = () => {
  return (
    <Pressable style={styles.groupChat}>
      <RoundButton icon={<GroupIcon />} />
      <PrimaryText
        value="Create a New Group"
        style={{ fontWeight: "bold", fontSize: 17 }}
      />
      <ArrowRight height={13} width={8} />
    </Pressable>
  );
};

export default NewMessage;
