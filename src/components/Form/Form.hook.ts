import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch } from '@/store/store';
import { authorize } from '@/store/reducers/authSlice';
import {
  RootStackParamList,
  Screens,
} from '@/navigation/RootNavigator/RootNavigator';

export type FormValues = {
  email: string;
  name: string;
};

const defaultValues: FormValues = {
  email: '',
  name: '',
};

export const useLoginForm = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, Screens.RESULT>>();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        email: yup.string().email().required(),
        name: yup
          .string()
          .nonNullable()
          .required('Name is required')
          .matches(/^[a-zA-Z]+$/, 'Name field must contain only letters'),
      }),
    [],
  );

  const { control, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
  });
  const { isDirty } = formState;

  const handleApplyPress = async (formData: FormValues) => {
    try {
      setIsLoading(true);
      const response = await dispatch(authorize(formData));
      if (authorize.fulfilled.match(response)) {
        setIsLoading(false);
        navigation.navigate(Screens.RESULT);
      }
    } catch (error) {
      setIsLoading(false);
      console.log('error:', error);
    }
  };
  return {
    control,
    isDirty,
    isLoading,
    handleApplyPress: handleSubmit(handleApplyPress),
  };
};
