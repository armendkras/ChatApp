import { View, Text } from "react-native";
import React, { FC } from "react";
import { MainAvatar } from "../../";
import { Colors } from "../../../constants/Corlors";
import styles from "./style";

interface MessageItemProps {
  id: number;
  sameUser: boolean;
  nextUser: boolean;
}

const MessageItem: FC<MessageItemProps> = ({ id, sameUser, nextUser }) => {
  console.log(nextUser);
  return (
    <>
      <View
        style={[
          styles.container,
          {
            marginBottom: sameUser ? 10 : 0,

            alignItems: id == 1 ? "flex-end" : "flex-start",
            marginLeft: id !== 1 && sameUser ? 28 : 0,
          },
        ]}
      >
        <View style={styles.userMessage}>
          {id !== 1 && !sameUser && <MainAvatar size={28} />}
          <View
            style={[
              styles.messageItem,
              {
                backgroundColor: id == 1 ? Colors.BLUE : Colors.LIGHT_GRAY4,
              },
            ]}
          >
            <Text style={{ color: id == 1 ? "white" : "black" }}>
              MessageItem
            </Text>
          </View>
        </View>
      </View>
      {nextUser && (
        <View style={styles.time}>
          <Text style={{ color: Colors.GRAY }}>11:40</Text>
        </View>
      )}
    </>
  );
};

export default MessageItem;
