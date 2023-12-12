
import { useQuery } from "@tanstack/react-query"
import { getRole } from "../api/utils"
import useAuth from "./useAuth"




const useRole = () =>{
    const {user, loading} = useAuth()
const {data: role, isLoading} = useQuery({
    enabled: !loading && !!user?.email ,
    queryKey: ['role'],
    queryFn: async () => getRole(user?.email)
})
return[role, isLoading]

}


export default useRole

