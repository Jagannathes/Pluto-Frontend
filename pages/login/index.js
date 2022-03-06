import Login from "@components/Login/Login";
import BottomNavBar from '@components/BottomNavigation/BottomNavBar';
import NavBar from '@components/NavBar/NavBar';
function createAccount() {
    return(
        <>
            <NavBar />
            <Login/>
            <BottomNavBar />
        </>
    )
}

export default createAccount;