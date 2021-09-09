import { useState, useEffect } from "react";

export const useHeaderShadow = () => {
	const [shadow, setShadow] = useState(false);
	const [animate, setAnimate] = useState(false);

	const handleScroll = () => {
		if (document.documentElement.scrollTop !== 0) {
			setShadow(true);
		} else setShadow(false);
	};

	useEffect(() => {
		window.onscroll = () => handleScroll();
		return () => (window.onscroll = null);
	}, []);

	useEffect(() => {
		if (shadow) setAnimate(true);
	}, [shadow]);

	return [shadow, animate];
};
