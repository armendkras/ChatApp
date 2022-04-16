import { View, Text, FlatList } from "react-native";
import React from "react";
import { Slider, UsersCard, SearchBar } from "../../";
import { SearchIcon } from "../../../assets/svgs";
import { data } from "../../../assets/dummyData/user";
import { Colors } from "../../../constants/Corlors";
const ChatsContent = () => {
  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <>
            <SearchBar
              icon={<SearchIcon color={Colors.LIGHT_GRAY5} />}
              placeholder="Search"
            />
            <Slider />
          </>
        }
        ListHeaderComponentStyle={{ paddingBottom: 20 }}
        data={data}
        renderItem={({ item }) => (
          <UsersCard name={item.name} message={item.message} img={item.img} />
        )}
      />
    </View>
  );
};

export default ChatsContent;
