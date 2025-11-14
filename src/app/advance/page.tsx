import Advanced from "@/components/Advanced";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Advance | Counter State App",
	description: "Advanced Counter App",
};

const page = () => {
	return (
		<>
			<section className="grid h-[80dvh] place-items-center">
				<Card className="w-xs gap-4 shadow-xl">
					<CardHeader>
						<CardTitle className="text-center text-2xl font-semibold">
							Advance Counter App
						</CardTitle>
					</CardHeader>
					<CardContent>
						<Advanced />
					</CardContent>
				</Card>
			</section>
		</>
	);
};

export default page;
