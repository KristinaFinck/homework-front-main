export type InputPropsType = {
	currentText: string // протипизировала
	setCurrentText: (currentText: string)=> void // протипизировала
};

export const Input = ({currentText, setCurrentText}: InputPropsType) => {
	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentText(event.target.value);
	};

	 return (
	  <input id={'hw04-input'} type="text" value={currentText} onChange={onChangeHandler} />
	);
};
