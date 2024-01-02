import { cn } from '../utils/theme';

type props = {
  color: string;
  active: string;
  onClick: () => void;
};

function ThemeIcon({ color, onClick, active }: props) {
  return (
    <button
      className={cn(
        'w-5 h-5 border rounded-full',
        {
          'bg-cyan-500': color === 'cyan',
          'bg-green-500': color === 'green',
          'bg-red-500': color === 'red',
          'bg-blue-500': color === 'blue'
        },
        {
          'w-7 h-7': active === color
        }
      )}
      onClick={onClick}
    ></button>
  );
}

export default ThemeIcon;
