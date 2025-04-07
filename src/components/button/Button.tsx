import { ReactNode } from "react"

type ButtonProps = {
	children: ReactNode;
	type?: "submit" | "reset" | "button";
	className?: string;
	disabled?: boolean;
	onClick?: () => void;
}

function Button({
	children,
	className = "button",
	type = "submit",
	disabled = false,
	onClick,
	...restProps
}: ButtonProps) {
	return (
		<button
			className={className}
			type={type}
			disabled={disabled}
			onClick={onClick}
			{...restProps}
		>
			{children}
		</button>);
}

export { Button }
