// const statuses = {
//     notStarted: 0,
//     inProgress: 1,
//     done: 2
// }
// console.log(statuses.inProgress)
var StatusesEnum;
(function (StatusesEnum) {
    StatusesEnum[StatusesEnum["NotStarted"] = 0] = "NotStarted";
    StatusesEnum[StatusesEnum["InProgress"] = 1] = "InProgress";
    StatusesEnum[StatusesEnum["Done"] = 2] = "Done";
})(StatusesEnum || (StatusesEnum = {}));
console.log(StatusesEnum.InProgress);
var tast = {
    id: "to do",
    status: 0
};
