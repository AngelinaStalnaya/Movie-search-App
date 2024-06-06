import { ActionIcon } from '@mantine/core';
import classes from './Buttons.module.css';


const IconBtn = ({actionFunc, children}) => {
  return (
    <ActionIcon variant="filled" aria-label="Settings" onClick={actionFunc}
    classNames={{
        root: classes.iconBtn,
        icon: classes.iconBtnIcon,

    }}>
        {children}
    </ActionIcon>
  );
}

export default IconBtn;