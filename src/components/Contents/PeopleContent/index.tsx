import { View, Text, FlatList } from "react-native";
import React from "react";
import { AddStoryItem, SearchBar, PeopleCard } from "../..";
import { SearchIcon } from "../../../assets/svgs";
import { data } from "../../../assets/dummyData/user";
import { Colors } from "../../../constants/Corlors";

const PeopleContent = () => {
  return (
    <View>
      <SearchBar
        icon={<SearchIcon color={Colors.LIGHT_GRAY5} />}
        placeholder="Search"
      />
      <AddStoryItem
        containerStyle={{ marginHorizontal: 15, marginBottom: 5 }}
      />
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <PeopleCard waveHand name={item.name} img={item.img} />
        )}
      />
    </View>
  );
};

export default PeopleContent;
