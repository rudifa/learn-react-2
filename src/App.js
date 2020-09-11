import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
// static notes, to be diplayed in the app page
const notes = [
  { title: "Virtual DOM", content: ["..."] },
  {
    title: "Components, functional",
    content: ["are stateless, have .props, return html", "and more"]
  },
  {
    title: "Components, class",
    content: ["are stateful, have .props, .state, render() that returns html"]
  },
  { title: "Installation alternatives", content: "Webpack" },
  {
    title: "Tools",
    content: [
      "React Developer Tools for Chrome",
      "snippets tool, VS Code React extension, jsonplaceholder"
    ]
  }
];

const note1 = {
  title: "Note One",
  content: ["This is the first phrase", "Second phrase"]
};

function ReactNotes(props) {
  const sidebar = (
    <ul>
      {props.notes.map((note) => (
        <li key={note.id}>{note.title}</li>
      ))}
    </ul>
  );
  const content = props.notes.map((note) => (
    <div key={note.id}>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
    </div>
  ));
  return (
    <span>
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
      <hr />
      <hr />
      <div>
        <RenderListOfStrings items={props.notes.map((note) => note.title)} />
        <hr />
        <ListOfNotes notes={props.notes} />
      </div>
    </span>
  );
}
const ho = () => {
  return <p>HO</p>;
};

function ListOfNotes(props) {
  return (
    <div>
      <Note note={props.notes[1]} />
      {props.notes.map((note) => (
        <p>{note.title}</p>
      ))}
    </div>
  );
}
// TODO: how do I map over notes and render ech one with Note()?
//{props.notes.map((note) => (<Note note={note} />))}
//{props.notes.map((note, index) => "kkK" + String(123) + String({index}))}
//{props.notes.map((note) => (<p></p>) }
//{props.notes.map((note) => {ho()})}

function Note(props) {
  return (
    <div>
      <h3>{props.note.title}</h3>
      <RenderListOfStrings items={props.note.content} />
    </div>
  );
}

function RenderItem(props) {
  return <li>{props.value}</li>;
}

function RenderListOfStrings(props) {
  const listItems = props.items.map((item, index) => (
    <RenderItem key={index} value={item} />
  ));
  return <ul>{listItems}</ul>;
}

/* const numbers = ["123", 2, 3, 4, 5, 5];
ReactDOM.render(
  <RenderList items={numbers} />,
  document.getElementById("root")
) */

export default function App() {
  return (
    <div className="App">
      <h1>Hello Learn React</h1>
      <hr />
      <ReactNotes notes={notes} />
      <hr />
      {/* 
      <Note note={note1} />
      */}
      <hr />
    </div>
  );
}
