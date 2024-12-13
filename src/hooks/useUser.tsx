import { useContext } from "react"
import { UserContext } from "../contexts/UserContext";


export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error ("useOrders debe ser usado dentro de un Notification Provider");
    }
    return context
}