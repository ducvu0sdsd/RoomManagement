
import HomePage from './screens/HomePage'
import HostManagement from './screens/HostManagementPage'
import ElectricManagementPage from './screens/ElectricManagmentPage'
import WaterManagementPage from './screens/WaterManagementPage'
import RoomManagementPage from './screens/RoomManagementPage'
import GarbageManagementPage from './screens/GarbageManagementPage'
import AriseManagementPage from './screens/AriseManagementPage'
import PaymentPage from './screens/PaymentPage'
import CheckInPage from './screens/CheckInPage'
import CheckOutPage from './screens/CheckOutPage'

export default function routes() {
    const list_route = [
        {
            name : "Home",
            component : HomePage
        },
        {
            name : "Host Management",
            component : HostManagement
        },
        {
            name : "Electric Managment",
            component : ElectricManagementPage
        },
        {
            name : "Water Management",
            component : WaterManagementPage
        },
        {
            name : "Room Management",
            component : RoomManagementPage
        },
        {
            name : "Garbage Management",
            component : GarbageManagementPage
        },
        {
            name : "Arise Management",
            component : AriseManagementPage
        },
        {
            name : "Payment",
            component : PaymentPage
        },
        {
            name : "Check In",
            component : CheckInPage
        },
        {
            name : "Check Out",
            component : CheckOutPage
        }
        
    ]

    return list_route;
}