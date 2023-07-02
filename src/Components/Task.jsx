import TaskEdit from "./TaskEdit"

export default function Task ({todos}) {
     return (
      <>
      {todos.map(todo => <TaskEdit taskName={todo. task}/>)}
      </>,
      <form>
        <input
        type='text'
        className='input-add'
        name="description"
        value=''
        placeholder="New Task"
        />,
        <button className="btn-add" type="submit">+</button>
        </form>         
     )
      
}