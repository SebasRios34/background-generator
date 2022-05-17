const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { class: "title" }, "React IS rendered"),
    React.createElement(
      Person,
      { name: "Sebastian", occupation: "Developer" },
      null
    ),
    React.createElement(
      Person,
      { name: "Sofia", occupation: "Industrial" },
      null
    ),
    React.createElement(
      Person,
      { name: "Valeria", occupation: "Designer" },
      null
    ),
  ]);
};

//React V17 and below
//ReactDOM.render(React.createElement(App), document.getElementById("root"));

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(Raect.createElement(App));
