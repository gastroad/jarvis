import React, { useEffect, useContext } from "react";
import { Context } from "../Context/Context";
import If from "../components/If";
export function Main(props) {
	const context = useContext(Context);
	useEffect(() => {});

	function shuffleRandom() {
		const { member } = context.state;
		const count = member.length - 1;
		var newMember = [];
		var ar = [];
		var time = [];
		var temp, rnum;
		if (!localStorage.getItem("data")) {
			localStorage.setItem("data", context.member);
		}
		const lastData = localStorage.getItem("data").split(",");
		for (var i = 0; i <= count; i++) {
			ar.push(i);
		}

		for (var j = 0; j < ar.length; j++) {
			rnum = Math.floor(Math.random() * count);
			temp = ar[j];
			ar[j] = ar[rnum];
			ar[rnum] = temp;
		}
		for (var k of ar) {
			newMember.push(member[k]);
			time.push(0);
		}

		for (i = 0; i < count; i++) {
			if (lastData[i] == newMember[i]) {
				return shuffleRandom();
			}
		}
		return newMember;
	}

	function scrumStart() {
		const data = shuffleRandom();
		localStorage.setItem("data", data);
		context.actions.setShuffleMember({ data });
		props.history.push(`/sub`);
	}
	const { member, shuffleMember } = context.state;
	return (
		<div id={"main"}>
			<h1>Jarvis</h1>
			<If condition={!context.state.shuffleMember.length}>
				{member.map((content, index) => {
					return (
						<p key={index} className={`member-list slidein`}>
							{content}
							<span style={{ marginLeft: "5px", color: "gray" }}>
								{context.state.times[index]}
							</span>
						</p>
					);
				})}
			</If>
			<If condition={context.state.shuffleMember.length}>
				{shuffleMember.map((content, index) => {
					return (
						<p key={index} className={`member-list slidein`}>
							{content}
							<span style={{ marginLeft: "5px", color: "gray" }}>
								{context.state.times[index]}
							</span>
						</p>
					);
				})}
			</If>
			<img src={"../img/S1.png"} style={{ width: "200px" }} />
			<button onClick={scrumStart} className={"btn hover"}>
				start
			</button>
		</div>
	);
}
