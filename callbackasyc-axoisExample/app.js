import axios from "axios"

const getApi = async (userId) => {

    try {
        const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const { data: post } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

        return { user, post }

    } catch (error) {
        console.log(error);
    }

}

export { getApi }
