import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  PressableStateCallbackType,
  Text,
} from 'react-native';

import { colors } from '../../theme';
import { styles } from './styles';
import {
  ButtonProps,
  ButtonSize,
  ButtonStyleOptions,
  ButtonVariant,
} from './types';

const variantStyles: Record<ButtonVariant, object> = {
  danger: styles.danger,
  dangerOutline: styles.dangerOutline,
  link: styles.link,
  outline: styles.outline,
  primary: styles.primary,
  success: styles.success,
};

const textVariantStyles: Record<ButtonVariant, object> = {
  danger: styles.dangerText,
  dangerOutline: styles.dangerOutlineText,
  link: styles.linkText,
  outline: styles.outlineText,
  primary: styles.primaryText,
  success: styles.successText,
};

const sizeStyles: Record<ButtonSize, object> = {
  compact: styles.compact,
  small: styles.small,
  medium: styles.medium,
};

const textSizeStyles: Record<ButtonSize, object> = {
  compact: styles.compactText,
  small: styles.smallText,
  medium: styles.mediumText,
};

const indicatorColors: Record<ButtonVariant, string> = {
  danger: colors.danger.text,
  dangerOutline: colors.danger.text,
  link: colors.brand.link,
  outline: colors.text.primary,
  primary: colors.text.inverted,
  success: colors.success.text,
};

export function getButtonStyle(
  { pressed }: PressableStateCallbackType,
  { fitContent, isDisabled, size, style, variant }: ButtonStyleOptions,
) {
  return [
    styles.base,
    sizeStyles[size],
    variantStyles[variant],
    fitContent && styles.fitContent,
    pressed && styles.pressed,
    isDisabled && styles.disabled,
    style,
  ];
}

export function Button({
  accessibilityState,
  disabled,
  fitContent,
  loading,
  size = 'medium',
  style,
  textStyle,
  title,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const isDisabled = Boolean(disabled || loading);

  return (
    <Pressable
      {...props}
      accessibilityState={{ ...accessibilityState, disabled: isDisabled }}
      accessibilityRole="button"
      disabled={isDisabled}
      style={(state) =>
        getButtonStyle(state, {
          fitContent,
          isDisabled,
          size,
          style,
          variant,
        })
      }>
      {loading ? (
        <ActivityIndicator color={indicatorColors[variant]} />
      ) : (
        <Text style={[styles.text, textSizeStyles[size], textVariantStyles[variant], textStyle]}>
          {title}
        </Text>
      )}
    </Pressable>
  );
}
