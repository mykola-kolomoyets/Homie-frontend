import recursiveDiff from 'recursive-diff';
import cloneDeep from 'clone-deep';
import { useState } from 'react';

export const derived = <T extends {}>(derivedFunctions: T) => {
	for (let fun of Object.values(derivedFunctions)) {
		Object.defineProperty(fun, 'isDerived', {
			value: true,
			enumerable: false,
		});
	}
	return derivedFunctions;
};

export const useController = ({
	model,
	controller,
	...rest
}: {
	model: any;
	controller: any;
}) => {
	const [, setCount] = useState(0);

	const control = controller({ model, ...rest });
	const oldControl = { ...control };
	Object.keys(control).forEach((key) => {
		control[key] = function () {
			const oldModel = cloneDeep(model);
			let result = oldControl[key].apply(null, arguments);

			if (oldControl[key].isDerived) {
				return result;
			}

			if (result?.then) {
				result?.then(() => {
					const diff = recursiveDiff.getDiff(oldModel, model);
					if (diff.length > 0) {
						setCount((prev) => {
							return (prev + 1) % Number.MAX_SAFE_INTEGER;
						});
					}
				});
			} else {
				const diff = recursiveDiff.getDiff(oldModel, model);
				if (diff.length > 0) {
					setCount((prev) => {
						return (prev + 1) % Number.MAX_SAFE_INTEGER;
					});
				}
			}
			return result;
		};
	});

	return control;
};
