'use client';
import Link from 'next/link';

import clsx from 'clsx';

const variantStyles: any = {
	kbdark: 'rounded-lg bg-zinc-700 py-1 px-3 text-white hover:bg-zinc-600 active:bg-zinc-800',
	kbyellow:
		'rounded-lg bg-amber-500 py-1 px-3 text-zinc-900 hover:bg-amber-400 active:bg-amber-600',
	kbgray: 'rounded-lg bg-teal-500 py-1 px-3 text-white hover:bg-teal-400 active:bg-teal-600',
	outline:
		'rounded-lg py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 hover:bg-gray-50 active:bg-gray-100',
	kbwhite:
		'rounded-lg text-gray-700 border border-gray-200 from-white to-gray-100 hover:shadow-inner px-4 py-2 font-semibold bg-gradient-to-b active:from-gray-100 active:to-gray-200 ',
};

export function Button({
	variant = 'kbdark',
	className,
	children,
	...props
}: any) {
	let Component = props.href ? Link : 'button';

	className = clsx(
		'inline-flex gap-0.5 justify-center overflow-hidden font-medium transition ',
		variantStyles[variant],
		className
	);

	return (
		<Component className={className} {...props}>
			{children}
		</Component>
	);
}
