import { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut, Menu, Search } from "lucide-react";
import { useAuthStore } from "../store/authUser";
import { useContentStore } from "../store/content";


const Navbar = () => {
	const stripePromise=import.meta.env.VITE_STRIPE;
	const server=import.meta.env.VITE_SERVER;

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { user, logout } = useAuthStore();

	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

	const { setContentType } = useContentStore();

	const [visible,setVisible]=useState(false);
	const handleBillingClick = async () => {
		const stripe = await stripePromise;
	  
		const response = await fetch(`${server}/create-checkout-session`, {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		});
	  
		if (response.ok) {
			const session = await response.json();
			// Redirect to Stripe Checkout
			window.location.href = session.url; }
	  
	  
		else {
		  // Handle any errors
		  console.error("Failed to create checkout session");
		}
	  };

	return (
		<header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>
			<div className='flex items-center gap-10 z-50'>
				<Link to='/'>
					<img src='/netflix-logo.png' alt='Netflix Logo' className='w-32 sm:w-40' />
				</Link>

				{/* desktop navbar items */}
				<div className='hidden sm:flex gap-2 items-center'>
					<Link to='/' className='hover:underline' onClick={() => setContentType("movie")}>
						Movies
					</Link>
					<Link to='/' className='hover:underline' onClick={() => setContentType("tv")}>
						Tv Shows
					</Link>
					<Link to='/history' className='hover:underline'>
						Search History
					</Link>
				</div>
			</div>

			<div className='flex gap-2 items-center z-50'>
				<Link to={"/search"}>
					<Search className='size-6 cursor-pointer' />
				</Link>
				<div className="relative inline-block">
					<img
						src={user.image}
						alt="Avatar"
						className="h-8 w-8 rounded cursor-pointer"
						onClick={() => {
						setVisible(!visible);
						}}
					/>
					<div className={`absolute right-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg py-2 ${
						visible ? 'block' : 'hidden'
						}`}>
						<p className="px-4 py-2 text-white cursor-pointer hover:bg-black hover:text-red-700" onClick={()=>{handleBillingClick();}}>Billing</p>
					</div>
				</div>
				<LogOut className="size-6 cursor-pointer" onClick={logout} />
				<div className='sm:hidden'>
					<Menu className='size-6 cursor-pointer' onClick={toggleMobileMenu} />
				</div>
			</div>

			{/* mobile navbar items */}
			{isMobileMenuOpen && (
				<div className='w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800'>
					<Link to={"/"} className='block hover:underline p-2' onClick={toggleMobileMenu}>
						Movies
					</Link>
					<Link to={"/"} className='block hover:underline p-2' onClick={toggleMobileMenu}>
						Tv Shows
					</Link>
					<Link to={"/history"} className='block hover:underline p-2' onClick={toggleMobileMenu}>
						Search History
					</Link>
				</div>
			)}
		</header>
	);
};
export default Navbar;
