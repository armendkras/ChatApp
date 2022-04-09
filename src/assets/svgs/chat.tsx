import React, { FC } from "react";
import Svg, { Path, Rect, Pattern, Defs, Image, Use } from "react-native-svg";

interface PropsModel {
  color?: string;
  fill?: string;
  width?: number;
  height?: number;
}

export const MessageIcon: FC<PropsModel> = ({
  color = "#54575D",
  fill = "none",
  width = "100%",
  height = "100%",
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill={fill}
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 23C19.1274 23 24.5 17.8513 24.5 11.5C24.5 5.14873 19.1274 0 12.5 0C5.87258 0 0.5 5.14873 0.5 11.5C0.5 13.2106 0.940189 15.0085 1.82057 16.8935L2.01595 17.2988C2.67754 18.6297 2.71277 20.1859 2.11209 21.5453C1.55503 22.806 1.46023 23.5895 1.82767 23.8957C2.23008 24.231 3.3886 23.9695 5.30322 23.1111L5.81984 22.8736C6.80936 22.4082 7.92171 22.2812 8.98647 22.5073L9.25157 22.5712C10.3097 22.8571 11.3925 23 12.5 23Z"
        fill={color}
      />
    </Svg>
  );
};

export const DiscoverIcon: FC<PropsModel> = ({
  color = "#A4AAB2",
  fill = "none",
  width = "100%",
  height = "100%",
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill={fill}
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 0C19.1274 0 24.5 5.37258 24.5 12C24.5 18.6274 19.1274 24 12.5 24C5.87258 24 0.5 18.6274 0.5 12C0.5 5.37258 5.87258 0 12.5 0ZM18.3423 6.50717C18.1323 6.1609 17.7013 6.03083 17.34 6.18808L17.2434 6.23814L11.1209 9.95551C10.9011 10.0889 10.7097 10.2632 10.5565 10.4682L10.449 10.6276L6.73814 16.7434L6.68808 16.84C6.54513 17.1685 6.63962 17.5545 6.91814 17.7798L7.00717 17.8423L7.10718 17.8938C7.31238 17.9817 7.54549 17.9798 7.74921 17.8885L7.84835 17.8354L13.91 14.0331C14.1145 13.9048 14.2936 13.7409 14.4392 13.5495L14.5419 13.401L18.3354 7.34835C18.4968 7.09191 18.4995 6.76625 18.3423 6.50717Z"
        fill={color}
      />
    </Svg>
  );
};

export const PeopleIcon: FC<PropsModel> = ({
  color = "#A4AAB2",
  fill = "none",
  width = "100%",
  height = "100%",
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 31 23"
      fill={fill}
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.30701 14.08C10.33 14.08 11.157 14.1922 12.0049 14.4204L12.3242 14.5115C12.7705 14.6456 13.0236 15.116 12.8895 15.5623C12.8677 15.635 12.8362 15.7043 12.796 15.7682L12.708 15.8859C11.9005 16.8744 11.3811 17.9607 11.0111 19.2303L10.9134 19.5908L10.8671 19.8048C10.8169 20.0968 10.8 20.3026 10.8 20.5088C10.8 20.6245 10.8052 20.739 10.8154 20.852L10.8344 21.0205C10.9038 21.5321 10.5453 22.0032 10.0336 22.0726C9.99193 22.0783 9.9499 22.0811 9.90783 22.0811L2.07116 22.08C1.20343 22.08 0.5 21.3765 0.5 20.5088C0.5 20.4228 0.507054 20.3371 0.521057 20.2524L0.547259 20.1264C1.41912 16.6524 4.69089 14.08 9.30701 14.08ZM21.807 14.08C26.3205 14.08 29.5295 16.4675 30.3695 19.9785L30.4231 20.2196C30.5958 21.0567 30.0573 21.8753 29.2202 22.0481C29.1173 22.0693 29.0125 22.08 28.9074 22.08H14.5712C13.7034 22.08 13 21.3765 13 20.5088C13 20.4228 13.0071 20.3371 13.0211 20.2524L13.0473 20.1264C13.9191 16.6524 17.1909 14.08 21.807 14.08ZM10.6007 0.171458C12.2558 0.568004 13.8278 1.90055 13.7356 5.03018L13.7226 5.31967C13.6775 5.38891 14.2951 5.67173 14.2951 6.58213C14.2951 7.18906 14.1043 7.60216 13.7226 7.82143C13.023 10.8711 11.5658 12.3959 9.35072 12.3959C7.13569 12.3959 5.55055 10.8711 4.59532 7.82143C4.23644 7.66412 4.05701 7.25102 4.05701 6.58213C4.05701 5.91324 4.23644 5.49242 4.59532 5.31967C4.6335 2.79061 5.20971 1.34691 6.32394 0.988584C6.76624 0.847227 7.1847 0.847227 7.57932 0.988584C7.97844 0.056872 8.98555 -0.215503 10.6007 0.171458ZM26.8033 2.62906C27.9137 4.53958 28.1199 6.87324 27.4217 9.63004C27.371 9.91631 27.5539 10.1461 27.9703 10.3195L28.0248 10.3402L28.0932 10.3629C28.2475 10.4112 28.3335 10.5755 28.2852 10.7298C28.2714 10.7736 28.2477 10.8133 28.2162 10.8458L28.1635 10.889C27.476 11.3286 25.4925 11.3611 24.3417 11.1334C23.581 11.9452 22.7497 12.3511 21.8476 12.3511C20.9454 12.3511 20.1049 11.9452 19.3259 11.1334C17.1466 10.9594 16.057 9.32662 16.057 6.23489C16.057 3.40441 17.194 1.54414 19.468 0.65408C19.86 0.500628 20.2905 0.474806 20.6981 0.580285L20.9998 0.658375C23.1104 -0.657635 25.0449 -0.000739049 26.8033 2.62906Z"
        fill={color}
      />
    </Svg>
  );
};

export const CammeraIcon: FC<PropsModel> = ({
  color = "black",
  fill = "none",
  width = "100%",
  height = "100%",
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 18"
      fill={fill}
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6555 0.25C12.1583 0.25 12.6426 0.439367 13.0121 0.780393L14.3004 1.96961C14.6237 2.268 15.0349 2.45029 15.4695 2.4912L15.657 2.5H16.25C18.183 2.5 19.75 4.067 19.75 6V14C19.75 15.933 18.183 17.5 16.25 17.5H3.75C1.817 17.5 0.25 15.933 0.25 14V6C0.25 4.067 1.817 2.5 3.75 2.5H4.34303C4.84581 2.5 5.33015 2.31063 5.69959 1.96961L6.98791 0.780393C7.35735 0.439367 7.84169 0.25 8.34447 0.25H11.6555ZM10 4.75C7.23858 4.75 5 6.98858 5 9.75C5 12.5114 7.23858 14.75 10 14.75C12.7614 14.75 15 12.5114 15 9.75C15 6.98858 12.7614 4.75 10 4.75ZM10 6.25C11.933 6.25 13.5 7.817 13.5 9.75C13.5 11.683 11.933 13.25 10 13.25C8.067 13.25 6.5 11.683 6.5 9.75C6.5 7.817 8.067 6.25 10 6.25Z"
        fill={color}
      />
    </Svg>
  );
};

export const NewMessageIcon: FC<PropsModel> = ({
  color = "black",
  fill = "none",
  width = "100%",
  height = "100%",
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill={fill}
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.2637 3.23938C19.9459 2.55359 19.9444 1.44514 19.2604 0.761189L19.1323 0.64501C18.4451 0.0808307 17.4286 0.121295 16.7889 0.764507L8.32075 9.27821C7.56279 10.0403 7.02344 10.9919 6.75908 12.0337L6.40926 13.4123L6.41641 13.4655C6.43969 13.5502 6.51721 13.6123 6.60926 13.6123L7.94842 13.3049C9.05209 13.0516 10.0615 12.4911 10.8601 11.6883L19.2637 3.23938ZM9.25 3.56449C9.25 3.15028 8.91421 2.81449 8.5 2.81449H4L3.81558 2.81963C2.10645 2.91524 0.75 4.33146 0.75 6.06449V16.0645L0.755145 16.2489C0.850754 17.958 2.26697 19.3145 4 19.3145H14L14.1844 19.3093C15.8935 19.2137 17.25 17.7975 17.25 16.0645L17.2445 11.5636C17.244 11.1497 16.9083 10.8145 16.4945 10.8145H15.5C15.0858 10.8145 14.75 11.1503 14.75 11.5645V16.0645L14.7432 16.1663C14.6935 16.5323 14.3797 16.8145 14 16.8145H4L3.89823 16.8076C3.53215 16.758 3.25 16.4442 3.25 16.0645V6.06449L3.25685 5.96272C3.30651 5.59664 3.6203 5.31449 4 5.31449L8.50092 5.30896C8.91477 5.30845 9.25 4.97281 9.25 4.55896V3.56449Z"
        fill={color}
      />
    </Svg>
  );
};

export const SearchIcon: FC<PropsModel> = ({
  color = "black",
  fill = "none",
  width = "100%",
  height = "100%",
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 17"
      fill={fill}
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6 7.10005C12.6 3.62066 9.77939 0.800049 6.3 0.800049C2.82061 0.800049 0 3.62066 0 7.10005C0 10.5794 2.82061 13.4 6.3 13.4C7.66364 13.4 8.92609 12.9668 9.95721 12.2304L13.9648 16.2377L14.057 16.3182C14.4098 16.5867 14.9154 16.5598 15.2376 16.2377C15.5891 15.8862 15.5891 15.3163 15.2376 14.9649L11.2589 10.9863C12.099 9.9158 12.6 8.56643 12.6 7.10005ZM1.2 7.10005C1.2 4.2834 3.48335 2.00005 6.3 2.00005C9.11665 2.00005 11.4 4.2834 11.4 7.10005C11.4 9.9167 9.11665 12.2 6.3 12.2C3.48335 12.2 1.2 9.9167 1.2 7.10005Z"
        fill={color}
      />
    </Svg>
  );
};
