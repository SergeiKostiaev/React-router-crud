import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EditPost from "./Components/EditPost";
import Posts from "./Components/Posts";
import CreateButton from "./Components/CreateButton";
import EditButton from "./Components/EditButton";

function App() {
    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path="/posts/:id" element={<EditPost Footer={EditButton}/>}/>
                    <Route path="/posts/new" element={<EditPost Footer={CreateButton}/>}/>
                    <Route path="*" element={<Posts/>}/>
                </Routes>


            </BrowserRouter>
        </>
    );
}

export default App;
