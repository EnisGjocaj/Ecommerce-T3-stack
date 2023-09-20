import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = {
	small?: boolean;
	green?: boolean;
	black?: boolean;
	className?: string;
}  & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({ 
		small = false,
	    green = false,
	    black = false,
	    className="",
	    children,
	    ...props
	}: ButtonProps ) {

		const sizeClasses = small ? "px-2 py-1" : "px-4 py-2 font-bold";
		const colorClasses = green 
			? "bg-green-900 hover:bg-green-800 focus-visible:bg-green-800": black ? "bg-black hover:bg-gray-800 focus-visible:bg-gray-800"
    		: "bg-blue-500 hover:bg-blue-400 focus-visible:bg-blue-400";

	return (
		<button 
			className={`rounded-full text-white transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${sizeClasses} ${colorClasses} ${className}`} {...props} >
				{children}
		</button>
	);
}