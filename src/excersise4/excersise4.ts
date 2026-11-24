type User = {
  id: number;
  name: string;
  email: string;
};
type Success = {
  status: "success";
  data: User;
};
type Failure = {
  status: "failure";
  error: string;
};
type Result = Success | Failure;
function handleResult(result: Result) {
  if (result.status === "success") {
    console.log(result.data.name);
  } else {
    console.log(result.error);
  }
}
// handleResult({
//   status: "success",
//   data: {
//     id: 1,
//     name: "Shahed",
//     email: "shahed@example.com",
//   },
// });

// handleResult({
//   status: "failure",
//   error: "User not found",
// });
