var state = [];

function navigated() {
    setState({location: window.location.hash});
}

function setState(changes) {
    var component;
    Object.assign(state, changes);
    switch (state.location) {
        // Route for Assignment 3, style 3
        case "#/courses/gui1/assign3/3": {
            component = React.createElement('div', { className: "container" }, React.createElement(GUI1Assign3View3, {}),
            React.createElement("p", {}, 
                React.createElement("a", { href: "http://jigsaw.w3.org/css-validator/check/referer" }, 
                    React.createElement("img", { width: 88, height: 31, src: "http://jigsaw.w3.org/css-validator/images/vcss-blue", alt: "Valid CSS!" }))));
        }; break;
        // Route for Assignment 3, style 2
        case "#/courses/gui1/assign3/2": {
            component = React.createElement('div', { className: "container" }, React.createElement(GUI1Assign3View2, {}),
            React.createElement("p", {}, 
            React.createElement("a", { href: "http://jigsaw.w3.org/css-validator/check/referer" }, 
            React.createElement("img", { width: 88, height: 31, src: "http://jigsaw.w3.org/css-validator/images/vcss-blue", alt: "Valid CSS!" }))));
        }; break;
        // Route for Assignment 3, style 1
        case "#/courses/gui1/assign3": {
            component = React.createElement('div', { className: "container" }, React.createElement(GUI1Assign3View1, {}),
            React.createElement("p", {}, 
            React.createElement("a", { href: "http://jigsaw.w3.org/css-validator/check/referer" }, 
            React.createElement("img", { width: 88, height: 31, src: "http://jigsaw.w3.org/css-validator/images/vcss-blue", alt: "Valid CSS!" }))));
        }; break;
        // Route for Assignment 4
        case "#/courses/gui1/assign4":
        case "/461f2017/hw4": {
            component = React.createElement('div', { className: "container" }, React.createElement(GUI1Assign4, {}),
            React.createElement("p", {}, 
            React.createElement("a", { href: "http://jigsaw.w3.org/css-validator/check/referer" }, 
            React.createElement("img", { width: 88, height: 31, src: "http://jigsaw.w3.org/css-validator/images/vcss-blue", alt: "Valid CSS!" }))));
        }; break;
        // Route for Assignment 5
        case "#/courses/gui1/assign5":
        case "/461f2017/hw5": {
            component = React.createElement('div', { className: "container" }, React.createElement(GUI1Assign5, {}),
            React.createElement("p", {}, 
            React.createElement("a", { href: "http://jigsaw.w3.org/css-validator/check/referer" }, 
            React.createElement("img", { width: 88, height: 31, src: "http://jigsaw.w3.org/css-validator/images/vcss-blue", alt: "Valid CSS!" }))));
        }; break;
        // Route for Midterm 1 home
        case "#/courses/gui1/midterm1": {
            component = React.createElement('div', { className: "container gui-midterm1-container" }, React.createElement(GUI1Midterm1, {}));
        }; break;
        // Route for Midterm 1 form
        case "#/courses/gui1/midterm1/start": {
            component = React.createElement('div', { className: "container gui-midterm1-container" }, React.createElement(GUI1Midterm1Entry, {}));
        }; break;
        // Route for GUI page
        case "#/courses/gui1": {
            component = React.createElement('div', { className: "container" }, React.createElement(GUI1View, {}));
        }; break;
        // Route for Courses page
        case "#/courses": {
            component = React.createElement('div', { className: "container" }, React.createElement(CoursesView, {}));
        }; break;
        // Route for Help page
        case "#/help": {
            component = React.createElement('div', { className: "container" }, React.createElement(HelpView, {}));
        }; break;
        // If no parameters specified, go to home page
        default: {
            component = React.createElement('div', { className: "container" }, React.createElement(HomeView, {}));
        }
    }

    // Render the actual page
    ReactDOM.render(
        React.createElement("div", {className:'root'},
            React.createElement(HeaderComponent, {}), component), document.getElementById('app'));
}

// Detect changes to apply route-based view rendering
window.addEventListener('hashchange', navigated, false);
navigated();

$(document).ready(function() {
    var i = 1;
    $(".input-wrap .btn").click(function(e) {
        i++;
        $(".input-wrap").append("<div class=\"deal-input\"><div class=\"form-element\"><span>Name</span><input type=\"text\" name=\"deal_name[]\" placeholder=\"Name of Deal (i.e. Ford's deal)\"></div><div class=\"form-element\"><span>MSRP</span><input type=\"number\" step=\"0.01\" min=\"0.01\" name=\"msrp[]\" placeholder=\"MSRP Price (Enter only the number i.e. 100000)\"></div><div class=\"form-element\"><span>Discount</span><input type=\"number\" step=\"0.01\" min=\"0.01\" name=\"discount[]\" placeholder=\"Discount Price (Enter only the number i.e. 100000)\"></div><div class=\"form-element\"><span>Rebate</span><input type=\"number\" step=\"0.01\" min=\"0.01\" name=\"rebate[]\" placeholder=\"Rebate Price (Enter only the number i.e. 100000)\"></div><div class=\"form-element\"><span>Down Payment</span><input type=\"number\" step=\"0.01\" min=\"0.01\" name=\"down[]\" placeholder=\"Down Payment (Enter only the number i.e. 100000)\"></div><div class=\"form-element\"><span>Interest Rate</span><input type=\"number\" step=\"0.01\" min=\"0.01\" name=\"interest[]\" placeholder=\"Interest Rate (Enter only the percentage i.e. 5.00)\"></div><div class=\"form-element\"><span>Miles Driven</span><input type=\"number\" step=\"0.01\" min=\"0.01\" name=\"miles_driven[]\" placeholder=\"Number of miles driven (i.e. 100)\"></div><div class=\"form-element\"><span>Additional Miles</span><input type=\"number\" step=\"0.01\" min=\"0.01\" name=\"additional_miles[]\" placeholder=\"Cost per additional mile (i.e. 5.00)\"></div></div>");
    });
});

$(document).ready(function() {
    var i = 1;
    $(".data-input .btn").click(function(e) {
        i++;
        $(".data-input").append("<div class=\"deal-input\"><div class=\"form-element\"><span>Miles per Gallon</span><input type=\"number\" step=\"0.01\" min=\"0.01\" name=\"miles_gallon[]\" placeholder=\"Miles per Gallon (i.e. 20.41)\"></div><div class=\"form-element\"><span>Price</span><input type=\"number\" step=\"0.01\" min=\"0.01\" name=\"price[]\" placeholder=\"Price (i.e. 15.32)\"></div></div>");
    });
});

$("#deal-submit").click(function() {
    var deal_names = $('input[name=deal_name\\[\\]]');
    var deal_msrp = $('input[name=msrp\\[\\]]');
    var deal_discount = $('input[name=discount\\[\\]]');
    var deal_rebate = $('input[name=rebate\\[\\]]');
    var deal_dow = $('input[name=down\\[\\]]');
    var deal_interest = $('input[name=interest\\[\\]]');
    var deal_driven = $('input[name=miles_driven\\[\\]]');
    var deal_additional = $('input[name=additional_miles\\[\\]]');
});

$("#assign4_deal_submit").click(function() {
    var mpg = $('input[name="miles_gallon[]"]');
    var price = $('input[name="price[]"]');
    
    // Validate all MPG inputs
    for (var i = 0; i < mpg.length; i++) {
        if (mpg[i].value.length == 0 || isNaN(+mpg[i].value)) {
            $(mpg[i]).focus();
            alert("Invalid mpg amount for Deal " + (i + 1) + ". Please enter a decimal value (i.e. 20.41)");
            return;
        }
    }

    // Validate all price inputs
    for (var i = 0; i < price.length; i++) {
        if (price[i].value.length == 0 || isNaN(+price[i].value)) {
            $(price[i]).focus();
            alert("Invalid price amount for Deal " + (i + 1) + ". Please enter a decimal value (i.e. 15.32)");
            return;
        }
    }

    // Reset table
    $("#assign4_table thead tr").html("");
    $("#assign4_table tbody tr").html("");

    // Create "Price" header for table
    $("#assign4_table thead tr").append("<th>Price/Fuel Consumption</th>")
    for (var i = 0; i < price.length; i++) {
        $("#assign4_table thead tr").append("<th>Price " + (i + 1) + "</th>");
    }

    // Populate the table with price and mpg data
    for (var i = 0; i < mpg.length; i++) {
        var row = $("<tr><td>Mpg" + (i + 1) + "</td></tr>").appendTo($("#assign4_table"));
        for (var j = 0; j < price.length; j++) {
            $('<td></td>').text("$" + price[j].value + "/mi").appendTo(row); 
        }
    }

    // Scroll to top of screen to show table
    window.scrollTo(0, 0);
});

$(function() {
    if ($(".gui-assign5").length === 1) {
        $(document).on("input", 'input[name="miles_gallon[]"]', function() { validateInput(this); });
        $(document).on("input", 'input[name="price[]"]', function() { validateInput(this); });
    }
})

$("#assign5_deal_submit").click(function() {

    var mpg = $('input[name="miles_gallon[]"]');
    var price = $('input[name="price[]"]');
    
    // Validate all MPG inputs
    for (var i = 0; i < mpg.length; i++) {
        if (mpg[i].value.length == 0 || isNaN(+mpg[i].value)) {
            $(mpg[i]).focus();
            alert("Invalid mpg amount for Deal " + (i + 1) + ". Please enter a decimal value (i.e. 20.41)");
            return;
        }
    }

    // Validate all price inputs
    for (var i = 0; i < price.length; i++) {
        if (price[i].value.length == 0 || isNaN(+price[i].value)) {
            $(price[i]).focus();
            alert("Invalid price amount for Deal " + (i + 1) + ". Please enter a decimal value (i.e. 15.32)");
            return;
        }
    }

    // Reset table
    $("#assign5_table thead tr").html("");
    $("#assign5_table tbody tr").html("");

    // Create "Price" header for table
    $("#assign5_table thead tr").append("<th>Price/Fuel Consumption</th>")
    for (var i = 0; i < price.length; i++) {
        $("#assign5_table thead tr").append("<th>Price " + (i + 1) + "</th>");
    }

    // Populate the table with price and mpg data
    for (var i = 0; i < mpg.length; i++) {
        var row = $("<tr><td>Mpg" + (i + 1) + "</td></tr>").appendTo($("#assign5_table"));
        for (var j = 0; j < price.length; j++) {
            $('<td></td>').text("$" + price[j].value + "/mi").appendTo(row); 
        }
    }

    // Scroll to top of screen to show table
    window.scrollTo(0, 0);
});

$('input[name="miles_gallon[]"]').change(function() { validateInput(this); });
$('input[name="price[]"]').change(function() { validateInput(this); });

function validateInput (element) {
    $(element).next().text("");
    jQuery.validator.setDefaults({
        errorPlacement: function(error, element) {
            $(element).next().text(error.text());
        }
    });
    $("form").validate({
        messages: {
            "miles_gallon[]": "Enter a valid MPG amount",
            "price[]": "Enter a valid price"
        }
    });
    $(element).valid();
}