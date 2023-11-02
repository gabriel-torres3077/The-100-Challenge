import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import MealGenerator from "./pages/projects/MealGenerator";
import Projects from "./pages/projects_hub";

function MainRoutes(){
    return(
        <div className="container-main">
            <Header />
            <div className="content-main">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/dashboard" element={<Dashboard />}/>
                    <Route path="/project" element={<Projects />}>
                        <Route path="/project/dada" element={<MealGenerator />}/>
                    </Route>
                </Routes>
            </div>
        </div>
    )
}
export default MainRoutes;