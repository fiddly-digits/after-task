import { Task } from '../types/types';
import { Edit, Trash } from 'iconoir-react';
import { cn } from '../utils/theme';

type props = {
  className: string;
  task: Task;
  handleDelete: (id: number) => void;
  handleEdit: (task: Task) => void;
  handleStatus: (id: number) => void;
};

function TaskCard({
  className,
  task,
  handleDelete,
  handleEdit,
  handleStatus
}: props) {
  return (
    <li
      className={cn(
        'flex flex-col justify-center h-20 px-5 mt-2 outline outline-1 outline-gray-300 rounded-md border-l-4  shadow-md',
        className,
        {
          'border-green-600': task.status,
          'border-red-600': !task.status
        }
      )}
    >
      <div className='flex justify-between'>
        <p>{task.name}</p>
        <div className='flex gap-1'>
          <button onClick={() => handleEdit(task)}>
            <Edit height={20} width={20} color='blue' />
          </button>
          <button onClick={() => handleDelete(task.id)}>
            <Trash height={19} width={19} color='red' />
          </button>
        </div>
      </div>
      <div className='flex items-center justify-between pt-2'>
        <p className='text-sm italic text-gray-300'>{task.date}</p>
        <button
          className={cn(
            'p-1 text-xs text-center text-white bg-red-500 rounded-full whitespace-nowrap',
            {
              'bg-green-600': task.status,
              'bg-red-600': !task.status
            }
          )}
          onClick={() => handleStatus(task.id)}
        >
          {task.status ? 'Done' : 'To-do'}
        </button>
      </div>
    </li>
  );
}

export default TaskCard;
