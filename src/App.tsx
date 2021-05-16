import ComboBox from "./Components/comboBox/ComboBox";
import { Row, Col } from "antd";

function App() {
  return (
    <Row gutter={[12, 12]}>
      <Col xs={24} sm={12} lg={6} >
        <ComboBox />
      </Col>
    </Row>
  );
}

export default App;
