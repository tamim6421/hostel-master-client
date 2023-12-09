import qs from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";


const AreaBox = ({label, icon: Icon, selected}) => {
    const [params , setParams] = useSearchParams()
    const navigate = useNavigate()
    // console.log(selected)

    params.get('area')

    const handelClick = (label) =>{
        console.log( label)
        let currentQuery = {}
        if(params){
            currentQuery = qs.parse(params.toString())
        }
            const updateQuery = {...currentQuery, area: label}

            const url = qs.stringifyUrl({
                url: '/',
                query: updateQuery,

            })
            navigate(url)
        
    }

    // console.log(label)
    return (
        <div 
        onClick={()=>handelClick(label)}
        className={`flex box flex-col  rounded-lg  items-center justify-center p-3 gap-2 border-b-2  hover:text-gray-900 transition cursor-pointer ${selected ? 'border-b-4 border-neutral-800 bg-gray-100': ''}`} >
       
                <div>
              

                </div>
           
            <div className="text-lg font-bold ">{label}</div>
        </div>
    );
};

export default AreaBox;