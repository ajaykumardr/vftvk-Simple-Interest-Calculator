function compute()
{
    p = document.getElementById("principal").value;
    t = document.getElementById("years").value;
    r = document.getElementById("rate").value;

    si = (p*t*r)/100;

    var template =
	'<p>If you deposit' + " " + '<mark>' + p + '</mark>' + "," + '</p>' + 
	'<p>at an interest rate of'  + " " + '<mark>' + r + '% </mark>' + '</p>' +
    '<p>You will recieve an amount of' + " " + '<mark>' + si + '</mark>' + "," + '</p>' + 
    '<p>in the year' + " " + '<mark>'+ (new Date().getFullYear() + parseInt(t)) + '</mark>' + "."+ '</p>';

    document.getElementById("result").innerHTML = template;
}

function show_value(value) {
    document.getElementById("slider_value").innerHTML = value + "%";
}
        
