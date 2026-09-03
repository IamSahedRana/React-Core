export default function Task(props: { task: string, isdone: boolean }) {
    return props.isdone ? (
        <div>
            <h3>Task: {props.task}</h3>
            <p>Status: Completed</p>
        </div>
    ) : (
        <div>
            <h3>Task: {props.task}</h3>
            <p>Status: Not Completed</p>
        </div>
    )
}