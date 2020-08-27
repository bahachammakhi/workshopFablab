import React from "react";
import { Button, Modal, Input } from "antd";

const EditComponent = ({
  visible,
  handleClose,
  setName,
  setLastname,
  setTask,
  handleEditTask,
  name,
  lastname,
  task,
  index,
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
          value={name}
        />
        <Input
          name="lastname"
          placeholder="lastname"
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
        />
        <Input
          name="task"
          placeholder="task"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <Button
          onClick={() => {
            handleEditTask({ name, lastname, task }, index);
            handleClose();
          }}
        >
          Edit
        </Button>
      </form>
    </Modal>
  );
};

export default EditComponent;
