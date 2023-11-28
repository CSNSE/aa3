/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Nav(props) {
  const { overrides, ...rest } = props;
  const imageOnClick = useNavigateAction({ type: "url", url: "/new" });
  return (
    <Flex
      gap="48px"
      direction="row"
      width="320px"
      height="60px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(229,229,229,1)"
      {...getOverrideProps(overrides, "Nav")}
      {...rest}
    >
      <Image
        width="40px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        onClick={() => {
          imageOnClick();
        }}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="48px"
        direction="row"
        width="100px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Projects"
          {...getOverrideProps(overrides, "text")}
        ></Text>
      </Flex>
      <View
        width="12px"
        height="12px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame")}
      >
        <Icon
          width="11px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 11, height: 1 }}
          paths={[
            {
              d: "M11 -0.5L0 -0.5L0 0.5L11 0.5L11 -0.5Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="50%"
          bottom="50%"
          left="4.17%"
          right="4.17%"
          {...getOverrideProps(overrides, "Vector407260")}
        ></Icon>
        <Icon
          width="0px"
          height="11px"
          viewBox={{ minX: 0, minY: 0, width: 1, height: 11 }}
          paths={[
            {
              d: "M-0.5 0L-0.5 11L0.5 11L0.5 0L-0.5 0Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="4.17%"
          bottom="4.17%"
          left="50%"
          right="50%"
          {...getOverrideProps(overrides, "Vector407261")}
        ></Icon>
      </View>
    </Flex>
  );
}
