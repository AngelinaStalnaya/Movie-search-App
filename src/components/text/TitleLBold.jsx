import { Title } from '@mantine/core';
import React from 'react';
import classes from './Text.module.css';


const TitleLBold = ({children}) => {
  return (
    <Title className={classes.titleLBold}>{children}</Title>
  )
}

export default TitleLBold;