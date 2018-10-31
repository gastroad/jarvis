import React, { useContext } from "react";
import Stopwatch from "../components/StopWatch/StopWatch";
import { Context } from "../Context/Context";
import If from "../components/If";
export function Sub(props) {
	const context = useContext(Context);
	if (!context.state.shuffleMember.length) {
		props.history.goBack();
	}
	function next(m, s) {
		let time = context.state.times;
		time.push(`${m}:${s}`);
		context.actions.setTimes(time);
		if (context.state.number + 1 == context.state.shuffleMember.length) {
			context.actions.setNumber(0);
			props.history.push("/main");
			return;
		}
		context.actions.setNumber(context.state.number + 1);
	}

	return (
		<div id={"main"}>
			{context.state.shuffleMember.map((member, index) => {
				return (
					<div key={index}>
						<If condition={context.state.number === index}>
							<Stopwatch member={member} next={next} />
						</If>
					</div>
				);
			})}
		</div>
	);
}
