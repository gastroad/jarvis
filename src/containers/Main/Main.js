import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import "./index.css";

const HeroBanner = ({ image, min, max, children }) => (
	<div className="hero-container">
		<Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
			<div className="hero-image" style={{ backgroundImage: `${image}` }} />
		</Parallax>
		<div className="hero-children">{children}</div>
	</div>
);

export default class Main extends React.Component {
	render() {
		const parent = { width: `2000px`, height: `1500px` };
		return (
	
				<main>
					<HeroBanner
						min={"-20%"}
						max={"20%"}
						image="url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner.jpg)"
					>
						<h1>Parallax</h1>
					</HeroBanner>
					<div className="hero-container">
						<Parallax offsetYMin={"-100%"} offsetYMax={"100%"} slowerScrollRate>
							<img src={"../../../img/1.jpg"} className="hero-image" />
						</Parallax>
						<div className="hero-children">{<h1>hello</h1>}</div>
					</div>
					<div className="hero-container">
						<Parallax offsetYMin={"-100%"} offsetYMax={"100%"} slowerScrollRate>
							<img src={"../../../img/2.jpg"} className="hero-image" />
						</Parallax>
						<div className="hero-children">{<h1>hello</h1>}</div>
					</div>

					<div className="hero-container">
						<Parallax offsetYMin={"-100%"} offsetYMax={"100%"} slowerScrollRate>
							<img src={"../../../img/3.jpg"} className="hero-image" />
						</Parallax>
						<div className="hero-children ">{<h1>hello</h1>}</div>
					</div>
					<div className="hero-container">
						<Parallax offsetYMin={"-100%"} offsetYMax={"100%"} slowerScrollRate>
							<img src={"../../../img/4.jpg"} className="hero-image" />
						</Parallax>
						<div className="hero-children ">{<h1>hello</h1>}</div>
					</div>
					<div className="hero-container">
						<Parallax offsetYMin={"-100%"} offsetYMax={"100%"} slowerScrollRate>
							<img src={"../../../img/5.png"} className="hero-image" />
						</Parallax>
						<div className="hero-children">{<h1>hello</h1>}</div>
					</div>
				</main>
			
		);
	}
}
