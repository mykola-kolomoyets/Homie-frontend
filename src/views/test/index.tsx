import { FC, useMemo } from 'react';
import { useController } from '../../utils/hooks/useController';
import { testController } from './test.controller';
import { TestModel } from './test.model';

export const TestComponent: FC = () => {
	const model: TestModel = useMemo(
		() => ({
			count: 0,
		}),
		[]
	);

	const { increase, decrease, getCounter } = useController({
		model,
		controller: testController,
	}) as ReturnType<typeof testController>;

	return (
		<div>
			<button onClick={increase}>+</button>
			<div>
				<h1>{getCounter()}</h1>
			</div>
			<button onClick={decrease}>-</button>
		</div>
	);
};
