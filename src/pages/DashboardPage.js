import { useContext } from "react"
import { AppState } from "../components/context/AppContext"


export default function DashboardPage() {

    const context = useContext(AppState)
    return (<>
        dashboard page - {context.user.get?.username || 'no login'}
    </>)
}