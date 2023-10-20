import {Input, message, Modal, Space} from "antd";
import userStore from "../store/user.js";
import {observer} from "mobx-react-lite";
import usersStore from "../store/users.js";

export const AddUserModal = observer(() => {
    const [messageApi, contextHolder] = message.useMessage();
    return (
        <>
            {contextHolder}
            <Modal
                centered
                title="Add new user"
                open={userStore.isModalOpen}
                onOk={() => {
                    userStore.addNewUser()
                    usersStore.setUsers([...usersStore.users, {
                        firstName: userStore.firstname,
                        lastName: userStore.lastname,
                        username: userStore.username,
                        image: userStore.photoLink
                    }])
                    messageApi.open({
                        type: 'success',
                        content: 'New user created',
                    });
                }}
                onCancel={() => userStore.setIsModalOpen(false)}
            >
                <Space direction="vertical" className="flex">
                    <Input
                        value={userStore.firstname}
                        placeholder="Enter firstname"
                        onChange={(e) => userStore.setFirstname(e.target.value)}
                    />
                    <Input
                        value={userStore.lastname}
                        placeholder="Enter lastname"
                        onChange={(e) => userStore.setLastname(e.target.value)}
                    />
                    <Input
                        addonBefore="@"
                        value={userStore.username}
                        placeholder="Enter username"
                        onChange={(e) => userStore.setUsername(e.target.value)}
                    />
                    <Input
                        value={userStore.photoLink}
                        placeholder="Enter photo link"
                        onChange={(e) => userStore.setPhotoLink(e.target.value)}
                    />
                    <Input
                        value={userStore.age}
                        type="number"
                        placeholder="Enter age"
                        onChange={(e) => userStore.setAge(Number(e.target.value))}
                    />
                </Space>
            </Modal>
        </>
    )
})
