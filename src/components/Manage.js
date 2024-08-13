import { Routes, Route } from "react-router-dom";
import UserIndex from "./users/UserIndex";

const Manage = () => {

    return (
        <>
            <Routes>
                <Route path="/userIndex" element={<UserIndex />} exact/>
            </Routes>
        </>
    )
}

export default Manage;    