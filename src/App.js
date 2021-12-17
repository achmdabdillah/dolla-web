import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/SigninPage';

function App() {
	return (
		<Router>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/signin" element={<SigninPage />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
