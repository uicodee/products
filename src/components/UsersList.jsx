import {Avatar, Button, List, Popconfirm, Space} from "antd";
import {deleteUser} from "../api/index.js";
import {DeleteOutlined} from "@ant-design/icons";

export const UsersList = ({users}) => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={users}
            renderItem={(user) => (
                <List.Item actions={[
                    <>
                        <Space>
                            {/*<Button*/}
                            {/*    key={user.id}*/}
                            {/*    onClick={() => {*/}
                            {/*        getSingleUser(user.id).then(response => setSingleUser(response))*/}
                            {/*        setIsModalOpen(true)*/}
                            {/*    }}>*/}
                            {/*    Детальнее*/}
                            {/*</Button>*/}
                            <Popconfirm
                                placement="topRight"
                                title="Удалить пользователя"
                                description="Вы действительно хотите удалить пользователя?"
                                onConfirm={() => deleteUser(user.id)}
                                // onCancel={cancel}
                                okText="Да"
                                cancelText="Нет"
                            >
                                <Button
                                    key={user.id}
                                    danger
                                    type="primary"
                                    icon={<DeleteOutlined />}
                                />
                            </Popconfirm>

                        </Space>
                    </>
                ]}>
                    <List.Item.Meta
                        avatar={<Avatar src={user.image} />}
                        title={<a href={`/user/${user.id}`}>{user.firstName}</a>}
                        description={user.username}
                    />
                </List.Item>
            )}
        />
    )
}
