// const statuses = {
//     notStarted: 0,
//     inProgress: 1,
//     done: 2
// }

// console.log(statuses.inProgress)

enum StatusesEnum {
    NotStarted,
    InProgress,
    Done
}

console.log(StatusesEnum.InProgress)
// logs 1

interface Task {
    id: string
    status: StatusesEnum
}

const tast: Task = {
    id: "to do",
    status: 0
}

