import { forwardRef } from 'react';

import { Option } from './Select.option';
import { NAMES, PACKAGE_NAME } from './constants';

const POSSIBLE_CHILDREN_NAMES = [`${NAMES.PREFIX}.${NAMES.COMPONENTS.OPTION}`];

export interface SelectRootProps extends Omit<React.HTMLProps<HTMLElement>, 'children'> {
	as?: keyof HTMLElementTagNameMap;
	children: ReturnType<typeof Option>;
}

export const Root = forwardRef<HTMLElement, SelectRootProps>(({ as, children, ...props }, ref) => {
	/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
	const Element = (as || 'div') as any;

	return (
		<Element {...props} ref={ref}>
			{children}
		</Element>
	);
});

Root.propTypes = {
	children: (props, propsKey, componentName) => {
		const children = props?.[propsKey];

		if (!children) {
			throw new Error(
				`${PACKAGE_NAME}: component "${componentName}" must have as children ${POSSIBLE_CHILDREN_NAMES.join(
					' or '
				)} component`
			);
		}

		if (Array.isArray(children)) {
			const isAllChilrenAreValid = children.every((ch) =>
				POSSIBLE_CHILDREN_NAMES.includes(ch?.type?.displayName)
			);

			if (isAllChilrenAreValid) return null;

			throw new Error(
				`${PACKAGE_NAME}: component "${componentName}" must have as children ${POSSIBLE_CHILDREN_NAMES.join(
					' or '
				)} component`
			);
		}

		const displayName = children.type?.displayName;

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
