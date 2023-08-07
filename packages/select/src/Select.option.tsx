export interface SelectOptionProps {
	children: React.ReactNode | Array<React.ReactNode>;
}

export const Option: React.FC<SelectOptionProps> = ({ children }) => <option>{children}</option>;
