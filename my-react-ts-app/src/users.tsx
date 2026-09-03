export default function Users(props: {
  name: string;
  isloggedin: boolean;
  age: number;
}) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Age: {props.age}</p>

      <p>
        {props.isloggedin ? "Logged in" : "Not logged in"}
      </p>
    </div>
  );
}