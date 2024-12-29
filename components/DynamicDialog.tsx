// Date: 07/20/21
// Description: Dynamic Dialog Component

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { ReactNode } from "react";

type DynamicDialog = {
  readonly buttonTitle: ReactNode;
  readonly dialogTitle: ReactNode;
  readonly toggle: () => JSX.Element; // Accept a function that returns JSX
};

export default function DynamicDialog({
  buttonTitle,
  dialogTitle,
  toggle,
}: DynamicDialog) {
  return (
    <div className="">
      <Dialog>
        <DialogTrigger className="w-full">
          <Button asChild className="w-full">
            {buttonTitle}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            {toggle()}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
