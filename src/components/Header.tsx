import Link from 'next/link';
import { ButtonAuthenticate } from './ButtonAuthenticate';
import { Avatar } from './Avatar';

export const Header = () => {
	return (
		<header className='w-full'>
			<div className='container flex items-center  max-w-7xl h-24 mx-auto'>
				<div className='flex-1'>
					<Link href={'/'}>Show Me</Link>
				</div>

				<div className='flex w-20 justify-between'>
					<Avatar width={40} height={40} />
					<ButtonAuthenticate />
				</div>
			</div>
		</header>
	);
};
