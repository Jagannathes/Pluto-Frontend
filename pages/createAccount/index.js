import RegForm from "@components/CreateAccount/RegForm";
import CreateAccount from "@components/CreateAccount/CreateAccount";
import BottomNavBar from '@components/BottomNavigation/BottomNavBar';
import NavBar from '@components/NavBar/NavBar';
function createAccount() {
    return(
        <>
            <NavBar />
            <CreateAccount/>
            {/* <RegForm/> */}
            <BottomNavBar />
        </>
    )
}

export default createAccount;