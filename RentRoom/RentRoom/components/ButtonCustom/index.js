
import { StyleSheet, Pressable, Text, LayoutAnimation } from 'react-native';
import React, { useState } from 'react';

export default function index({ onPress = () => {} ,text = 'button', styleButton = {}, styleText = {}}) {
  const [change, setChange] = useState({pad : 10, padLeft : 20, padRight : 20});

  const styles = StyleSheet.create({
    button: {
      padding : change.pad,
      paddingLeft: change.padLeft,
      paddingRight: change.padRight,
      ...styleButton
    },
    text: {
      ...styleText
    },
  });

  const handlePressIn = () => {
    LayoutAnimation.configureNext({
        ...LayoutAnimation.Presets.spring,
        duration: 1500,
    });
    setChange({pad : 10.5, padLeft : 20.5, padRight : 20.5})
  };

  const handlePressOut = () => {
    LayoutAnimation.configureNext({
        ...LayoutAnimation.Presets.spring,
        duration: 1500,
    });
    setChange({pad : 10, padLeft : 20, padRight : 20})
  };

  return (
    <Pressable onPress={onPress()} onPressIn={handlePressIn} onPressOut={handlePressOut} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}
