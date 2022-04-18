// Type definitions for rn-swipe-gestures 1.0
// Project: rn-swipe-gestures
// TypeScript Version: 3.5

import { PureComponent } from 'react';
import { PanResponderGestureState, ViewProps } from 'react-native';

export interface SwipeDirections {
  SWIPE_UP: 'SWIPE_UP';
  SWIPE_DOWN: 'SWIPE_DOWN';
  SWIPE_LEFT: 'SWIPE_LEFT';
  SWIPE_RIGHT: 'SWIPE_RIGHT';
}

export const swipeDirections: SwipeDirections;

export interface GestureRecognizerConfig {
  velocityThreshold?: number;
  directionalOffsetThreshold?: number;
  gestureIsClickThreshold?: number;
}

export interface GestureRecognizerProps extends ViewProps {
  config?: GestureRecognizerConfig;
  onSwipe?: (gestureName: string, state: PanResponderGestureState) => void;
  onSwipeUp?: (state: PanResponderGestureState) => void;
  onSwipeDown?: (state: PanResponderGestureState) => void;
  onSwipeLeft?: (state: PanResponderGestureState) => void;
  onSwipeRight?: (state: PanResponderGestureState) => void;
}

export default class GestureRecognizerView extends PureComponent<GestureRecognizerProps> {}
