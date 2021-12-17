import React, { useState } from 'react';
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowRight,
	ArrowForward,
} from './HeroElm';
import { Button } from '../ButtonElm';
import Video from '../../videos/video.mp4';

const HeroSection = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};
	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type="video/mp4" />
			</HeroBg>
			<HeroContent>
				<HeroH1>Virtual banking made easy</HeroH1>
				<HeroP>
					Sign up for a new account today and recieve $250 in credit towards
					your next payment
				</HeroP>
				<HeroBtnWrapper>
					<Button
						to="signup"
						onMouseEnter={onHover}
						onMouseLeave={onHover}
						dark={true}
						primary={true}
					>
						Get started {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
