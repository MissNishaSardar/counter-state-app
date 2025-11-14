"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";

const Advanced = () => {
	const [count, setCount] = useState(0);

	const plusOne = () => {
		setCount(count + 1);
	};
	const plusTen = () => {
		setCount(count + 10);
	};
	const minusOne = () => {
		setCount(count - 1);
	};
	const minusTen = () => {
		setCount(count - 10);
	};

	return (
		<section className="grid place-items-center space-y-4">
			<div className="text-xl">
				Counter Value: <span className="">{count}</span>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<Button
					className="cursor-pointer"
					onClick={plusOne}>
					<CirclePlus />
					Plus +1
				</Button>
				<Button
					className="cursor-pointer"
					onClick={plusTen}>
					<CirclePlus />
					Plus +10
				</Button>

				<Button
					className="cursor-pointer"
					variant={"destructive"}
					onClick={minusOne}>
					<CircleMinus />
					Minus -1
				</Button>
				<Button
					className="cursor-pointer"
					variant={"destructive"}
					onClick={minusTen}>
					<CircleMinus />
					Minus -10
				</Button>
			</div>
		</section>
	);
};

export default Advanced;
