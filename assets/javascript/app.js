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
        // Route for Assignment 6
        case "#/courses/gui1/assign6":
        case "/461f2017/hw6": {
            component = React.createElement('div', { className: "container" }, React.createElement(GUI1Assign6, {}),
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
    var i = 1, k = 1;
    $(".data-input .btn").click(function(e) {
        i++;
        $(".gui-assign5 .data-input").append("<div class=\"deal-input\"><div class=\"form-element\"><span>Miles per Gallon</span><input type=\"number\" step=\"0.01\" min=\"0.01\" name=\"miles_gallon[]\" placeholder=\"Miles per Gallon (i.e. 20.41)\"></div><div class=\"form-element\"><span>Price</span><input type=\"number\" step=\"0.01\" min=\"0.01\" name=\"price[]\" placeholder=\"Price (i.e. 15.32)\"></div></div>");
    });

    $(".gui-assign6 .data-input .btn.entry").click(function(e) {
        k++;
        $(".data-input").append("<form class=\"deal-input\"><div class=\"form-element\"><span class=\"title\">Miles per Gallon</span><input type=\"number\" name=\"miles_gallon[]\" placeholder=\"Miles per Gallon (i.e. 20.41)\" value=\"50\"/><div class=\"miles-slider-range\"></div><span id=\"validation\"></span></div><div class=\"form-element\"><span class=\"title\">Price</span><input type=\"number\" step=\"0.01\" min=\"0.01\" name=\"price[]\" placeholder=\"Price (i.e. 15.32)\" value=\"50\"/><div class=\"price-slider-range\"></div><span id=\"validation\"></span></div></form>");
        $(".deal-input:last-of-type .miles-slider-range").slider({
            range: "min",
            step: 0.01,
            min: 0,
            max: 100,
            value: 50,
            slide: function(event, ui) {
                $(".deal-input:last-of-type .miles-slider-range").prev().val(ui.value);
            }
        });
    
        $(".deal-input:last-of-type .price-slider-range").slider({
            range: "min",
            step: 0.01,
            min: 0,
            max: 100,
            value: 50,
            slide: function(event, ui) {
                $(".deal-input:last-of-type .price-slider-range").prev().val(ui.value);
            }
        });
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
    var mpg = $("input[name='miles_gallon[]']");
    var price = $("input[name='price[]']");
    
    // Validate all MPG inputs
    for (var i = 0; i < mpg.length; i++) {
        if (mpg[i].value < 0 || mpg[i].value.length == 0 || isNaN(+mpg[i].value)) {
            $(mpg[i]).focus();
            alert("Invalid mpg amount for Deal " + (i + 1) + ". Please enter a decimal value (i.e. 20.41)");
            return;
        }
    }

    // Validate all price inputs
    for (var i = 0; i < price.length; i++) {
        if (price[i].value < 0 || price[i].value.length == 0 || isNaN(+price[i].value)) {
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

$(".gui-assign5 input[name='miles_gallon[]']").change(function() { validateInput(this); });
$(".gui-assign5 input[name='price[]']").change(function() { validateInput(this); });

function validateInput (element) {
    $(element).next("span#validation").text("");
    jQuery.validator.setDefaults({
        errorPlacement: function(error, element) {
            $(element).next("span#validation").text(error.text());
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

$(function() {
    $(".miles-slider-range").slider({
        range: "min",
        step: 0.01,
        min: 0,
        max: 100,
        value: 50,
        slide: function(event, ui) {
            $(".miles-slider-range").prev().val(ui.value);
        }
    });

    $(".price-slider-range").slider({
        range: "min",
        step: 0.01,
        min: 0,
        max: 100,
        value: 50,
        slide: function(event, ui) {
            $(".price-slider-range").prev().val(ui.value);
        }
    });

    $(".gui-assign6 input[name='miles_gallon[]']").on("change", function() {
        if ($(this).val() > -1 && $(this).val() < 1001) {
            var val = $(this).val();
            $(this).next(".miles-slider-range").slider("value", val);
        }
        validateInput(this);
    });

    $(".gui-assign6 input[name='price[]']").on("change", function() {
        if ($(this).val() > -1 && $(this).val() < 1001) {
            var val = $(this).val();
            $(this).next(".price-slider-range").slider("value", val); 
        }
        validateInput(this);
    });

    var tabs = $(".gui-assign6 #tabs").tabs();
    var handle = tabs.find("ul");
    var tabNum = 0;

    $("#assign6_deal_submit").click(function() {
        var mpg = $("input[name='miles_gallon[]']");
        var price = $("input[name='price[]']");
        var mpg_num = [];
        var price_num = [];
        var tab_text = "";
        
        // Validate all MPG inputs
        for (var i = 0; i < mpg.length; i++) {
            if (mpg[i].value < 0 || mpg[i].value.length == 0 || isNaN(+mpg[i].value)) {
                $(mpg[i]).focus();
                alert("Invalid mpg amount for Deal " + (i + 1) + ". Please enter a decimal value (i.e. 20.41)");
                return;
            }
            mpg_num[i] = mpg[i].value;
        }
    
        // Validate all price inputs
        for (var i = 0; i < price.length; i++) {
            if (price[i].value < 0 || price[i].value.length == 0 || isNaN(+price[i].value)) {
                $(price[i]).focus();
                alert("Invalid price amount for Deal " + (i + 1) + ". Please enter a decimal value (i.e. 15.32)");
                return;
            }
            price_num[i] = price[i].value;
        }

        var table = document.createElement("table");
        $(table).append("<thead><tr></tr></thead>")
        $(table).append("<tbody><tr></tr></thead>")

        // Create "Price" header for table
        $(table).find("thead").find("tr").append("<th>Price/Fuel Consumption</th>")
        for (var i = 0; i < price.length; i++) {
            $(table).find("thead").find("tr").append("<th>Price " + (i + 1) + "</th>");
        }

        // Populate the table with price and mpg data
        for (var i = 0; i < mpg.length; i++) {
            var row = $("<tr><td>Mpg" + (i + 1) + "</td></tr>").appendTo(table);
            for (var j = 0; j < price.length; j++) {
                $('<td></td>').text("$" + price[j].value + "/mi").appendTo(row); 
            }
        }

        for (var i = 0; i < mpg_num.length; i++) {
            tab_text = "(" + mpg_num[i] + ", " + price_num[i] + "), ";
        }
        tab_text = tab_text.substring(0, tab_text.length - 2);

        var index = "tab_id_" + tabNum;
        table.id = index;

        //Add the tab handle
        var li = document.createElement('li');
        li.id = "handle-" + tabNum;
        $(li).append("<a href=\"#tab_id_" + tabNum + "\">" + tab_text + "</a>");
        
        var a = document.createElement('a');
        a.className = "tab_close";
        a.appendChild(document.createTextNode('x'));
        li.appendChild(a);
        handle.append(li);

        tabs.append(table);
        tabs.tabs("refresh");
        tabs.tabs("option", "active", handle.find('li').length - 1);

        $("#remove_multiple select").append("<option value=\"" + tabNum + "\">" + tab_text + "</option>");

        tabNum++;
    
        // Scroll to top of screen to show table
        window.scrollTo(0, 0);
    });

    tabs.on("click", ".tab_close", function() {
        var id = $(this).prev().attr("href").substring(1);
        $(this).parents("#tabs").find("table#" + id).remove();
        $(this).parent().remove();
        tabs.tabs("refresh");
        renderAvailableTabs()
        if (tabNum < 1) {
            $("form#remove_multiple").hide();
            $(".remove-selected-tabs").hide();
        } else {
            $("form#remove_multiple").show();
            $(".remove-selected-tabs").show();
        }
    });

    // Remove all tabs and their content
    $(".remove-all-tabs").click(function() {
        handle.empty();
        tabs.children("table").remove();
        $("#remove_multiple ul").empty();
        tabNum = 0;
        renderAvailableTabs();
        $("form#remove_multiple").hide();
        $(".remove-selected-tabs").hide();
    });

    $(".remove-individual-tabs").click(function() {
        $(".gui-assign6 form#remove_multiple").toggleClass("show");
        if ($(".gui-assign6 form#remove_multiple").hasClass("show")) {
            $(this).text("Hide individual tabs to remove")
        } else {
            $(this).text("Show individual tabs to remove")
        }
    });

    $("form#remove_multiple").submit(function(e) {
        e.preventDefault();
        $("#remove_multiple select").find(":checked").each(function() {
            var item = this;
            var id = $(this).attr("value");
            handle.find("li").each(function() {
                if ($(this).attr("id").substring(7) === id) {
                    $(this).remove();
                    $(tabs).find("table#tab_id_" + id).remove();
                    tabNum--;
                    tabs.tabs("refresh");
                    renderAvailableTabs();
                    $(this).remove();
                }
            })
        });
    });

    function renderAvailableTabs() {
        $("#remove_multiple select").empty();
        $(tabs).find("li").find("a.ui-tabs-anchor").each(function() {
            var id = $(this).attr("href").substring(7);
            var text = $(this).text();
            $("#remove_multiple select").append("<option value=\"" + id + "\">" + text + "</option>");
        })
    }
});