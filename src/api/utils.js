
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





// ---------------------------
// booking related api call 
export const createPaymentIntent = async (price) =>{
    const {data} = await axiosSecure.post('/create-payment-intent', price)
    return data
}   

// save booking info in db 

export const saveBookingInfo = async (paymentInfo) =>{
    const {data} = await axiosSecure.post('/booking', paymentInfo)
    return data
}   



// update booking status in db 
export const updateStatus = async (id, status) =>{
    const {data} = await axiosSecure.patch(`/rooms/status/${id}`, {status})
    return data
}   



// get booking data for a specific host/ users email 
export const getBooking = async (email) =>{
    const {data} = await axiosSecure.get(`/bookings?email=${email}`)
    return data 
}

// get all bookings for a host by email 
export const getHostBooking = async (email) =>{
    const {data} = await axiosSecure.get(`/bookings/host?email=${email}`)
    return data 
}


// grt all user for admin manage users 
// get all users for manage admin 
export const getAllUsers = async() =>{
    const {data} = await axiosSecure(`/allusers/admin`)
    return data
}


// update user role by admin 
// /update/role/:email
// update user role by admin 
export const updateRole = async ({email, role}) =>{
    const currentUser ={
        email,
        role,
        status: 'Verified'
    }
    const {data} = await axiosSecure.put(`/update/role/${email}`, currentUser)
    return data
}



// admin states api 
export const adminState = async () =>{
    const {data} = await axiosSecure.get('/admin-stat')
    return data
}