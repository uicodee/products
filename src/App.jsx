import {Card, Col, Row, Space} from "antd";
import {useEffect, useState} from "react";
import {getProducts} from "./api/index.js";


function App() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts().then(res => setProducts(res.products))
    }, [])
  //   xs = extra small
  //   sm = small
  //   md = medium
  //   lg = large
  //   xl = extra large
  //   xxl = extra extra large
  return (
      <Row className="flex row-wrapper">
          <Col xs={20} sm={18} md={16} lg={10} xl={10}>
              <Space direction="vertical" size={16} className="flex">
                  <Row gutter={24}>
                      {products.map(product => (
                          <Col span={12} key={product.id}>
                              <Card
                                  className="card"
                                  hoverable={true}
                                  title={product.title}
                                  cover={<img alt="example" src={product.thumbnail} className="img-wrapper"/>}
                                  // extra={<a href="#">More</a>}
                              >
                                  <b># {product.brand}</b><br/>
                                  {product.description}
                              </Card>
                          </Col>
                      ))}
                  </Row>
                  {/*<Card title="Default size card" extra={<a href="#">More</a>} >*/}
                  {/*    <p>Card content</p>*/}
                  {/*    <p>Card content</p>*/}
                  {/*    <p>Card content</p>*/}
                  {/*</Card>*/}
              </Space>
          </Col>
      </Row>
  )
}

export default App
