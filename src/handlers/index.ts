import add from "./add";
import list from "./list";
import update from "./update";
import del from "./delete";
import markInProgress from "./mark-in-progress";
import markDone from "./mark-done";

export { default as addHandler } from "./add";
export { default as listHandler } from "./list";
export { default as updateHandler } from "./update";
export { default as deleteHandler } from "./delete";
export { default as markInProgressHandler } from "./mark-in-progress";
export { default as markDoneHandler } from "./mark-done";

// TODO: test only remove later
function devTest() {
  function withLog(fn: (...args: any[]) => Promise<any>) {
    return (...args: any[]) => {
      return fn(...args)
        .then((...res) => {
          console.log("------", fn.name, "------");
          if (res.length > 0 && res[0] !== undefined) {
            console.log(...res);
          } else {
            console.log("No output");
          }
          console.log("==========================");
        })
        .catch(console.error);
    };
  }

  const addWithLog = withLog(add);
  const listWithLog = withLog(list);
  const updateWithLog = withLog(update);
  const deleteWithLog = withLog(del);
  const markInProgressWithLog = withLog(markInProgress);
  const markDoneWithLog = withLog(markDone);

  addWithLog("test task")
    .then(() => addWithLog("another task"))
    .then(() => addWithLog("another task 2"))
    .then(() => addWithLog("another task 3"))
    .then(() => listWithLog())
    .then(() => updateWithLog("1", "updated task"))
    .then(() => listWithLog())
    .then(() => markInProgressWithLog("2"))
    .then(() => listWithLog())
    .then(() => markDoneWithLog("3"))
    .then(() => listWithLog())
    .then(() => deleteWithLog("2"))
    .then(() => listWithLog())
    .then(() => listWithLog("done"))
    .catch(console.error);
}
