import RegForm from "@components/CreateAccount/RegForm";
import BottomNavBar from '@components/BottomNavigation/BottomNavBar'
import NavBar from '@components/NavBar/NavBar'
function CreateAccount() {
    return(
        <>
            <NavBar />
            <RegForm/>
            <BottomNavBar />
        </>
    )
}

export default CreateAccount;