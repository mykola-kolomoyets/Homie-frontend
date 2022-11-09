import { derived } from '../../utils/hooks/useController';
import { TestModel } from './test.model';

export interface ITestController {
	model: TestModel;
}

export interface TestControllerReturn {
	onMount(): Promise<void>;
	onUnmount(): void;
	increase(): void;
	decrease(): void;
	getCounter: () => number;
}

export const testController = ({
	model,
}: ITestController): TestControllerReturn => {
	async function onMount() {
		console.log('mounted');
	}

	function onUnmount() {
		model.count = 0;
	}

	function increase() {
		model.count++;
	}

	function decrease() {
		model.count--;
	}

	const getCounter = () => model.count;

	return {
		onMount,
		onUnmount,
		increase,
		decrease,
		...derived({
			getCounter,
		}),
	};
};
