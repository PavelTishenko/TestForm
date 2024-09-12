import { useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const INITIAL_OFFSET_1 = 0;
const INITIAL_OFFSET_2 = Math.PI / 2;
const INITIAL_OFFSET_3 = Math.PI;
const INITIAL_OFFSET_4 = (3 * Math.PI) / 2;
const GREEN_BLUE_RADIUS = 163;
const PURPLE_GREEN_RADIUS = 118;
const PURPLE_RADIUS = 73;

const useFormScreen = () => {
  const { top } = useSafeAreaInsets();
  const progress1 = useSharedValue(0);
  const progress2 = useSharedValue(0);
  const progress3 = useSharedValue(0);
  const progress4 = useSharedValue(0);

  useEffect(() => {
    progress1.value = withRepeat(
      withTiming(1, { duration: 30000, easing: Easing.linear }),
      -1,
      false,
    );
    progress2.value = withRepeat(
      withTiming(1, { duration: 45000, easing: Easing.linear }),
      -1,
      false,
    );
    progress3.value = withRepeat(
      withTiming(1, { duration: 60000, easing: Easing.linear }),
      -1,
      false,
    );
    progress4.value = withRepeat(
      withTiming(1, { duration: 75000, easing: Easing.linear }),
      -1,
      false,
    );

    return () => {
      progress1.value = 0;
      progress2.value = 0;
      progress3.value = 0;
      progress4.value = 0;
    };
  }, []);

  const createAnimatedStyle = (
    progress: SharedValue<number>,
    radius: number,
    initialOffset: number,
  ) => {
    const rotation = useDerivedValue(
      () => (progress.value % 1) * 2 * Math.PI + initialOffset,
      [progress],
    );

    return useAnimatedStyle(
      () => ({
        transform: [
          { translateX: radius * Math.cos(rotation.value) },
          { translateY: radius * Math.sin(rotation.value) },
        ],
      }),
      [rotation],
    );
  };

  const animatedStyle1 = createAnimatedStyle(
    progress1,
    GREEN_BLUE_RADIUS,
    INITIAL_OFFSET_1,
  );
  const animatedStyle2 = createAnimatedStyle(
    progress2,
    GREEN_BLUE_RADIUS,
    INITIAL_OFFSET_2,
  );
  const animatedStyle3 = createAnimatedStyle(
    progress3,
    PURPLE_GREEN_RADIUS,
    INITIAL_OFFSET_3,
  );
  const animatedStyle4 = createAnimatedStyle(
    progress4,
    PURPLE_RADIUS,
    INITIAL_OFFSET_4,
  );

  return {
    top,
    animatedStyle1,
    animatedStyle2,
    animatedStyle3,
    animatedStyle4,
  };
};

export default useFormScreen;
