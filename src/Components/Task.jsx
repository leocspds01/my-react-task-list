export default function Task () {

   return (
       <form >
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