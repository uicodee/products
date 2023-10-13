import {useEffect, useState} from "react";
import {getAllUsers} from "../api/index.js";
import {UsersList} from "../components/UsersList.jsx";
import {Layout} from "../components/Layout.jsx";

export const Home = () => {
    //   xs = extra small
    //   sm = small
    //   md = medium
    //   lg = large
    //   xl = extra large
    //   xxl = extra extra large
    //
    const [users, setUsers] = useState([])
    useEffect(() => {
        getAllUsers().then(response => setUsers(response.users))
    }, []);
    return (
        <Layout>
            {/*<DetailModal*/}
            {/*    setIsModalOpen={setIsModalOpen}*/}
            {/*    isModalOpen={isModalOpen}*/}
            {/*    singleUser={singleUser}*/}
            {/*    setSingleUser={setSingleUser}*/}
            {/*/>*/}
            <UsersList users={users} />
        </Layout>
    )
}
