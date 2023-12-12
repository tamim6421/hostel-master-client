
import axiosSecure from "."



// save user data to the data base 
export const saveUser = async user =>{
    const currentUser = {
        email : user.email,
        role: 'guest',
        status:'verified'
    }

    const {data} = await axiosSecure.put(`/users/${user?.email}`, currentUser)
    return data
}


// get token from server 
export const getToken = async email =>{
    const {data} = await axiosSecure.post(`/jwt`, {email})
    console.log('token received', data)

    return data
}


// remove token from browser 
export const removeToken = async () =>{
    const {data} = await axiosSecure.get('/logout')
    return data
}





// room related functions 
// get all rooms 
export const getAllRooms = async() =>{
    const {data} = await axiosSecure.get('/rooms')
    return data 
}

// get a single room from db
export const getSingleRoom = async(id) =>{
    const {data} = await axiosSecure.get(`/rooms/${id}`)
    return data
}


// post room data in database 
export const addRooms = async (roomData) =>{
    const {data} = await axiosSecure.post(`/roomsdata`, roomData)
    return data

}



// get host  rooms by using email 
export const getHostRoom = async(email) =>{
    const {data} = await axiosSecure.get(`/myrooms/${email}`)
    return data
}



// get roll 
// get user Role 
export const getRole = async(email) =>{
    const {data} = await axiosSecure(`/user/${email}`)
    return data.role
}

// become host 
export const becomeHost = async(email) =>{
    const currentUser = {
        email, status: 'Requested',
    }
    const {data} = await axiosSecure.put(`/users/${email}`, currentUser)
    return data
}