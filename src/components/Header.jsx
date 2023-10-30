import {Button, Col, Row, Typography} from "antd";
import {AddUserModal} from "./AddUserModal.jsx";
import userStore from "../store/user.js";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

export const Header = observer(() => {
    const navigate = useNavigate()
    return (
        <Row>
            <Col span={12}>
                <Typography.Title level={3} style={{float: "left"}}>DummyJSON users</Typography.Title>
            </Col>
            <Col span={12} >
                <Button
                    style={{float: "right"}}
                    onClick={() => userStore.setIsModalOpen(true)}
                    // onClick={() => navigate('/home')}

                >
                    Create new user
                </Button>
            </Col>
        </Row>
    )
})
