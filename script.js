function compute()
{
    p = document.getElementById("principal").value;
    
    if(p>0)
    {
        t = document.getElementById("years").value;
        r = document.getElementById("rate").value;

        si = (p*t*r)/100;

        var template =
	    '<p>If you deposit' + " " + '<mark>' + p + '</mark>' + "," + '</p>' + 
	    '<p>at an interest rate of'  + " " + '<mark>' + r + '% </mark>' + '</p>' +
        '<p>You will recieve an amount of' + " " + '<mark>' + si + '</mark>' + "," + '</p>' + 
        '<p>in the year' + " " + '<mark>'+ (new Date().getFullYear() + parseInt(t)) + '</mark>' + "."+ '</p>';

        document.getElementById("result").innerHTML = template;

        document.getElementById("result").style.visibility = 'visible';        

    }
    else if (p==0)
    {
        alert('Principal amount cannot be zero');
        document.getElementById("principal").focus();
    }
    else if(p < 0)
    {
        alert('Principal amount cannot be negative');
        document.getElementById("principal").focus();
    }
}

function show_value(value) {
    document.getElementById("slider_value").innerHTML = value + "%";
}
