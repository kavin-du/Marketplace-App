import { NavigationContainerRef } from "@react-navigation/native";
import React, { RefObject } from "react";

export const navigationRef: RefObject<NavigationContainerRef> = React.createRef();

const navigate = (name: any, params?: any) => navigationRef.current?.navigate(name, params);

export default {
  navigate,
};