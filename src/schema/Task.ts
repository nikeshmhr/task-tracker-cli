import { Status } from "../types";

export class Task {
  id: number;
  description: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;

  constructor(specs: Task) {
    this.id = specs.id;

    if (!specs.description) {
      throw new Error("Description is required");
    }
    this.description = specs.description;
    this.status = specs.status || Status.TODO;
    this.createdAt = specs.createdAt || new Date();
    this.updatedAt = specs.updatedAt || new Date();
  }
}
