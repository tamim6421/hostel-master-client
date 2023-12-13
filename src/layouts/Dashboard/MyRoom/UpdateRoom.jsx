import { useLoaderData } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { imageUpload } from "../../../api/uploadImage";
import toast from "react-hot-toast";
import AddRoomsForm from "../AddRoom/AddRoomsFrom";
import axiosSecure from "../../../api";

const UpdateRoom = () => {
    const room = useLoaderData()

    // const navigate = useNavigate()
    const {user} = useAuth()
    const [loading, setLoading] = useState(false)
    const [uploadButtonText, setUploadButtonText] = useState("Upload Image")
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date (),
        key:'selection'
    })

    const handleSubmit = async (event) =>{
        setLoading(true)
        event.preventDefault()
        // console.log('hello')
        const form = event.target 
        const location = form.location.value 
        const title = form.title.value 
        const area = form.area.value 
        const to = dates.endDate
        const from = dates.startDate
        const price = form.price.value 
        const guest = form.total_guest.value 
        const bedrooms = form.bedrooms.value 
        const bathrooms = form.bathrooms.value 
        const description = form.description.value 
        const image = form.image.files[0]

         // for upload image in imagebb 
        const imageUrl = await imageUpload(image)

        // host information 
        const host = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email
        }

        const roomData = {
            location, title, area, to, from, price, guest, bedrooms, bathrooms, description, host, image: imageUrl?.data?.display_url,
        }
        console.table(roomData)

        // send data to the database 
        try {  

            const update = await axiosSecure.patch(`/rooms/${room?._id}`, roomData)
            console.log(update.data)
            if(update.data.modifiedCount > 0){
                toast.success('Room data Updated Successful')
            
            }
            setUploadButtonText('Uploaded')
           
            // navigate('/dashboard/myRoom')
            


        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }finally{
            setLoading(false)
        }

        console.table(roomData)
    }

   

    // handel date change form react date change calender 
    const handleDates = (ranges) =>{
        setDates(ranges.selection)
        // console.log(ranges)
    }

    const handleImageChange = (image) =>{
        setUploadButtonText(image.name)
    }



    console.log(room)
    return (
        <div>
            <div>
                <h1 className="mt-10 text-center text-2xl font-bold text-blue-400">Update Room Data</h1>
                <h1 className=" text-center text-xl font-bold text-gray-400">{room.location}</h1>
                <h1 className=" mb-10 text-center text-xl font-bold text-gray-400">{room.title}</h1>
            </div>
                 <AddRoomsForm
              handleSubmit = {handleSubmit}
              handleDates = {handleDates}
              dates = {dates}
              handleImageChange = {handleImageChange}
              loading = {loading}
              uploadButtonText = {uploadButtonText}
            ></AddRoomsForm>
        </div>
    );
};

export default UpdateRoom;