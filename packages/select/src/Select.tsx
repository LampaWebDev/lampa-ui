import { Control } from './Select.control';
import { Option } from './Select.option';
import { Root } from './Select.root';
import { NAMES, PACKAGE_NAME } from './constants';

const POSSIBLE_CHILDREN_NAMES = [`${NAMES.PREFIX}.${NAMES.COMPONENTS.ROOT}`];

type SelectComponents = {
	[NAMES.COMPONENTS.ROOT]: typeof Root;
	[NAMES.COMPONENTS.OPTION]: typeof Option;
	[NAMES.COMPONENTS.CONTROL]: typeof Control;
};

export interface SelectProps {
	children: React.ReactNode;
}

export const Select: React.FC<SelectProps> & SelectComponents = ({ children }) => (
	<div>{children}</div>
);

Select.propTypes = {
	children: (props, propsKey, componentName) => {
		const displayName = props?.[propsKey]?.type?.displayName;

		if (!displayName || !POSSIBLE_CHILDREN_NAMES.includes(displayName)) {
			throw new Error(
				`${PACKAGE_NAME}: component "${componentName}" must have as children ${POSSIBLE_CHILDREN_NAMES.join(
					' or '
				)} component`
			);
		}

		return null;
	},
};

Select.displayName = NAMES.PREFIX;

/* Root */
Select.Root = Root;
Select.Root.displayName = `${NAMES.PREFIX}.${NAMES.COMPONENTS.ROOT}`;

/* Option */
Select.Option = Option;
Select.Option.displayName = `${NAMES.PREFIX}.${NAMES.COMPONENTS.OPTION}`;

/* Control */
Select.Control = Control;
Select.Control.displayName = `${NAMES.PREFIX}.${NAMES.COMPONENTS.CONTROL}`;
