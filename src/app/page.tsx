import Basic from "@/components/Basic";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Basic | Counter State App",
	description: "Basic Counter App",
};

const page = () => {
	return (
		<section className="grid h-[80dvh] place-items-center">
			<Card className="w-xs gap-4 shadow-xl">
				<CardHeader>
					<CardTitle className="text-center text-2xl font-semibold">
						Basic Counter App
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Basic />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
