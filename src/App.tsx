import { useEffect, useState } from 'react';
import { cn } from './utils/theme';
import { Task } from './types/types';
import AddTask from './components/AddTask';
import Header from './components/Header';
import ShowTask from './components/ShowTask';
import './App.scss';

//Todo Cypher Task in local storage
//Todo Theme Logic

function App() {
  const [tasklist, setTasklist] = useState<Task[]>(
    JSON.parse(localStorage.getItem('tasklist') || '')
  );
  const [task, setTask] = useState<Task>({
    id: 0,
    name: '',
    date: '',
    status: false
  });
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('theme') || 'default')
  );

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
    localStorage.setItem('tasklist', JSON.stringify(tasklist));
  }, [tasklist, theme]);

  return (
    <>
      <div
        className={cn('h-screen px-20 py-5 bg-slate-500', {
          'bg-slate-500': theme === 'default',
          'bg-blue-500': theme === 'blue',
          'bg-red-500': theme === 'red',
          'bg-green-500': theme === 'green',
          'bg-cyan-500': theme === 'cyan'
        })}
      >
        <div className='flex flex-col items-center'>
          <Header theme={theme} setTheme={setTheme} />
          <AddTask
            tasklist={tasklist}
            setTasklist={setTasklist}
            task={task}
            setTask={setTask}
          />
          <ShowTask
            tasklist={tasklist}
            setTasklist={setTasklist}
            setTask={setTask}
          />
        </div>
      </div>
    </>
  );
}

export default App;
