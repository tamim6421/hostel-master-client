import { useSearchParams } from "react-router-dom";


const AreaBox = ({label, icon: Icon}) => {
    const [params , setParams] = useSearchParams()
    
    // console.log(label)
    return (
        <div className="flex box flex-col  rounded-lg  items-center justify-center p-3 gap-2 border-b-2  hover:text-gray-900 transition cursor-pointer ">
       
                <div>
              

                </div>
           
            <div className="text-lg font-bold ">{label}</div>
        </div>
    );
};

export default AreaBox;