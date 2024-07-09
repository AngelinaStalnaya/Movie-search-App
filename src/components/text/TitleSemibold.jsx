import { Title } from '@mantine/core';
import React from 'react';
import classes from './Text.module.css';


const TitleSemibold = ({children, colored}) => {
  return (
    <Title className={colored ? classes.titleSemibold : classes.titleSemiboldBlack}>{children}</Title>
  )
}

export default TitleSemibold;