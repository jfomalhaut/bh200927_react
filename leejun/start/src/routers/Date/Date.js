import React, { useEffect, useState } from 'react';
import './react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
registerLocale('ko', ko);

const Date2 = () => {
	const [start, setStart] = useState(new Date());
	const [end, setEnd] = useState(new Date());

	const onSubmit = ev => {
		ev.preventDefault();
		console.log(start);
		console.log(end);
	};

	return (
		<div>
			<h1>Date Component</h1>
			<form onSubmit={onSubmit}>
				<label>
					<DatePicker
						selected={start}
						onChange={(date) => setStart(date)}
						locale="ko"
						dateFormat="yyyy-MM-dd"
					/>
					<DatePicker
						selected={end}
						onChange={(date) => setEnd(date)}
						locale="ko"
						dateFormat="yyyy-MM-dd"
					/>
				</label>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default Date2;

product_name,
      sale_price,
      enter_value,
      pr_value,