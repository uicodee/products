import {makeAutoObservable} from "mobx";
import {addUser} from "../api/index.js";

class UserStore {

    isModalOpen = false;
    firstname = "";
    lastname = "";
    username = "";
    photoLink = "";
    age = 0;

    constructor() {
        makeAutoObservable(this)
    }

    setIsModalOpen = (isModalOpen) => {
        this.isModalOpen = isModalOpen
    }

    setFirstname = (firstname) => {
        this.firstname = firstname
    }

    setLastname = (lastname) => {
        this.lastname = lastname
    }

    setAge = (age) => {
        this.age = age
    }

    setUsername = (username) => {
        this.username = username
    }

    setPhotoLink = (photoLink) => {
        this.photoLink = photoLink
    }

    addNewUser = () => {
        addUser(this.firstname, this.lastname, this.age).then(response => {
            console.log(response)
            this.isModalOpen = false
            this.firstname = ""
            this.lastname = ""
            this.age = 0
        })
    }
}

const userStore = new UserStore()
export default userStore;

