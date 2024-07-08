import classes from "./Dropdown.module.css";
import { Select } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

const SelectComponent = ({
  label,
  selectName,
  data,
  defaultValue,
  placeholder,
  clearFilter,
}) => {
  const [dropdownOpened, { toggle }] = useDisclosure();
  const [value, setValue] = useState();

  const changeValue = () => {
    setValue();
    toggle();
  };

  const clearFilterSelect = () => {
    setValue(null);
  };

  if (clearFilter) {
    clearFilter.clearFilterSelect = clearFilterSelect;
  }

  return (
    <Select
      label={label}
      placeholder={placeholder}
      data={data}
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
      rightSection={
        dropdownOpened ? (
          <IconChevronUp className={classes.dropdownIconOpened} />
        ) : (
          <IconChevronDown className={classes.dropdownIcon} />
        )
      }
      aria-label={selectName}
      dropdownOpened={dropdownOpened}
      withCheckIcon={false}
      comboboxProps={{
        position: "bottom",
        middlewares: { flip: false, shift: false },
      }}
      onClick={toggle}
      value={value}
      allowDeselect={false}
      onChange={changeValue}
      defaultValue={defaultValue}
    />
  );
};

export default SelectComponent;
