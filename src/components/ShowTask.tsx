import { Task } from '../types/types';
import TaskCard from './TaskCard';

type props = {
  tasklist: Task[];
  setTasklist: (tasklist: Task[]) => void;
  setTask: (task: Task) => void;
};

function ShowTask({ tasklist, setTasklist, setTask }: props) {
  function handleDelete(id: number) {
    setTasklist(tasklist.filter((task) => task.id !== id));
  }

  function handleEdit(task: Task) {
    setTask(task);
  }

  function handleStatus(id: number) {
    setTasklist(
      tasklist.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            status: !task.status
          };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <section className='w-full h-auto p-5 mt-3 bg-white border rounded-md shadow-md'>
      <div className='flex items-center justify-between gap-3 mb-5'>
        <div className='flex gap-2'>
          <span>To-Do</span>
          <span className='w-6 h-6 text-center bg-gray-200 rounded-full'>
            {tasklist.length}
          </span>
        </div>
        <button
          className='p-2 text-white bg-blue-300 rounded-md hover:bg-blue-700'
          onClick={() => setTasklist([])}
        >
          Clear
        </button>
      </div>
      <hr />
      <ul className='grid gap-3 md:grid-cols-3'>
        {tasklist.map((task) => {
          return (
            <TaskCard
              className='col-span-1'
              task={task}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleStatus={handleStatus}
              key={task.id}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default ShowTask;
