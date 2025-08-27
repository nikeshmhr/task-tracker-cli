import Program from "./Program";

export default function cli() {
  const program = new Program();

  program.command("add", () => {}, { description: "Add a new task" });

  program.command("update", () => {}, {
    description: "Update an existing task",
  });

  program.command("delete", () => {}, {
    description: "Delete a task",
  });

  program.command("mark-in-progress", () => {}, {
    description: "Mark a task as in progress",
  });

  program.command("mark-done", () => {}, {
    description: "Mark a task as done",
  });

  program.command("list", () => {}, {
    description: "List all tasks, optionally accepts status",
  });

  program.command("help", () => {}, {
    description: "Display help information",
  });
}
