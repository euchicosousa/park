import { Link } from "@remix-run/react";
import { MetaFunction } from "@vercel/remix";
import { BeerIcon, BikeIcon, BookIcon, MartiniIcon } from "lucide-react";

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
		<div className="w-full h-screen  flex flex-col">
			<div
				className="bg-sabor bg-cover bg-center w-full grow shrink-0 "
				style={{ backgroundImage: "url(./casa.jpg)" }}
			></div>
			<div
				className="bg-familia grow-0 shrink-0 px-4 bg-cover bg-center"
				style={{ backgroundImage: "url(./bg-park.png)" }}
			>
				<div className="bg-familia border-4 border-sobral w-32 p-4 rounded-full mx-auto -mt-16">
					<img src="./logo-park.png" alt="" />
				</div>
				<div className="flex flex-col mt-8 gap-2 max-w-sm mx-auto">
					<Link
						to="/delivery"
						target="_blank"
						rel="noreferrer"
						className="link"
					>
						<BikeIcon className="size-8" />
						<span>Pedir Delivery</span>
					</Link>
					<Link
						to="/cardapio"
						target="_blank"
						rel="noreferrer"
						className="link"
					>
						<BookIcon className="size-8" />
						<span>Cardápio Completo</span>
					</Link>
					<Link
						to="/happyhour"
						target="_blank"
						rel="noreferrer"
						className="link"
					>
						<BeerIcon className="size-8" />
						<span>Happy Hour</span>
					</Link>

					<Link
						to="/eventos"
						// to="https://wa.me/558821440310?text=Quero realizar um evento no PARK."
						target="_blank"
						rel="noreferrer"
						className="link"
					>
						{/* <CakeIcon className="size-8" /> */}
						<MartiniIcon className="size-8" />
						Realize seu evento conosco
					</Link>
				</div>
				<div className="flex gap-4 my-8 text-sm text-sobral justify-center">
					<a
						href="https://instagram.com/parksobral"
						className="flex gap-2 font-bold items-center"
						target="_blank"
						rel="noreferrer"
					>
						<span>Instagram</span>
					</a>
					<a
						href="https://maps.app.goo.gl/PAUtxtJBSXKBLFp39"
						className="flex gap-2 font-bold items-center"
						target="_blank"
						rel="noreferrer"
					>
						{/* <MapPinIcon className="size-6" /> */}
						<span>Como chegar</span>
					</a>
					<a
						href="https://wa.me/558821440310"
						className="flex gap-2 font-bold items-center"
						target="_blank"
						rel="noreferrer"
					>
						<span>WhatsApp</span>
					</a>
				</div>
				<div className="text-xs text-sobral opacity-50 pb-8  text-center">
					© {new Date().getFullYear()} PARK - Sua aventura culinária
					em Sobral
				</div>
			</div>
		</div>
	);
}
