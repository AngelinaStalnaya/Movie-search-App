import { Title } from '@mantine/core';
import React from 'react';
import classes from './Text.module.css';


const TitleSemibold = ({children}) => {
  return (
    <Title className={classes.titleSemibold}>{children}</Title>
  )
}

export default TitleSemibold;