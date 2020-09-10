import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
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

const posts = [
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

class Post extends React.Component {
  state = {
    title: "Post One",
    content: ["This is the first phrase", "Second phrase"]
  };
  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <ul>
          {this.state.content.map((topic) => (
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

const numbers = ["123", 2, 3, 4, 5, 5];
ReactDOM.render(
  <RenderList numbers={numbers} />,
  document.getElementById("root")
);

//ReactDOM.render(<Blog posts={posts} />, document.getElementById("root"));
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <hr />
      <Blog posts={posts} />
      <hr />
      <Post />
      <hr />
    </div>
  );
}
