import estimatorHelper from './estimatorHelper';

let data = {
	region: {}
};
$(document).ready(() => {
	$('#myform').submit(() => {
		const $inputs = $('#myform :input');

		const values = {};
		$inputs.each(() => {
			if ($(this).val()) {
				values[this.name] = $(this).val();
			}
		});
		delete values.register;

		data = {
			...data,
			...values
		};
		estimatorHelper(data);
	});
});
