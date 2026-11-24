const input = '{"id": 1, "name": "Shahed", "email": "shahed@example.com"}';
// const input = '{"id": "abc", "name": "Shahed", "email": "shahed@example.com"}';Error
const raw: unknown = JSON.parse(input);
type User = {
  id: number;
  name: string;
  email: string;
};

function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    "id" in value &&
    typeof value.id === "number" &&
    "name" in value &&
    typeof value.name === "string" &&
    "email" in value &&
    typeof value.email === "string"
  );
}
if (isUser(raw)) {
  console.log(raw.name);
} else {
  console.log("Invalid user data");
}
export { isUser };