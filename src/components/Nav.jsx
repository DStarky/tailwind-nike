import { headerLogo } from 'src/assets/images';
import { hamburger } from 'src/assets/icons';
import { navLinks } from 'src/constants';

const Nav = () => {
	return (
		<header className='padding-x py-8 absolute z-10 w-full'>
			<nav className='flex justify-between items-center max-container'>
				<a href='/'>
					<img
						src={headerLogo}
						alt='logo'
						width={130}
						height={29}
					/>
				</a>
				<ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
					{navLinks.map(item => {
						return (
							<li key={item.label}>
								<a
									href={item.href}
									className='font-montserrat leading-normal text-lg text-slate-gray'>
									{item.label}
								</a>
							</li>
						);
					})}
				</ul>
				<div className='lg:hidden'>
					<img
						src={hamburger}
						alt='menu'
						width={25}
						height={25}
					/>
				</div>
			</nav>
		</header>
	);
};
export default Nav;
