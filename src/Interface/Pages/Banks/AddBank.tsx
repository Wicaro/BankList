import { BankProvider } from "@/Core/Providers/BankProvider";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BankCreate from "./Components/BankCreate";

const AddBank = () => {
    return (
       <BankProvider>
            <BankCreate/>
       </BankProvider>
    )
}

export default AddBank