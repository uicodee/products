export const getProducts = () => {
    return fetch('https://dummyjson.com/products')
        .then(res => res.json())
}

export const getSingleProduct = (productId) => {
    return fetch(`https://dummyjson.com/products/${productId}`)
        .then(res => res.json())
}

export const getAllUsers = () => {
    return fetch('https://dummyjson.com/users')
        .then(res => res.json())
}


export const getSingleUser = (userId) => {
    return fetch(`https://dummyjson.com/users/${userId}`)
        .then(res => res.json())
}

export const deleteUser = (userId) => {
    fetch(`https://dummyjson.com/users/${userId}`, {
        method: 'DELETE',
    }).then(res => res.json())
}

export const addUser = (firstName, lastName, age) => {
    return fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            age: age,
        })
    }).then(res => res.json())
}