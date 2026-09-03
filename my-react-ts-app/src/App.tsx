import Book from './book'
import Task from './task'
import Users from './users'

import Todo from './todo'


import './App.css'

function App() {

  const books =['physics', 'chemistry', 'math', 'biology', 'english']

  const authors = ['John', 'Jane', 'Alice', 'Bob', 'Charlie']



  return (
    <>

          <h1>My React App </h1>
        <Users name="John" isloggedin={true} age={25}></Users>  
        <Users name="Jane" isloggedin={false} age={30}></Users>
        <Users name="Alice" isloggedin={true} age={28}></Users>
          {
            books.map((book, index) => (
              <Book key={book} title={book} author={authors[index]}></Book>
            ))
          }
{books.map((book) => (
  <p key={book}>{book}</p>
))}




          <Task task="Complete React assignment" isdone={false}></Task>
          <Task task="Submit assignment" isdone={true}></Task>



          <Todo task="Practice coding" time="10:00"></Todo>
          <Todo task="Review React documentation" time="11:00"></Todo>
          <Todo task="Work on a project" time="02:00"></Todo>

          <Developer language="JavaScript" experience="5 years"></Developer>
          <Developer language="TypeScript" experience="3 years"></Developer>

                    {/* <Student name="John" grades={[85, 90, 78]}></Student>
                    <Student name="Jane" grades={[92, 88, 95]}></Student  > */}
         
    </>
  )
}

function Developer(props: { language: string; experience: string }) {
  return (
    <div className="developer">
      <h3>Programming Language: {props.language}</h3>
      <p> Years of experience: {props.experience}</p>
    </div>
  )
}

{/* function Student(props  : { name: string; grades: number[] }) {
  console.log('inside student component', props)
  return (
    <div className="student"> 
      <h3> Name: {props.name}</h3>
      <p> Grades: {props.grades.join(', ')}</p>
    </div>
  )
  
} */}


export default App
