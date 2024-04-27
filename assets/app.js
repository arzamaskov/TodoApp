import React from "react";
import { createRoot } from "react-dom/client";
import TodoTable from "./components/TodoTable";
import TodoContextProvider from "./contexts/TodoContext";

class App extends React.Component {
  render() {
    return (
      <TodoContextProvider>
        <TodoTable />
      </TodoContextProvider>
    );
  }
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
