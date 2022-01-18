import './App.css';
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import UsersPage from "./pages/UsersPage/UsersPage";
import UserInfo from "./pages/UserInfo/UserInfo";
import UserRepInfo from "./pages/UserRepInfo/UserRepInfo";
import Header from "./components/Header/Header";
import SearchUser from "./components/SearchUser/SearchUser";
import SearchRep from "./components/SearchRep/SearchRep";
import SearchRepInfo from "./pages/SearchRepInfo/SearchRepInfo";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className='main-block'>
                <Header />
                <div className='main-sub-block'>
                    <Routes>
                        <Route path={'/'} element={<Main/>}/>
                        <Route path={`/search/:name`} element={<UsersPage/>}/>
                        <Route path={`/user-info/:name`} element={<UserInfo/>}/>
                        <Route path={`/user-repositories/:name/:title`} element={<UserRepInfo />} />
                        <Route path={`/search-user`} element={<SearchUser/>} />
                        <Route path={`/search-rep`} element={<SearchRep/>} />
                        <Route path={`/search-rep-info/:repos`} element={<SearchRepInfo/>} />
                    </Routes>
                </div>
            <Footer />
        </div>
    );
}

export default App;
