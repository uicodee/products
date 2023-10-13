import {Button, Col, Row, Typography} from "antd";
import {Header} from "./Header.jsx";

export const Layout = ({children}) => {
    return (
        <>

            <Row className="flex row-wrapper">
                <Col xs={20} sm={18} md={16} lg={14} xl={10}>
                    <Header />
                    {children}
                </Col>
            </Row>
        </>
    )
}
