'use-client'
import LoginPage from './login/page';
import PageFAQ from '@/FAQ/page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function Home() {
    return (
        // shows the login page for now
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/FAQ" element={<PageFAQ/>}/>
                </Routes>
            </Router>
        </div>
    )
}