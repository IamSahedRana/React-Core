export default function Book(props: { title: string; author: string }) {
    return (
        <div>
            <h3>Book: {props.title}</h3>
            <p>Author: {props.author}</p>
        </div>
    )
}