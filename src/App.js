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
    body: "This is the first post"
  };
  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <p>{this.state.body}</p>
      </div>
    );
  }
}

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
