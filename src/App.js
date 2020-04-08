import React from "react";
import "./App.css";

const comments = [
  {
    name: "Andrew Anderson",
    user: "@anderson",
    text: "If / Else... return the entire value",
  },
  {
    name: "Brit Beckers",
    user: "@beckers",
    text: "Return null when you want nothing to render",
  },
  {
    name: "Corey Crimson",
    user: "@crimson",
    text: "Element variables: store JSX in a variable",
  },
  {
    name: "Dennis Dewey",
    user: "@dewey",
    text: "Ternaries, take your if statements inline",
  },
  {
    name: "Eric Eckersley",
    user: "@eckersley",
    text: "Short-Circuit && display if truthy",
  },
  {
    name: "Fred Farmer",
    user: "@farmer",
    text: "Immediately Invoked Function Expression",
  },
  {
    name: "Georgina Garland",
    user: "@garland",
    text: "Use sub-components when appropriate",
  },
  {
    name: "Hank Hacker",
    user: "@hacker",
    text: "Create your own If components",
  },
  {
    name: "Isabel Island",
    user: "@island",
    text: "HOCs to control whether component is rendered",
  },
];

const Tweet = () => (
  <div className="tweet">
    <TweetHeader />
    <TweetBody />
    <TweetComments comments={comments} />
  </div>
);

const TweetHeader = () => (
  <div className="tweet-header">
    <img
      src="https://pbs.twimg.com/profile_images/527868739207708672/quLiBx7p_reasonably_small.jpeg"
      alt="avatar"
    />
    <div>
      <span className="tweet-header__name">Leigh Halliday</span>
      <span className="tweet-header__user">@leighchalliday</span>
    </div>
  </div>
);

const TweetBody = () => (
  <div className="tweet-body">
    <p>
      Let's talk about how to conditionally render elements within React! What
      options are available and when do you choose one over another?
    </p>
    <span className="tweet-body__time">10:30am · Apr 8, 2020</span>
  </div>
);

const If = ({ conditional, children }) => {
  if (conditional) return children;
  return null;
};

const withAuth = (Component) => {
  if (localStorage.getItem("user")) {
    return (props) => <Component {...props} />;
  }
  return () => <span>you must be authenticated</span>;
};

const TweetComments = ({ comments }) => {
  const [show, setShow] = React.useState(true);

  if (comments.length === 0) {
    return null;
  }

  return (
    <div className="tweet-comments">
      <div className="tweet-count">
        There are {comments.length} comments{" "}
        <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
      </div>

      <If conditional={show}>
        <TweetList comments={comments} />
      </If>
    </div>
  );
};

const TweetList = ({ comments }) => (
  <ul>
    {comments.map((comment) => (
      <li key={comment.user} className="tweet-comment">
        <span className="tweet-comment__name">{comment.name}</span>
        <span className="tweet-comment__user">{comment.user}</span>
        <p>{comment.text}</p>
      </li>
    ))}
  </ul>
);

export default function App() {
  return <Tweet />;
}
