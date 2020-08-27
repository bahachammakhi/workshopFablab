import React, { useState } from "react";
import { Button } from "antd";
import AddComponent from "../components/AddComponent";
import EditComponent from "../components/EditComponent";

const HomeContainer = () => {
  const [tasks, setTasks] = useState([
    { name: "baha", lastname: "chammakhi", task: "do it" },
  ]);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [visible, setVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [editElement, setEditElement] = useState({
    element: { name: "", lastname: "", task: "" },
    index: 1,
  });

  const [task, setTask] = useState("");

  console.log(tasks);
  function handleDelete(index) {
    const newArray = [...tasks];
    newArray.splice(index, 1);
    setTasks(newArray);
  }
  function handleAddTask(task) {
    const newTasks = [...tasks, { name, lastname, task }];
    setTasks(newTasks);
  }
  function handleEditTask(task, index) {
    const newTasks = [...tasks];
    newTasks[index] = task;
    setTasks(newTasks);
  }
  function handleEdit(value, keyTochange) {
    const newEditElement = { ...editElement };
    newEditElement.element[keyTochange] = value;
    setEditElement(newEditElement);
  }
  return (
    <div className="App">
      <Button onClick={() => setVisible(true)}>Add</Button>
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((element, index) => {
              console.log(element);
              return (
                <tr>
                  <td>{element?.name}</td>
                  <td>{element?.lastname}</td>
                  <td>{element?.task}</td>
                  <td>
                    <Button onClick={() => handleDelete(index)}>Delete</Button>
                  </td>
                  <td>
                    <Button
                      onClick={() => {
                        setEditVisible(true);
                        setEditElement({ element, index });
                      }}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <h1>hey</h1>
          )}
        </tbody>
      </table>
      <AddComponent
        visible={visible}
        handleClose={() => setVisible(false)}
        setName={setName}
        setTask={setTask}
        setLastname={setLastname}
        handleAddTask={handleAddTask}
      />
      <EditComponent
        visible={editVisible}
        handleClose={() => setEditVisible(false)}
        setName={(value) => {
          setEditElement({
            ...editElement,
            element: { ...editElement.element, name: value },
          });
        }}
        setTask={(value) => {
          setEditElement({
            ...editElement,
            element: { ...editElement.element, task: value },
          });
        }}
        setLastname={(value) => {
          setEditElement({
            ...editElement,
            element: { ...editElement.element, lastname: value },
          });
        }}
        handleEditTask={handleEditTask}
        name={editElement.element.name}
        lastname={editElement.element.lastname}
        task={editElement.element.task}
        index={editElement.index}
      />
    </div>
  );
};
export default HomeContainer;
