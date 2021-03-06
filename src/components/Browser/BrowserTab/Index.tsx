import React, { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import type { IconType } from 'react-icons/lib';

type Props = {
	children: string;
	icon: IconType;
	color: string;
};

const BrowserTab: React.FC<Props> = ({ children, icon, color, active }) => {
	return (
		<Tab as={Fragment}>
			{({ selected }) => (
				<button
					className={`rounded-t-lg p-3 flex-1 flex items-center justify-start text-zinc-300 overflow-hidden transition focus:outline-none focus-visible:ring focus-visible:ring-cyan-500 z-30 ${
						selected ? 'bg-zinc-700/50' : 'hover:bg-zinc-700/25'
					}`}
				>
					<div className={`text-${color}-500 mr-1 sm:mr-2`}>
						{React.createElement(icon, { size: 24 })}
					</div>
					{children}
				</button>
			)}
		</Tab>
	);
};

export default BrowserTab;
