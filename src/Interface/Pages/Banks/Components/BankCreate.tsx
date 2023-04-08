import useBank from "@/Core/Hooks/BankHook";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BankCreate = () => {
    
    const { code } = useParams();
    const {fetchBank} = useBank()

    useEffect(()=>{
        fetchBank(`${code}`)
    }, [])

    return (
        <p></p>
    )
}

export default BankCreate