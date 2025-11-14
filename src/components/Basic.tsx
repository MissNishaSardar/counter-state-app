"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";

const Basic = () => {
	const [count, setCount] = useState(0);

	const plusFunc = () => {
		setCount(count + 1);
	};
	const minusFunc = () => {
		setCount(count - 1);
	};

	return (
		<>
			<section className="grid place-items-center space-y-4">
				<div className="text-xl">
					Counter Value: <span className="">{count}</span>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<Button
						className="cursor-pointer"
						onClick={plusFunc}>
						Plus +1
						<CirclePlus />
					</Button>

					<Button
						className="cursor-pointer"
						variant={"destructive"}
						onClick={minusFunc}>
						Minus -1
						<CircleMinus />
					</Button>
				</div>
			</section>
		</>
	);
};

export default Basic;
