import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { FadeIn } from 'react-native-reanimated';
import { SvgXml } from 'react-native-svg';

import useFormScreen from './FormScreen.hook';

import Form from '@/components/Form';
// important: use only this two icon because data/code of other two was beated, tried to download several times
import { BlueIcon, OuterIcon } from '@/assets/svgs';
import { fontFamilies } from '@/constants/fonts';
import { colors } from '@/constants/colors';

const TestForm = () => {
  const {
    top,
    animatedStyle1,
    animatedStyle2,
    animatedStyle3,
    animatedStyle4,
  } = useFormScreen();
  return (
    <View style={styles.container}>
      <View style={{ marginTop: top }}>
        <Text style={styles.title}>TEST FORM</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        <View style={styles.circleContainer}>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircleTwo}>
              <View style={styles.innerCircle}>
                <View style={styles.rectangle}>
                  <LinearGradient
                    start={{ x: 1, y: 1.3 }}
                    end={{ x: 0, y: 0 }}
                    locations={[0, 0.4, 0.5, 0.7, 0.8, 1]}
                    colors={[
                      colors.greenGradient,
                      colors.goldGradient,
                      colors.goldGradient,
                      colors.goldGradient,
                      colors.goldGradient,
                      colors.greenGradient,
                    ]}
                    style={[
                      StyleSheet.absoluteFillObject,
                      { borderRadius: 10 },
                    ]}
                  />
                </View>
              </View>
            </View>
            <Animated.View
              style={[styles.dot, animatedStyle1]}
              entering={FadeIn.delay(500)}>
              <SvgXml xml={OuterIcon} />
            </Animated.View>
            <Animated.View
              style={[styles.dot, animatedStyle2]}
              entering={FadeIn.delay(700)}>
              <SvgXml xml={BlueIcon} />
            </Animated.View>
            <Animated.View
              style={[styles.dot, animatedStyle3]}
              entering={FadeIn.delay(800)}>
              <SvgXml xml={OuterIcon} />
            </Animated.View>
            <Animated.View
              style={[styles.dot, animatedStyle4]}
              entering={FadeIn.delay(900)}>
              <SvgXml xml={BlueIcon} />
            </Animated.View>
          </View>
        </View>

        <View style={{ marginHorizontal: 12 }}>
          <Form />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
    borderRadius: 10,
  },

  title: {
    fontFamily: fontFamilies.MONTSERRAT.bold,
    fontSize: 48,
    fontWeight: '600',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: fontFamilies.MONTSERRAT.normal,
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 20,
    color: colors.subtitle,
  },
  circleContainer: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
    height: 220,
  },
  outerCircle: {
    width: 330,
    height: 330,
    borderRadius: 230,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  innerCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.shadow,
    shadowOffset: {
      width: -25,
      height: 26,
    },
    shadowOpacity: 1,
    shadowRadius: 55,
    elevation: 12,
    zIndex: -3,
  },
  innerCircleTwo: {
    width: 240,
    height: 240,
    borderRadius: 120,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 25,
      height: -26,
    },
    shadowOpacity: 1,
    shadowRadius: 55,
    elevation: 12,
  },
  rectangle: {
    width: 168,
    height: 106,
    backgroundColor: colors.goldGradient,
    position: 'absolute',
    borderRadius: 10,
    transform: [{ rotate: '-10deg' }],
    zIndex: 2,
  },
  dot: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
export default memo(TestForm);
