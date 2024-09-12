import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useLoginForm } from './Form.hook';
import LinearGradient from 'react-native-linear-gradient';
import FormItem from '../FormItem';
import { ActivityIndicator, TextInput } from 'react-native-paper';
import { fontFamilies } from '@/constants/fonts';
import { colors } from '@/constants/colors';

const Form = () => {
  const { control, isLoading, handleApplyPress } = useLoginForm();
  return (
    <View>
      <FormItem
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <TextInput
            {...field}
            style={styles.input}
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            placeholder="Email"
            mode="outlined"
            contentStyle={{ fontFamily: fontFamilies.MONTSERRAT.normal }}
            outlineStyle={styles.input}
            placeholderTextColor={colors.placeholder}
            error={!!fieldState.error}
          />
        )}
      />
      <FormItem
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <TextInput
            {...field}
            style={styles.input}
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            contentStyle={{ fontFamily: fontFamilies.MONTSERRAT.normal }}
            placeholder="Name"
            mode="outlined"
            outlineStyle={styles.input}
            placeholderTextColor={colors.placeholder}
            error={!!fieldState.error}
          />
        )}
      />
      <TouchableOpacity style={styles.button} onPress={handleApplyPress}>
        <LinearGradient
          colors={[colors.lightBlue, colors.lightBlue, colors.blue]}
          style={[StyleSheet.absoluteFillObject, styles.linearGradient]}>
          <Text style={styles.buttonText}>Apply</Text>
          {isLoading && <ActivityIndicator color={colors.white} />}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: colors.background,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 12,
    backgroundColor: colors.white,
  },
  button: {
    width: 97,
    height: 47,
    justifyContent: 'center',
    backgroundColor: colors.btn,
    padding: 10,
    borderRadius: 12,
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
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
