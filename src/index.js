import estimatorHelper from '../src/estimatorHelper';

let data = {
    region: {}
}

$('#myform').submit(function() {
    // get all the inputs into an array.
    var $inputs = $('#myform :input');

    // not sure if you wanted this, but I thought I'd add it.
    // get an associative array of just the values.
    var values = {};
    $inputs.each(function() {
        if ($(this).val()) {
        	values[this.name] = $(this).val();
        }
    });
    delete values.register;
    
    data = {
        ...data,
        ...values
    }
    estimatorHelper(data)
});
