import { Text } from '@mantine/core';
import React from 'react';
import classes from './Text.module.css';


const TextBase = ({children}) => {
  return (
    <Text className={classes.textBaseMRegular}>{children}</Text>
  )
}

export default TextBase;