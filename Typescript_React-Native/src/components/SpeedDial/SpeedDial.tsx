import * as React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import styled, { css } from "styled-components/native";
import Icon1 from "../Icons/Icon1";
import Icon2 from "../Icons/Icon2";

const SpeedDial = () => {
  return (
    <View>
      <View>
        <Icon1 />
      </View>
      <View>
        <TestView>
          <Icon2 />
        </TestView>
        <TestView>
          <Icon2 />
        </TestView>
        <TestView>
          <Icon2 />
        </TestView>
      </View>
    </View>
  );
};

export default SpeedDial;

const TestView = styled.View`
  width: 50px;
  height: 50px;
`;
