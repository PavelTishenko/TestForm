import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { userCredentials } from '@/store/selectors/userSelector';
import { fontFamilies } from '@/constants/fonts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '@/constants/colors';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { Arrow } from '@/assets/svgs';

const ResultScreen = () => {
  const { top, bottom } = useSafeAreaInsets();
  const userCreds = useSelector(userCredentials);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.blue, colors.white, colors.white, colors.blue]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1.1 }}
        style={styles.gradientBackground}
      />
      <View
        style={[
          styles.contentHolder,
          {
            marginTop: top,
            marginBottom: bottom + 60,
          },
        ]}>
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.subtext}>
          Dear {userCreds?.name}, congrats! You are successfully pass the long
          path and get here!
        </Text>
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <LinearGradient
            colors={[colors.lightBlue, colors.lightBlue, colors.blue]}
            style={[StyleSheet.absoluteFillObject, styles.linearGradient]}>
            <SvgXml xml={Arrow} fill={'white'} width={30} height={30} />
          </LinearGradient>
        </Pressable>
      </View>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  contentHolder: {
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'flex-end',
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
  },
  welcome: {
    fontFamily: fontFamilies.MONTSERRAT.bold,
    fontSize: 48,
    fontWeight: '600',
    marginBottom: 10,
  },
  subtext: {
    fontFamily: fontFamilies.MONTSERRAT.normal,
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 20,
    color: colors.subtitle,
  },
  button: {
    width: 47,
    height: 47,
    justifyContent: 'center',
    backgroundColor: colors.btn,
    padding: 0,
    borderRadius: 95,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontFamily: fontFamilies.MONTSERRAT.normal,
    fontSize: 16,
    color: 'white',
    fontWeight: '700',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
