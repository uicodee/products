import {Button, Col, Row, Typography} from "antd";


export const Header = () => {
    return (
        <Row>
            <Col span={12}>
                <Typography.Title level={3} style={{float: "left"}}>DummyJSON users</Typography.Title>
            </Col>
            <Col span={12} >
                <Button style={{float: "right"}}>Create new user</Button>
            </Col>
        </Row>
    )
}
