import axios from "axios"

export const loginUser = async (data) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API}/auth/signin`, data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const signUpUser = async (data) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API}/auth/signup`, data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const logOutUser = async (accessToken,refreshToken ) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API}/auth/signout`, {refreshToken}, {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          })
        return res
    } catch (error) {
        console.log(error)
    }
}