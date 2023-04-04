import { Col, Row } from "antd";
import "./App.css";
import ControlCenter from "./components/ControlCenter";
import Header from "./components/Header";
import Tab from "./components/Tab";
import Variable from "./components/Variable";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Row>
        <Col span={6}>
          <ControlCenter />
        </Col>
        <Col span={12} className="tab">
          <Tab />
        </Col>
        <Col span={6}>
          <Variable />
        </Col>
      </Row>
    </div>
  );
}

export default App;
