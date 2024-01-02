import { useState } from 'react';
import logo from '../assets/react.svg';
import ThemeIcon from './ThemeIcon';

type props = {
  theme: string;
  setTheme: (theme: string) => void;
};

function Header({ theme, setTheme }: props) {
  const [active, setActive] = useState(theme);

  return (
    <header className='flex items-center justify-between w-full h-20 bg-white border rounded-lg shadow-md'>
      <div className='flex gap-3 p-10'>
        <img src={logo} alt='logo' className='w-6 h-6' />
        <h1>After-Task</h1>
      </div>
      <nav className='flex items-center justify-center gap-3 p-10'>
        <ThemeIcon
          color={'blue'}
          onClick={() => {
            if (active === 'blue') {
              setTheme('default');
              setActive('default');
            } else {
              setTheme('blue');
              setActive('blue');
            }
          }}
          active={active}
        />
        <ThemeIcon
          color={'red'}
          onClick={() => {
            if (active === 'red') {
              setTheme('default');
              setActive('default');
            } else {
              setTheme('red');
              setActive('red');
            }
          }}
          active={active}
        />
        <ThemeIcon
          color={'green'}
          onClick={() => {
            if (active === 'green') {
              setTheme('default');
              setActive('default');
            } else {
              setTheme('green');
              setActive('green');
            }
          }}
          active={active}
        />
        <ThemeIcon
          color={'cyan'}
          onClick={() => {
            if (active === 'cyan') {
              setTheme('default');
              setActive('default');
            } else {
              setTheme('cyan');
              setActive('cyan');
            }
          }}
          active={active}
        />
      </nav>
    </header>
  );
}

export default Header;
