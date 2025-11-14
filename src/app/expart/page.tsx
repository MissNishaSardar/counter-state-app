import ExpartCounter from "@/components/ExpartCounter";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Expart | Counter State App",
	description: "Expart Counter App",
};

const page = () => {
	return (
		<>
			<section className="grid h-[80dvh] place-items-center">
				<Card className="w-xs gap-4 shadow-xl">
					<CardHeader>
						<CardTitle className="text-center text-2xl font-semibold">
							Expart Counter App
						</CardTitle>
					</CardHeader>
					<CardContent>
						<ExpartCounter />
					</CardContent>
				</Card>
			</section>
		</>
	);
};

export default page;
