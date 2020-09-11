import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

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
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const notes = [
  { id: 1, title: "Virtual DOM", content: "..." },
  { id: 2, title: "Components have .state, .props", content: "..." },
  { id: 3, title: "Installation alternatives", content: "Webpack" },
  {
    id: 4,
    title: "Tools",
    content:
      "React Developer Tools for Chrome, snippets tool, VS Code React extension, jsonplaceholder"
  }
];

const note1 = {
  title: "Note One",
  content: ["This is the first phrase", "Second phrase"]
};

const notes1 = [note1, note1];

class Note extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.note.title}</h3>
        <ul>
          {this.props.note.content.map((topic) => (
            <li>{topic}</li>
          ))}
        </ul>
      </div>
    );
  }
}

//{ this.searchResultsComponents.map((it, index) => <it key={index} />) }

function RenderItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function RenderList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((renderedItem, index) => (
    <RenderItem key={index} value={renderedItem} />
  ));
  return <ul>{listItems}</ul>;
}

/* const numbers = ["123", 2, 3, 4, 5, 5];
ReactDOM.render(
  <RenderList numbers={numbers} />,
  document.getElementById("root")
);
 */

export default function App() {
  return (
    <div className="App">
      <h1>Hello Learn React</h1>
      <hr />
      <ReactNotes notes={notes} />
      <hr />
      <Note note={note1} />
      <hr />
    </div>
  );
}
