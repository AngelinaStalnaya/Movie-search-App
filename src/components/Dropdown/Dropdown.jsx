import classes from "./Dropdown.module.css";
import { MultiSelect } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import {useDisclosure} from '@mantine/hooks';

const DropdownFilter = ({ label, placeholder, selectName }) => {
  // const icon = <IconChevronDown className={classes.dropdownIcon} />;
  const [dropdownOpened, {toggle}] = useDisclosure();
  
  return (
    <MultiSelect
      label={label}
      placeholder={placeholder}
      data={[
        {value: 'drama' , label: 'Drama'}, 
        {value: 'comedy', label: 'Comedy'},
        {value: 'animation', label: 'Animation'}, 
        {value: 'thriller', label: 'Thriller'},
        {value: 'fantasy', label: 'Fantasy'}
      ]}
      classNames={{
        root: classes.dropdownRoot,
        label: classes.dropdownLabel,
        wrapper: classes.dropdownInputRoot,
        input: classes.dropdownInput,
        options: classes.dropdownOptions,
        option: classes.dropdownOption,
        pillsList: classes.dropdownPillsList,
        pill: classes.dropdownPill,

      }}
      rightSection={dropdownOpened ? <IconChevronUp className={classes.dropdownIcon} /> : <IconChevronDown className={classes.dropdownIcon}/>} 
      aria-label={selectName}
      dropdownOpened={dropdownOpened}
      withCheckIcon={false}
      comboboxProps={{ position: 'bottom', middlewares: { flip: false, shift: false } }}
      onClick={toggle}
      />
  );
};

export default DropdownFilter;
