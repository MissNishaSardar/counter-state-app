"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";

const ExpartCounter = () => {
	const [count, setCount] = useState(0);

	const plusOne = () => {
		if (count <= 99) {
			setCount(count + 1);
		}
	};
	const plusTen = () => {
		if (count <= 90) {
			setCount(count + 10);
		}
	};
	const minusOne = () => {
		if (count >= 1) {
			setCount(count - 1);
		}
	};
	const minusTen = () => {
		if (count >= 10) {
			setCount(count - 10);
		}
	};

	return (
		<section className="grid place-items-center space-y-4">
			<div className="text-xl">
				Counter Value: <span className="">{count}</span>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<Button
					className="cursor-pointer"
					onClick={plusOne}
					disabled={count >= 100}>
					<CirclePlus />
					Plus +1
				</Button>
				<Button
					className="cursor-pointer"
					onClick={plusTen}
					disabled={count >= 91}>
					<CirclePlus />
					Plus +10
				</Button>

				<Button
					className="cursor-pointer"
					variant={"destructive"}
					onClick={minusOne}
					disabled={count <= 0}>
					<CircleMinus />
					Minus -1
				</Button>
				<Button
					className="cursor-pointer"
					variant={"destructive"}
					onClick={minusTen}
					disabled={count <= 9}>
					<CircleMinus />
					Minus -10
				</Button>
			</div>
		</section>
	);
};

export default ExpartCounter;
