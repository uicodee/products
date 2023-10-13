import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getSingleUser} from "../api/index.js";
import {Breadcrumb, Col, Descriptions, Image, Row} from "antd";
import {HomeOutlined} from "@ant-design/icons";

export const SingleUser = () => {
    const [user, setUser] = useState({})
    const params = useParams()
    useEffect(() => {
        getSingleUser(params.userId).then(response => setUser(response))
    }, [params]);
    const items = [
        {
            key: '1',
            label: 'Firstname',
            children: user.firstName,
        },
        {
            key: '2',
            label: 'Lastname',
            children: user.lastName,
        },
        {
            key: '3',
            label: 'Age',
            children: user.age,
        },
        {
            key: '4',
            label: 'Email',
            children: user.email,
        },
        {
            key: '5',
            label: 'Gender',
            children: user.gender,
        },
        {
            key: '6',
            label: 'Height',
            children: user.height,
        },
        {
            key: '7',
            label: 'Weight',
            children: user.weight,
        },
    ];
    return (
        <Row className="flex row-wrapper">
            <Col xs={20} sm={18} md={16} lg={14} xl={10}>
                <Breadcrumb
                    items={[
                        {
                            href: '/',
                            title: (
                                <>
                                    <HomeOutlined />
                                    <span>Home</span>
                                </>
                            ),
                        },
                        {
                            title: user.firstName,
                        }
                    ]}
                />
                <Image preview={false} src={user.image} width="100%" />
                <Descriptions title={user.firstName + " " + user.lastName} items={items} />
            </Col>
        </Row>
    )
}
