import { useState } from 'react';

export const Counter = () => {
	const [state, setState] = useState(0);

	const increment = () => setState((c) => c + 1);

	return (
		<button type="button" onClick={increment}>
			{state}
		</button>
	);
};
