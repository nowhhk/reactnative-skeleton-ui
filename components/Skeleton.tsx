import { Animated, StyleProp, View, ViewStyle } from "react-native";
import React, { ReactElement, useEffect } from "react";

import styled from "styled-components/native";

export interface Props {
  shape?: "text" | "circle" | "rect";
  width?: number | string;
  height?: number | string;
  color?: string;
  animation?: boolean;
  children?: ReactElement;
  isLoading?: boolean;
  style?: StyleProp<ViewStyle>;
}

const handleShape = (shape: Props["shape"]): ViewStyle | undefined => {
  if (shape === "text") {
    return { borderRadius: 10 };
  }
  if (shape === "circle") {
    return { borderRadius: 100 };
  }
  return undefined;
};

const inferDimension = (
  children: ReactElement | undefined
): ViewStyle | undefined => {
  const {
    props: { style },
  } = children;
  if (style) {
    return {
      width: style.width,
      height: style.height,
      ...style,
    };
  } else {
    return {
      width: "auto",
      height: "auto",
    };
  }
};

// const renderChildren = (children: Props['children']): ReactChild => {
//   return React.Children.map(children, (child) => {
//     return <child style={{ opacity: 0 }} />;
//   });
// };

const renderChildren = (
  children: Props["children"]
): React.ReactElement[] | undefined | null => {
  return React.Children.map(children, (child: ReactElement) => {
    return React.cloneElement(child, {
      style: {
        opacity: 0,
      },
    });
  });
};

const Skeleton: React.FC<Props> = (props) => {
  const {
    shape,
    width,
    height,
    color,
    animation,
    children,
    isLoading,
    style,
  } = props;

  const opacity = new Animated.Value(0.3);

  useEffect((): void => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return isLoading ? (
    <Skeletons
      as={Animated.View}
      style={[
        { width },
        { height },
        handleShape(shape),
        { backgroundColor: color },
        animation ? { opacity } : undefined,
        children
          ? width || height
            ? { width, height }
            : inferDimension(children)
          : undefined,
        style,
      ]}
    >
      {renderChildren(children)}
    </Skeletons>
  ) : (
    <View>{children}</View>
  );
};

export default Skeleton;

Skeleton.defaultProps = {
  shape: "text",
  // width: "100%",
  // height: 12,
  color: "#e7e7e7",
  animation: true,
  isLoading: true,
};

const Skeletons = styled.View``;
