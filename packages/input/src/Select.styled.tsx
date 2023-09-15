import '@utils/styles.scss';

import { Select } from './Select';

export const SelectStyled = () => (
	<Select>
		<Select.Root>
			<Select.Control className="bg-red-50 border-red-100 border-2 outline-none" />
			<Select.Option>Option 1</Select.Option>
			<Select.Option>Option 2</Select.Option>
			<Select.Root>
				<Select.Option>Hello</Select.Option>
			</Select.Root>
		</Select.Root>
	</Select>
);
