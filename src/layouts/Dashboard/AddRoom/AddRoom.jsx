import toast from "react-hot-toast";
import AddRoomsForm from "./AddRoomsFrom";
import { imageUpload } from "../../../api/uploadImage";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { addRooms } from "../../../api/utils";




const AddRoom = () => {


    const navigate = useNavigate()
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
            const data = await addRooms(roomData)
            console.log(data)
            setUploadButtonText('Uploaded')
            toast.success('Room added Successful')
            navigate('/dashboard/myRoom')
            


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

    return (
        <div>
            
            {/* add rooms from  */}
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

export default AddRoom;