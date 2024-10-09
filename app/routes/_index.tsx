import type { MetaFunction } from "@remix-run/node";
import {
	BeerIcon,
	BikeIcon,
	BookIcon,
	CakeIcon,
	MapPinIcon,
} from "lucide-react";

import { SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";

export const meta: MetaFunction = () => {
	return [
		{ title: "PARK - Restaurante em Sobral" },
		{
			name: "description",
			content:
				"O PARK é um restaurante familiar em Sobral, oferecendo pratos saborosos, happy hour animado e música ao vivo em um ambiente acolhedor.",
		},
	];
};

export default function Index() {
	return (
		<div className=" h-screen w-screen flex flex-col">
			<div className="h-56 bg-sabor">
				<img src="./casa.jpg" alt="PARK" className="bg-center" />
			</div>
			<div className="bg-familia h-full px-4">
				<div className="bg-familia w-32 p-4 rounded-full mx-auto -mt-16">
					<img src="./logo-park.png" alt="" />
				</div>
				<div className="flex flex-col mt-8 gap-2">
					<a
						href="https://parkchoppsobral.goomer.app/menu"
						target="_blank"
						rel="noreferrer"
						className="link"
					>
						<BikeIcon className="size-8" />
						<span>Pedir Delivery</span>
					</a>
					<a
						href="https://parkchoppsobral.goomer.app/menu"
						target="_blank"
						rel="noreferrer"
						className="link"
					>
						<BookIcon className="size-8" />
						<span>Cardápio Completo</span>
					</a>
					<a
						href="https://parkchoppsobral.goomer.app/menu"
						target="_blank"
						rel="noreferrer"
						className="link"
					>
						<BeerIcon className="size-8" />
						<span>Happy Hour</span>
					</a>

					<a
						href="https://wa.me/558821440310?text=Quero realizar um evento no PARK."
						target="_blank"
						rel="noreferrer"
						className="link"
					>
						<CakeIcon className="size-8" />
						Realize seu evento conosco
					</a>
				</div>
				<div className="flex gap-4 my-8 text-sm text-sobral justify-center">
					<a
						href="https://instagram.com/parksobral"
						className="flex gap-2 font-bold items-center"
						target="_blank"
						rel="noreferrer"
					>
						<SiInstagram className="size-6" />
						<span>Instagram</span>
					</a>
					<a
						href="https://maps.app.goo.gl/PAUtxtJBSXKBLFp39"
						className="flex gap-2 font-bold items-center"
						target="_blank"
						rel="noreferrer"
					>
						<MapPinIcon className="size-6" />
						<span>Como chegar</span>
					</a>
					<a
						href="https://wa.me/558821440310"
						className="flex gap-2 font-bold items-center"
						target="_blank"
						rel="noreferrer"
					>
						<SiWhatsapp className="size-6" />
						<span>WhatsApp</span>
					</a>
				</div>
				<div className="text-xs text-sobral opacity-50  text-center">
					© {new Date().getFullYear()} PARK - Sua aventura culinária
					em Sobral
				</div>
			</div>
		</div>
	);
}
