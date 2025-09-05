import { FC } from 'react';

export interface TaskBarProps {}

export const TaskBar: FC<TaskBarProps> = ({ ...props }) => {
  return (
    <div className="flex items-center p-1 h-[50px] grow-0 backdrop-blur-[100px] bg-zinc-900/70 text-zinc-100">
      <span className="text-bg-fg">Task bar</span>
    </div>
  );
};
