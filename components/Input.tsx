'use client';
import clsx from 'clsx';
import type {UseFormRegisterReturn} from 'react-hook-form';

interface InputProps {
	label?: string;
	name: string;
	type: string;
	className?: string;
	placeholder?: string;
	register?: UseFormRegisterReturn;
	required?: boolean;
	autoCorrect?: string;
	autoCapitalize?: string;
	autoComplete?: string;
}

export const Input = ({
	name,
	label,
	type = 'text',
	className,
	placeholder,
	register,
	required = false,
	autoCorrect = 'off',
	autoCapitalize = 'none',
	autoComplete,
}: InputProps) => {
	return (
		<div>
			<label className="mb-1 block text-sm">{label}</label>
			<input
				id={name}
				type={type}
				required={required}
				placeholder={placeholder}
				autoCorrect={autoCorrect}
				autoCapitalize={autoCapitalize}
				autoComplete={autoComplete}
				{...register}
				className={clsx(
					'rounded-lg px-3 h-10 w-full border border-gray-200 focus:ring-1 focus:ring-inset outline-none focus:ring-indigo-200 focus:shadow-inner shadow-inner placeholder-gray-400 text-sm',
					className
				)}
			/>
		</div>
	);
};
