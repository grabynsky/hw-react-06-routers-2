import React from 'react';
import HeaderComponent from "../components/header/HeaderComponent";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <HeaderComponent/>
            <Outlet/>
        </>
    );
};

export default MainLayout;