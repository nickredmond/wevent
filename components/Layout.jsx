import { Header } from "./Header";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main style={{width: '90vw', margin: '0 auto'}}>{children}</main>
        </div>
    );
};
export default Layout;