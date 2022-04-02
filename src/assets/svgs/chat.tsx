import React, { FC } from "react";
import Svg, { Path, Rect, Pattern, Defs, Image, Use } from "react-native-svg";
import { Colors } from "../../constants/colors";

interface PropsModel {
  color?: string;
  fill?: string;
  width?: number;
  height?: number;
}

export const SearchIcon: FC<PropsModel> = ({
  color = "#54575D",
  fill = "none",
  width = "100%",
  height = "100%",
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill={fill}
      // @ts-ignore
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M11.25 11.25L8.7125 8.7125M10.0833 5.41667C10.0833 7.994 7.994 10.0833 5.41667 10.0833C2.83934 10.0833 0.75 7.994 0.75 5.41667C0.75 2.83934 2.83934 0.75 5.41667 0.75C7.994 0.75 10.0833 2.83934 10.0833 5.41667Z"
        stroke={color}
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};