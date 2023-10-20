import {useEffect, useState} from "react";
import {getAllUsers} from "../api/index.js";
import {UsersList} from "../components/UsersList.jsx";
import {Layout} from "../components/Layout.jsx";
import {observer} from "mobx-react-lite";
import {AddUserModal} from "../components/AddUserModal.jsx";
import usersStore from "../store/users.js";

export const Home = observer(() => {
    //   xs = extra small
    //   sm = small
    //   md = medium
    //   lg = large
    //   xl = extra large
    //   xxl = extra extra large
    //
    useEffect(() => {
        getAllUsers().then(response => usersStore.setUsers(response.users))
    }, []);
    return (
        <Layout>
            <AddUserModal />
            {/*<DetailModal*/}
            {/*    setIsModalOpen={setIsModalOpen}*/}
            {/*    isModalOpen={isModalOpen}*/}
            {/*    singleUser={singleUser}*/}
            {/*    setSingleUser={setSingleUser}*/}
            {/*/>*/}
            <UsersList />
        </Layout>
    )
})
