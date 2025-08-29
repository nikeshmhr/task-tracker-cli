import {
  addHandler,
  deleteHandler,
  listHandler,
  markDoneHandler,
  markInProgressHandler,
  updateHandler,
} from "./handlers";
import Program from "./Program";

export default function cli() {
  const program = new Program();

  program.command("add", addHandler, { description: "Add a new task" });

  program.command("update", updateHandler, {
    description: "Update an existing task",
  });

  program.command("delete", deleteHandler, {
    description: "Delete a task",
  });

  program.command("mark-in-progress", markInProgressHandler, {
    description: "Mark a task as in progress",
  });

  program.command("mark-done", markDoneHandler, {
    description: "Mark a task as done",
  });

  program.command("list", listHandler, {
    description: "List all tasks, optionally accepts status",
  });

  program.command("help", () => {}, {
    description: "Display help information",
  });
}
