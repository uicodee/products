import {Modal, Image, Button} from "antd";

// eslint-disable-next-line react/prop-types
export const DetailModal = ({singleUser, isModalOpen, setIsModalOpen, setSingleUser}) => {
    return (
        <Modal
            centered
            title={"@"+singleUser.username}
            open={isModalOpen}
            onOk={() => setIsModalOpen(false)}
            onCancel={() => {
                setIsModalOpen(false)
                setSingleUser({})
            }}
            footer={[
                // <>
                //     <Button>jkdsfndf</Button>
                //     <Button>jkdsfndf</Button>
                //     <Button>jkdsfndf</Button>
                //     <Button>jkdsfndf</Button>
                // </>
            ]}
        >
            <Image
                preview={false}
                width="100%"
                src={singleUser.image}
            />
            <b>First name: </b><p>{singleUser.firstName}</p>
            <b>Last name: </b><p>{singleUser.firstName}</p>
        </Modal>
    )
}
