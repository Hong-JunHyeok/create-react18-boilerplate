import React from "react";
import Layout from "./Components/Layout";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Content from "./Components/Content";
import Batch from "./Batch";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Layout>
          <NavBar />
          <main className="main">
            <SideBar />
            <Content>
              <Batch />
            </Content>
          </main>
        </Layout>
      </>
    );
  }
}

export default App;
