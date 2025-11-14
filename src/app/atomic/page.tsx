import GlobalCounter from "@/components/GlobalCounter";
import GlobalCounterButton from "@/components/GlobalCounterButton";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Atomic | Counter State App",
	description: "Atomic Counter App",
};

const page = () => {
	return (
		<>
			<section className="grid h-[80dvh] place-items-center">
				<Card className="w-xs gap-4 shadow-xl">
					<CardHeader>
						<CardTitle className="text-center text-2xl font-semibold">
							Atomic Counter App
						</CardTitle>
					</CardHeader>
					<CardContent className="grid gap-4">
						<GlobalCounter />
						<GlobalCounterButton />
					</CardContent>
				</Card>
			</section>
		</>
	);
};

export default page;
