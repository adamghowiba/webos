'use client';

import { Button } from '@/components/ui/button';
import { TaskBar } from '@/features/taskbar/components/TaskBar';
import { useTheme } from 'next-themes';

export default function Desktop() {
  const theme = useTheme();

  return (
    <div className="size-full flex flex-col overflow-hidden">
      <div className="size-full">
        <div className="size-[800px] bg-bg text-bg-fg items-center justify-center flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <Button action="primary" variant="solid" size="sm">
              Small
            </Button>

            <Button action="primary" variant="solid" size="md">
              Medium
            </Button>

            <Button action="primary" variant="solid" size="lg">
              Large
            </Button>

            <Button action="primary" variant="solid" size="icon">
              I
            </Button>
          </div>

          <div className="flex items-center gap-6">
            <Button action="primary" variant="solid" size="sm">
              Primary
            </Button>

            <Button action="primary" variant="ghost" size="sm">
              Ghost
            </Button>

            <Button action="primary" variant="outline" size="sm">
              Primary
            </Button>

            <Button action="primary" variant="link" size="sm">
              Primary
            </Button>
          </div>

          <div className="flex items-center gap-6">
            <Button action="negative" variant="solid" size="sm">
              Primary
            </Button>

            <Button action="negative" variant="ghost" size="sm">
              Ghost
            </Button>

            <Button action="negative" variant="outline" size="sm">
              Primary
            </Button>

            <Button action="negative" variant="link" size="sm">
              Primary
            </Button>
          </div>

          <div className="flex items-center gap-6">
            <Button action="positive" variant="solid" size="sm">
              Primary
            </Button>

            <Button action="positive" variant="ghost" size="sm">
              Ghost
            </Button>

            <Button action="positive" variant="outline" size="sm">
              Primary
            </Button>

            <Button action="positive" variant="link" size="sm">
              Primary
            </Button>
          </div>

          <div className="flex items-center gap-6">
            <Button action="secondary" variant="solid" size="sm">
              Primary
            </Button>

            <Button action="secondary" variant="ghost" size="sm">
              Ghost
            </Button>

            <Button action="secondary" variant="outline" size="sm">
              Primary
            </Button>

            <Button action="secondary" variant="link" size="sm">
              Primary
            </Button>
          </div>

          <div className="flex items-center gap-6">
            <Button action="neutral" variant="solid" size="sm">
              Primary
            </Button>

            <Button action="neutral" variant="ghost" size="sm">
              Ghost
            </Button>

            <Button action="neutral" variant="outline" size="sm">
              Primary
            </Button>

            <Button action="neutral" variant="link" size="sm">
              Primary
            </Button>
          </div>
        </div>
      </div>

      <TaskBar />
    </div>
  );
}
