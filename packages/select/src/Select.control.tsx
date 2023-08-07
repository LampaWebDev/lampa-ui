import { forwardRef } from 'react';

export interface SelectControlProps extends Omit<React.HTMLProps<HTMLElement>, 'children'> {}

export const Control = forwardRef<HTMLInputElement, SelectControlProps>(({ ...props }, ref) => (
	<input {...props} ref={ref} />
));
