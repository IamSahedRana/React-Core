function Todo(props: { task: string, time: string }) {
     return(
          <li> {props.task} at {props.time}</li>
     )
}

export default Todo;