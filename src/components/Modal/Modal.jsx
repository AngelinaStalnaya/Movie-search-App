import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Title, Rating, Group } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import classes from "./Modal.module.css";
import { useState } from "react";
import PrimaryBtnM from "../buttons/PrimaryBtnM";
import TextBtn from "../buttons/TextBtn";

const ModalComponent = ({ modalTitle, title,  }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState(0);

  const resetValue = () => {
    setValue(0);
  }

  const closeIcon = (
    <IconX
      style={{
        widht: "16px",
        height: "16px",
        color: "var(--mantine-color-grey_500-1)",
      }}
    />
  );

  return (
    <>
      <Modal.Root opened={opened} onClose={close} className={classes.modalRoot}>
        <Modal.Overlay className={classes.modalOverlay} />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title className={classes.modalTitle}>
              {modalTitle}
            </Modal.Title>
            <Modal.CloseButton
              aria-label="Close modal"
              icon={closeIcon}
              className={classes.modalCloseBtn}
            />
          </Modal.Header>
          <Modal.Body className={classes.modalBody}>
            <Title className={classes.modalBodyTitle}>{title}</Title>
            <Rating
              count={10}
              value={value}
              onChange={setValue}
              className={classes.modalIcons}
            />
            <Group className={classes.modalBtnGroup}>
              <PrimaryBtnM>Save</PrimaryBtnM>
              <TextBtn actionFunc={resetValue}>Remove rating</TextBtn>
            </Group>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <Button onClick={open}>Open modal</Button>
    </>
  );
};

export default ModalComponent;
