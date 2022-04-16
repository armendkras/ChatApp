import { View, Text } from "react-native";
import React from "react";
import { DiscoverStoryCard } from "../..";
import { FlatList } from "react-native-gesture-handler";
import { data } from "../../../assets/dummyData/user";
const DiscoverContent = () => {
  return (
    <View>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ marginHorizontal: 20, marginTop: 20 }}
        data={data}
        renderItem={({ item, index }) => (
          <DiscoverStoryCard name={item.name} img={item.img} />
        )}
      />
    </View>
  );
};

export default DiscoverContent;
