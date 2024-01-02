import { Task } from '../types/types';

type props = {
  tasklist: Task[];
  setTasklist: (tasklist: Task[]) => void;
  task: Task;
  setTask: (task: Task) => void;
};

function AddTask({ tasklist, setTasklist, task, setTask }: props) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(task);
    if (task.id) {
      const date = new Date();
      const inputData = (event.target as HTMLFormElement).task.value;
      const updatedTasklist = tasklist.map((item) =>
        item.id === task.id
          ? {
              id: item.id,
              name: inputData,
              date: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
              status: item.status
            }
          : item
      );
      setTasklist(updatedTasklist);
      task.id = 0;
      task.name = '';
    } else {
      const date = new Date();
      const inputData = (event.target as HTMLFormElement).task.value;
      const newTask = {
        id: date.getTime(),
        name: inputData,
        date: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
        status: false
      };
      setTasklist([...tasklist, newTask]);
      task.id = 0;
      task.name = '';
    }
  }
  return (
    <section className='flex items-center justify-center h-20 p-8 bg-white border rounded-md shadow-md mt-14 w-fit'>
      <form className='items-center bg-white' onSubmit={handleSubmit}>
        <input
          type='text'
          name='task'
          value={task.name || ''}
          autoComplete='off'
          placeholder='Add task'
          maxLength={25}
          onChange={(event) => setTask({ ...task, name: event.target.value })}
          className='border-2 rounded appearance-none grow-0 focus:outline-none focus:ring-1 focus:ring-green-300 focus:border-green-300'
        />
        <button className='p-1 mx-2 text-white bg-green-300 rounded-md hover:bg-green-700'>
          {!task.id ? 'Add Task' : 'Update'}
        </button>
      </form>
    </section>
  );
}

export default AddTask;
