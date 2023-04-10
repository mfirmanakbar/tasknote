export const AddTask = ({tasks, setTasks}) => {

    const handleSubmit = (e) => {
        e.preventDefault(); // to prevent the reload page after submit button clicked
        const date = new Date();
        const newTask = {
            id: date.getTime(), 
            name: e.target.task.value, 
            time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
        }
        setTasks([...tasks, newTask])
        e.target.task.value = "";
    }

  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" autoComplete="off" placeholder="add task" maxLength="25"/>
            <button type="submit">Add</button>
        </form>
    </section>
  )
}
