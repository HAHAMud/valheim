import React from 'react';

export const defaultPropsComponentFactory = <T, U>(
  BaseComponent: React.ComponentType<T>,
  defaultProps: Partial<React.PropsWithoutRef<T> & React.RefAttributes<U>>,
  displayName?: string
) => {
  const Component = React.forwardRef<U, T>((props, ref) => (
    <BaseComponent {...defaultProps} {...props} ref={ref} />
  ));
  Component.defaultProps = defaultProps;
  Component.displayName = displayName;
  return Component;
};
