// import
const yargs = require("yargs");
const chalk = require("chalk");
const {
  readAllTask,
  createTask,
  readDetailTask,
  updateTask,
  deleteTask,
} = require("./model/task");

// tạo lệnh test
yargs.command({
  command: "test",
  handler: () => {
    console.log("test");
  },
});

// CRUD

// read-all
// node app/index.js read-all
yargs.command({
  command: "read-all",
  handler: () => {
    const result = readAllTask();
    console.log(chalk.blue("read-all: "), result);
  },
});

// read-detail
// node app/index.js read-detail --id=”1”
yargs.command({
  command: "read-detail",
  builder: {
    id: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id } = args;
    const task = readDetailTask(id);
    if (task) {
      console.log(chalk.blue("Task: "), task);
    } else {
      console.log(chalk.red("Not Found!"));
    }
  },
});

// create
// node app/index.js create --title="Hoc NodeJS" --description=”Dau kho lam”
yargs.command({
  command: "create",
  builder: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
  handler: (args) => {
    const { title, description } = args;
    const newTask = createTask(title, description);
    console.log(chalk.green("Task Create: "), newTask);
  },
});

// update
// node app/index.js update --id=”1” --title="Hoc NodeJS" --description=”Dau kho lam”
yargs.command({
  command: "update",
  builder: {
    id: {
      type: "string",
    },
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id, title, description } = args;
    const task = updateTask(id, title, description);
    if (task) {
      console.log(chalk.green("Task Updated: "), task);
    } else {
      console.log(chalk.red("Not Found!"));
    }
  },
});

// delete
// node app/index.js delete --id=”1”
yargs.command({
  command: "delete",
  builder: {
    id: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id } = args;
    const task = deleteTask(id);
    if (task) {
      console.log(chalk.green("Task Deleted: "), task);
    } else {
      console.log(chalk.red("Not Found!"));
    }
  },
});

// lưu lệnh vừa tạo
yargs.parse();
