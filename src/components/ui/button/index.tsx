import {
	DetailedHTMLProps,
	FC,
	HTMLAttributes,
	HTMLProps,
	PropsWithChildren,
	PropsWithoutRef,
	ReactNode,
} from 'react';

interface ButtonProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	name?: string;
	title: string;
	disabled?: boolean;
	leftAddon?: ReactNode;
	rightAddon?: ReactNode;
}

export const Button: FC<ButtonProps> = ({
	name,
	title,
	leftAddon,
	rightAddon,
	disabled,
	...props
}) => (
	<button name={name || title} {...props} disabled={disabled}>
		{title}
	</button>
);
