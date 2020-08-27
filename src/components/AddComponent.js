import React from "react";
import { Button, Modal, Input } from "antd";

const EditComponent = ({
  visible,
  handleClose,
  setName,
  setLastname,
  setTask,
  handleAddTask,
}) => {
  return (
    <Modal
      title="Basic Modal"
      onCancel={handleClose}
      onOk={handleClose}
      visible={visible}
    >
      <form>
        <Input
          name="name"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          name="lastname"
          placeholder="lastname"
          onChange={(e) => setLastname(e.target.value)}
        />
        <Input
          name="task"
          placeholder="task"
          onChange={(e) => setTask(e.target.value)}
        />
        <Button
          onClick={() => {
            handleAddTask();
            handleClose();
          }}
        >
          Add
        </Button>
      </form>
    </Modal>
  );
};

export default EditComponent;
