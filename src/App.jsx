import { BrowserRouter, Routes, Route } from 'react-router';

import SideBar from './components/SideBar';

import Home from './pages/Home';
import Information from './pages/Information';
import Community from './pages/Community';
import Project from './pages/Project';

import NotFound from './errors/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <SideBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/information" element={<Information />} />
                <Route path="/community" element={<Community />} />
                <Route path="/project" element={<Project />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
