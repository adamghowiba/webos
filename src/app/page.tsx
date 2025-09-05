'use client';

import { Button } from '@/components/ui/button';
import { TaskBar } from '@/features/taskbar/components/TaskBar';
import { useTheme } from 'next-themes';

export default function Desktop() {
  const them = useTheme()
  return (
    <div className="size-full flex flex-col overflow-hidden">
      <div className="size-full">
        <div className="w-[400px] h-[400px] bg-bg text-bg-fg flex items-center justify-center">

          <Button actio>
            Hello world
          </Button>

        </div>
      </div>

      <TaskBar />
    </div>
  );
}
