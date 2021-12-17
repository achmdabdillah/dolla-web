import React, { useState } from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/Hero';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/Info/Data';
import InfoSection from '../components/Info/Index';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
			<Services />
			<InfoSection {...homeObjThree} />
			<Footer />
		</>
	);
};

export default Home;
