import "../styles/global.scss";
import { Header } from "../components/Header";
import { Home } from "./Home";


export default function App() {
    return (
        <div>
            <Header />
            <Home />
        </div>
    );
}