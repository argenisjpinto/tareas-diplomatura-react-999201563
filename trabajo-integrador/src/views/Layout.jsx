import { Outlet } from "react-router-dom";
import { Header } from "../components/Header"
import { Footer } from '../components/Footer'
import "../styles/Home.css";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export { Layout }