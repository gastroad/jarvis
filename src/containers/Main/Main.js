import React from "react";
import "./index.css";

export default class Main extends React.Component {
	render() {
		return (
			<div>
				<select>
					<option>프</option>
					<option>뱍</option>
				</select>
				<select>
					<option>node</option>
					<option>js</option>
					<option>html</option>
				</select>
				<select>
					<option>react</option>
					<option>redux</option>
				</select>
			</div>
		);
	}
}
