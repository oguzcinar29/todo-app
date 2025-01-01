// Date: 07/20/21
// Description: Dynamic Dialog Component

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

type DynamicDialog = {
  readonly dialogTitle: ReactNode;
  readonly toggle: () => JSX.Element; // Accept a function that returns JSX
  readonly button: ReactNode;
};

export default function DynamicDialog({
  dialogTitle,
  toggle,
  button,
}: DynamicDialog) {
  return (
    <div className="">
      <Dialog>
        <DialogTrigger asChild className="w-full">
          {button}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="flex flex-col gap-3">
            <DialogTitle>{dialogTitle}</DialogTitle>
            {toggle()}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
