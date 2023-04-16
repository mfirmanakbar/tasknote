export const AddTask = ({ taskList, setTaskList, task, setTask }) => {

    const handleSubmit = (e) => {
        e.preventDefault(); // to prevent the reload page after submit button clicked

        if (task.id) {
            const date = new Date();
            const updateData = { 
                id: task.id, 
                name: task.name, 
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` 
            };
            const updatedTasklist = taskList.map((todo) => (
                todo.id === task.id ? updateData : todo
            ));
            setTaskList(updatedTasklist);
            //e.target.task.value = "";
            setTask({});
        } else {
            const date = new Date();
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
            }
            setTaskList([...taskList, newTask])
            //e.target.task.value = "";
            setTask({});
        }

    }

    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task"
                    value={task.name || ""}
                    onChange={e => setTask({ ...task, name: e.target.value })}
                    autoComplete="off" placeholder="add task" maxLength="25" />
                <button type="submit">{ task.id ? "Update" : "Add" }</button>
            </form>
        </section>
    )
}
