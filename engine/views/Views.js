// All HTML is written in React's JSX-style format. Views are created for each part of the application
// to build a structure.

// Create React view for Home page
var HomeView = React.createClass({
    propTypes: { },
	render: function() {
        return ( React.createElement("div", { },
                    React.createElement("h1", {}, "Welcome"),
                    React.createElement("span", {}, "My name is Saurabh Verma and I am a Computer Science student at University of Massachusetts Lowell."),
                    React.createElement("br", {}),
                    React.createElement(RecentView)
                ) );
    }
});

// Create React view for Help page
var HelpView = React.createClass({
    propTypes: { },
	render: function() {
        return ( React.createElement('h1', {}, "Help is here!") );
    }
});

// Create React view for Recent section
var RecentView = React.createClass({
    propTypes: { },
	render: function() {
        return (
            React.createElement("div", {}, 
                React.createElement('h1', {}, "Recent"),
                React.createElement("ul", {}, 
                    React.createElement("li", {}, 
                        React.createElement("a", { href: "#/courses/gui1/assign6" }, "GUI Programming I Assignment 6")))));
    }
});

// Create React view for Courses page
var CoursesView = React.createClass({
    propTypes: { },
	render: function() {
        return ( React.createElement("div", { },
                    React.createElement("h1", {}, "Courses"),
                    React.createElement("ul", {}, 
                        React.createElement("li", {}, 
                            React.createElement("a", { href: "#/courses/gui1" }, "GUI Programming I")))) );
    }
});

// Create React view for GUI Programming page
var GUI1View = React.createClass({
    propTypes: { },
	render: function() {
        return ( React.createElement("div", { },
                    React.createElement("h1", {}, "Graphical User Interface Programming I"),
                    React.createElement("ul", {}, 
                        React.createElement("li", {}, 
                            React.createElement("a", { href: "#/" }, "Assignment 1")),
                        React.createElement("li", {}, 
                            React.createElement("a", { href: "#/courses/gui1/assign3" }, "Assignment 3"),
                        React.createElement("li", {}, 
                            React.createElement("a", { href: "#/courses/gui1/assign4" }, "Assignment 4"),
                        React.createElement("li", {}, 
                            React.createElement("a", { href: "#/courses/gui1/assign5" }, "Assignment 5")))))) );
    }
});

// Create React view for GUI Programming Assignment 3 page 1
var GUI1Assign3View1 = React.createClass({
    propTypes: { },
	render: function() {
        return ( React.createElement("div", { className: "gui-assign3 one" },
                    React.createElement("a", { className: "active", href: "#/courses/gui1/assign3" }, "Style 1"),
                    React.createElement("a", { href: "#/courses/gui1/assign3/2" }, "Style 2"),
                    React.createElement("a", { href: "#/courses/gui1/assign3/3" }, "Style 3"),
                    React.createElement("div", { className: "image-top" }),
                    React.createElement("h1", {}, "COMP 4610 GUI I"),
                    React.createElement("h2", {}, "Assignment No. 3"),
                    React.createElement("h2", {}, "Demo Styles With CSS"),
                    React.createElement("p", {}, "Date Due: ",
                        React.createElement("span", { className: "bold" }, "Thursday, October 19, 2017")),
                    React.createElement("h3", {}, "What This Assignment Is About"),
                    React.createElement("p", {}, "In this assignment you will improve your ability to build pages that use additional HTML techniques and apply CSS to the page's HTML to provide some styling experience and comparison among different styling parameters."),
                    React.createElement("p", {}, "Information relevant to this assignment appears in CSS: The Missing Manual by David Sawyer MacFarland in Chapters 1-3, 6 and 7. By reading these chapters (or equivalent sources) and looking at examples on W3Schools, specifically the tutorials at www.w3schools.com/css and www.w3schools.com/css3 you should be able to fulfill the requirements."),
                    React.createElement("h3", {}, "What You Are To Do"),
                    React.createElement("p", {}, "A publisher has hired you to create a demo for their designers to shows them how different color-, font-, formatting-, and spacing choices impact the final readability and usability of a document. To accomplish that, they requested that you create at least three variations of the same content, but with modified style choices, as follows:"),
                    React.createElement("ul", {}, 
                        React.createElement("li", {}, "The demo content will be the content of this assignment's document (yes, the document you are reading now). The only difference is that you should add at least one image (small or larger, simple or sophisticated, it doesn't matter), and you should show some styling differences about that image."),
                        React.createElement("li", {}, "You are to create at least three versions of this document; the content will be identical but the styling of the pages will be different."),
                        React.createElement("li", {}, "Your CSS code must be in a separate file from your HTML file, in a subdirectory name css. This is the industry-standard way to organize websites. You might use inline CSS and/or an internal style sheet during development, but you must move all your CSS to a separate, external file before you submit your assignment. That external file should have an extension of .css."),
                        React.createElement("li", {}, "Your CSS code must be documented to the same standard we have used for HTML. That is, major sections must be documented to identify what they are styling. You should *not* document each individual CSS rule. Assume that the reader of your documentation knows CSS, but that s/he is not familiar with the way you're using it."),
                        React.createElement("li", {}, "You must structure your assignment so that the three (or more) demo pages can be reached from a \"landing\" page, which will have clearly-identified hyperlinks to the demo pages."),
                        React.createElement("li", {}, "Your demo pages must have a variety of examples of different colors (including foreground - i.e., text or content, and background), spacing, padding, borders (color, style, thickness), and any other styling differences you might want to show."),
                        React.createElement("li", {}, "Test both your webpage and your CSS code using the W3C Validators:"),
                        React.createElement("ul", { className: "close" }, 
                            React.createElement("li", {},
                                React.createElement("p", {}, "HTML5 Markup Validation"),
                                React.createElement("p", {}, "Service: http://validator.w3.org or http://validator.nu")),
                            React.createElement("li", {}, "W3C CSS Validation Service: http://jigsaw.w3.org/css-validator"))),
                    React.createElement("p", {}, "Your code must pass both validators. When it does, add the W3C validation icons to your page."),
                    React.createElement("h4", {}, "Code Review"),
                    React.createElement("p", {}, "You can learn an awful lot by just having someone else look at your page and try it out. If you do this assignment before the due date, there is no reason why you can't ask someone (even a classmate) to review your work for you. I strongly suggest that you do this, and that you do so early enough to allow time to make the changes that s/he recommends (if you also agree with them)."),
                    React.createElement("h3", {}, "Submitting Your Assignment for Grading"),
                    React.createElement("p", {}, "Please follow these directions carefully. Incorrectly submitted assignments will not be given appropriate credit."),
                    React.createElement("p", {}, "To submit this assignment you must go to our course blackboard and submit prior to the deadline. Please submit all related files and also a link to your styled site."),
                    React.createElement("h3", {}, "How You Will Be Graded"),
                    React.createElement("p", {}, "This assignment will be graded on a 20-point system with points awarded as follows. Please note that the lists of features provided below are not meant to be exhaustive. They are merely representative of the types of things we are looking for in each grading category. Also note that 4 of the 20 points, or 20% of your grade, is awarded for documentation."),
                    React.createElement("p", {}, "Again, I stress that your page need not be the most beautiful page on the Web, although it's of course fine to strive for that! This is not an art class, and again I am very aware that some students enter this class with significantly more experience with Web programming techniques than others. I strongly encourage experienced students to do the basic assignment first and then push themselves to learn and try out new techniques. I encourage inexperienced students to look at others' work and emulate it where appropriate, of course being sure to cite your references and give credit where credit is due. As always, all students should be able to score all 20 points on this assignment, regardless of what you knew before you took this course.")) );
    }
});

// Create React view for GUI Programming Assignment 3 page 2
var GUI1Assign3View2 = React.createClass({
    propTypes: { },
	render: function() {
        return ( React.createElement("div", { className: "gui-assign3 two" },
                    React.createElement("a", { href: "#/courses/gui1/assign3" }, "Style 1"),
                    React.createElement("a", { className: "active", href: "#/courses/gui1/assign3/2" }, "Style 2"),
                    React.createElement("a", { href: "#/courses/gui1/assign3/3" }, "Style 3"),
                    React.createElement("div", { className: "image-top" }),
                    React.createElement("h1", {}, "COMP 4610 GUI I"),
                    React.createElement("h2", {}, "Assignment No. 3"),
                    React.createElement("h2", {}, "Demo Styles With CSS"),
                    React.createElement("p", {}, "Date Due: ",
                        React.createElement("span", { className: "bold" }, "Thursday, October 19, 2017")),
                    React.createElement("h3", {}, "What This Assignment Is About"),
                    React.createElement("p", {}, "In this assignment you will improve your ability to build pages that use additional HTML techniques and apply CSS to the page's HTML to provide some styling experience and comparison among different styling parameters."),
                    React.createElement("p", {}, "Information relevant to this assignment appears in CSS: The Missing Manual by David Sawyer MacFarland in Chapters 1-3, 6 and 7. By reading these chapters (or equivalent sources) and looking at examples on W3Schools, specifically the tutorials at www.w3schools.com/css and www.w3schools.com/css3 you should be able to fulfill the requirements."),
                    React.createElement("h3", {}, "What You Are To Do"),
                    React.createElement("p", {}, "A publisher has hired you to create a demo for their designers to shows them how different color-, font-, formatting-, and spacing choices impact the final readability and usability of a document. To accomplish that, they requested that you create at least three variations of the same content, but with modified style choices, as follows:"),
                    React.createElement("ul", {}, 
                        React.createElement("li", {}, "The demo content will be the content of this assignment's document (yes, the document you are reading now). The only difference is that you should add at least one image (small or larger, simple or sophisticated, it doesn't matter), and you should show some styling differences about that image."),
                        React.createElement("li", {}, "You are to create at least three versions of this document; the content will be identical but the styling of the pages will be different."),
                        React.createElement("li", {}, "Your CSS code must be in a separate file from your HTML file, in a subdirectory name css. This is the industry-standard way to organize websites. You might use inline CSS and/or an internal style sheet during development, but you must move all your CSS to a separate, external file before you submit your assignment. That external file should have an extension of .css."),
                        React.createElement("li", {}, "Your CSS code must be documented to the same standard we have used for HTML. That is, major sections must be documented to identify what they are styling. You should *not* document each individual CSS rule. Assume that the reader of your documentation knows CSS, but that s/he is not familiar with the way you're using it."),
                        React.createElement("li", {}, "You must structure your assignment so that the three (or more) demo pages can be reached from a \"landing\" page, which will have clearly-identified hyperlinks to the demo pages."),
                        React.createElement("li", {}, "Your demo pages must have a variety of examples of different colors (including foreground - i.e., text or content, and background), spacing, padding, borders (color, style, thickness), and any other styling differences you might want to show."),
                        React.createElement("li", {}, "Test both your webpage and your CSS code using the W3C Validators:"),
                        React.createElement("ul", { className: "close" }, 
                            React.createElement("li", {},
                                React.createElement("p", {}, "HTML5 Markup Validation"),
                                React.createElement("p", {}, "Service: http://validator.w3.org or http://validator.nu")),
                            React.createElement("li", {}, "W3C CSS Validation Service: http://jigsaw.w3.org/css-validator"))),
                    React.createElement("p", {}, "Your code must pass both validators. When it does, add the W3C validation icons to your page."),
                    React.createElement("h4", {}, "Code Review"),
                    React.createElement("p", {}, "You can learn an awful lot by just having someone else look at your page and try it out. If you do this assignment before the due date, there is no reason why you can't ask someone (even a classmate) to review your work for you. I strongly suggest that you do this, and that you do so early enough to allow time to make the changes that s/he recommends (if you also agree with them)."),
                    React.createElement("h3", {}, "Submitting Your Assignment for Grading"),
                    React.createElement("p", {}, "Please follow these directions carefully. Incorrectly submitted assignments will not be given appropriate credit."),
                    React.createElement("p", {}, "To submit this assignment you must go to our course blackboard and submit prior to the deadline. Please submit all related files and also a link to your styled site."),
                    React.createElement("h3", {}, "How You Will Be Graded"),
                    React.createElement("p", {}, "This assignment will be graded on a 20-point system with points awarded as follows. Please note that the lists of features provided below are not meant to be exhaustive. They are merely representative of the types of things we are looking for in each grading category. Also note that 4 of the 20 points, or 20% of your grade, is awarded for documentation."),
                    React.createElement("p", {}, "Again, I stress that your page need not be the most beautiful page on the Web, although it's of course fine to strive for that! This is not an art class, and again I am very aware that some students enter this class with significantly more experience with Web programming techniques than others. I strongly encourage experienced students to do the basic assignment first and then push themselves to learn and try out new techniques. I encourage inexperienced students to look at others' work and emulate it where appropriate, of course being sure to cite your references and give credit where credit is due. As always, all students should be able to score all 20 points on this assignment, regardless of what you knew before you took this course.")) );
    }
});

// Create React view for GUI Programming Assignment 3 page 3
var GUI1Assign3View3 = React.createClass({
    propTypes: { },
	render: function() {
        return ( React.createElement("div", { className: "gui-assign3 three" },
                    React.createElement("a", { href: "#/courses/gui1/assign3" }, "Style 1"),
                    React.createElement("a", { href: "#/courses/gui1/assign3/2" }, "Style 2"),
                    React.createElement("a", { className: "active", href: "#/courses/gui1/assign3/3" }, "Style 3"),
                    React.createElement("div", { className: "image-top" }),
                    React.createElement("h1", {}, "COMP 4610 GUI I"),
                    React.createElement("h2", {}, "Assignment No. 3"),
                    React.createElement("h2", {}, "Demo Styles With CSS"),
                    React.createElement("p", {}, "Date Due: ",
                        React.createElement("span", { className: "bold" }, "Thursday, October 19, 2017")),
                    React.createElement("h3", {}, "What This Assignment Is About"),
                    React.createElement("p", {}, "In this assignment you will improve your ability to build pages that use additional HTML techniques and apply CSS to the page's HTML to provide some styling experience and comparison among different styling parameters."),
                    React.createElement("p", {}, "Information relevant to this assignment appears in CSS: The Missing Manual by David Sawyer MacFarland in Chapters 1-3, 6 and 7. By reading these chapters (or equivalent sources) and looking at examples on W3Schools, specifically the tutorials at www.w3schools.com/css and www.w3schools.com/css3 you should be able to fulfill the requirements."),
                    React.createElement("h3", {}, "What You Are To Do"),
                    React.createElement("p", {}, "A publisher has hired you to create a demo for their designers to shows them how different color-, font-, formatting-, and spacing choices impact the final readability and usability of a document. To accomplish that, they requested that you create at least three variations of the same content, but with modified style choices, as follows:"),
                    React.createElement("ul", {}, 
                        React.createElement("li", {}, "The demo content will be the content of this assignment's document (yes, the document you are reading now). The only difference is that you should add at least one image (small or larger, simple or sophisticated, it doesn't matter), and you should show some styling differences about that image."),
                        React.createElement("li", {}, "You are to create at least three versions of this document; the content will be identical but the styling of the pages will be different."),
                        React.createElement("li", {}, "Your CSS code must be in a separate file from your HTML file, in a subdirectory name css. This is the industry-standard way to organize websites. You might use inline CSS and/or an internal style sheet during development, but you must move all your CSS to a separate, external file before you submit your assignment. That external file should have an extension of .css."),
                        React.createElement("li", {}, "Your CSS code must be documented to the same standard we have used for HTML. That is, major sections must be documented to identify what they are styling. You should *not* document each individual CSS rule. Assume that the reader of your documentation knows CSS, but that s/he is not familiar with the way you're using it."),
                        React.createElement("li", {}, "You must structure your assignment so that the three (or more) demo pages can be reached from a \"landing\" page, which will have clearly-identified hyperlinks to the demo pages."),
                        React.createElement("li", {}, "Your demo pages must have a variety of examples of different colors (including foreground - i.e., text or content, and background), spacing, padding, borders (color, style, thickness), and any other styling differences you might want to show."),
                        React.createElement("li", {}, "Test both your webpage and your CSS code using the W3C Validators:"),
                        React.createElement("ul", { className: "close" }, 
                            React.createElement("li", {},
                                React.createElement("p", {}, "HTML5 Markup Validation"),
                                React.createElement("p", {}, "Service: http://validator.w3.org or http://validator.nu")),
                            React.createElement("li", {}, "W3C CSS Validation Service: http://jigsaw.w3.org/css-validator"))),
                    React.createElement("p", {}, "Your code must pass both validators. When it does, add the W3C validation icons to your page."),
                    React.createElement("h4", {}, "Code Review"),
                    React.createElement("p", {}, "You can learn an awful lot by just having someone else look at your page and try it out. If you do this assignment before the due date, there is no reason why you can't ask someone (even a classmate) to review your work for you. I strongly suggest that you do this, and that you do so early enough to allow time to make the changes that s/he recommends (if you also agree with them)."),
                    React.createElement("h3", {}, "Submitting Your Assignment for Grading"),
                    React.createElement("p", {}, "Please follow these directions carefully. Incorrectly submitted assignments will not be given appropriate credit."),
                    React.createElement("p", {}, "To submit this assignment you must go to our course blackboard and submit prior to the deadline. Please submit all related files and also a link to your styled site."),
                    React.createElement("h3", {}, "How You Will Be Graded"),
                    React.createElement("p", {}, "This assignment will be graded on a 20-point system with points awarded as follows. Please note that the lists of features provided below are not meant to be exhaustive. They are merely representative of the types of things we are looking for in each grading category. Also note that 4 of the 20 points, or 20% of your grade, is awarded for documentation."),
                    React.createElement("p", {}, "Again, I stress that your page need not be the most beautiful page on the Web, although it's of course fine to strive for that! This is not an art class, and again I am very aware that some students enter this class with significantly more experience with Web programming techniques than others. I strongly encourage experienced students to do the basic assignment first and then push themselves to learn and try out new techniques. I encourage inexperienced students to look at others' work and emulate it where appropriate, of course being sure to cite your references and give credit where credit is due. As always, all students should be able to score all 20 points on this assignment, regardless of what you knew before you took this course.")) );
    }
});

// Create React view for GUI Programming Midterm 1 Home
var GUI1Midterm1 = React.createClass({
    propTypes: { },
	render: function() {
        return ( React.createElement("div", { className: "gui-midterm1" },
                    React.createElement("h1", {}, "Welcome"),
                    React.createElement("div", { className: "content" },
                        React.createElement("span", {}, "Comparing car deals from multiple dealers can be overwhelming. CarInfo helps you by analyzing each deal and finding the best cost-per-month and cost-per-mile package."),
                        React.createElement("br", {}),
                        React.createElement("br", {}),
                        React.createElement("span", {}, "Start by pressing the \"Start\" button below and entering information about each deal."),
                        React.createElement("br", {}),
                        React.createElement("br", {}),
                        React.createElement("br", {}),
                        React.createElement("a", { className: "btn", href: "#/courses/gui1/midterm1/start" }, "Start"))) );
    }
});

// Create React view for GUI Programming Midterm 1 Data Entry
var GUI1Midterm1Entry = React.createClass({
    propTypes: { },
	render: function() {
        return ( React.createElement("div", { className: "gui-midterm1" },
                    React.createElement("h1", {}, "Deals offered"),
                    React.createElement("div", { className: "content" },
                        React.createElement("span", {}, "To provide accurate results, CarInfo needs the following information for each deal that was offered:"),
                        React.createElement("ul", { className: "close" }, 
                            React.createElement("li", {}, "MSRP"),
                            React.createElement("li", {}, "Discounts"),
                            React.createElement("li", {}, "Rebates"),
                            React.createElement("li", {}, "Down Payment"),
                            React.createElement("li", {}, "Interest Rate"),
                            React.createElement("li", {}, "Estimated Miles Driven"),
                            React.createElement("li", {}, "Additional Mile Charges")),
                        React.createElement("span", {}, "For each deal offered, press the  "),
                        React.createElement("a", {className: "btn small"}, "+ New Deal"),
                        React.createElement("span", { className: "lh" }, " button below and entering the required information. Then, press \"Finish\" at the bottom of the page to see the results."),
                        React.createElement("br", {}),
                        React.createElement("br", {}),
                        React.createElement("div", { className: "input-wrap"}, 
                            React.createElement("a", {className: "btn small"}, "+ New Deal"),
                            React.createElement("div", {className: "deal-input" },
                                React.createElement("div", {className: "form-element"}, 
                                    React.createElement("span", {className: "title"}, "Name"),
                                    React.createElement("input", {type: "text", name: "deal_name[]", placeholder: "Name of Deal (i.e. Ford's deal)"})),
                                React.createElement("div", {className: "form-element"}, 
                                    React.createElement("span", {className: "title"}, "MSRP"),
                                    React.createElement("input", {type: "number", name: "msrp[]", min: "0.01", step:"0.01", placeholder: "MSRP Price (Enter only the number i.e. 100000)"})),
                                React.createElement("div", {className: "form-element"}, 
                                    React.createElement("span", {className: "title"}, "Discount"),
                                    React.createElement("input", {type: "number", name: "discount[]", min: "0.01", step: "0.01", placeholder: "Discount Price (Enter only the number i.e. 100000)"})),
                                React.createElement("div", {className: "form-element"}, 
                                    React.createElement("span", {className: "title"}, "Rebate"),
                                    React.createElement("input", {type: "number", name: "rebate[]", min: "0.01", step: "0.01", placeholder: "Rebate Price (Enter only the number i.e. 100000)"})),
                                React.createElement("div", {className: "form-element"}, 
                                    React.createElement("span", {className: "title"}, "Down Payment"),
                                    React.createElement("input", {type: "number", name: "down[]", min: "0.01", step: "0.01", placeholder: "Down Payment (Enter only the number i.e. 100000)"})),
                                React.createElement("div", {className: "form-element"}, 
                                    React.createElement("span", {className: "title"}, "Interest Rate"),
                                    React.createElement("input", {type: "number", name: "interest[]", min: "0.01", step: "0.01", placeholder: "Interest Rate (Enter only the percentage i.e. 5.00)"})),
                                React.createElement("div", {className: "form-element"}, 
                                    React.createElement("span", {className: "title"}, "Miles Driven"),
                                    React.createElement("input", {type: "number", name: "miles_driven[]", min: "0.01", step: "0.01", placeholder: "Number of miles driven (i.e. 100)"})),
                                React.createElement("div", {className: "form-element"}, 
                                    React.createElement("span", {className: "title"}, "Additional Miles"),
                                    React.createElement("input", {type: "number", name: "additional_miles[]", min: "0.01", step: "0.01", placeholder: "Cost per additional mile (i.e. 5.00)"})))),
                        React.createElement("a", { id: "deal-submit", className: "btn top", href: "#/courses/gui1/midterm1/start" }, "Finish"),
                        React.createElement("br", {}))) );
    }
});

// Create React view for GUI Programming Assignment 4
var GUI1Assign4 = React.createClass({
    propTypes: { },
	render: function() {
        return ( React.createElement("div", { className: "gui-assign4" },
                    React.createElement("h1", {}, "Miles/Gallon vs. Price"),
                    React.createElement("div", { className: "content" },
                        React.createElement("span", {}, "Visualize the relation between miles per gallon and price by entering the data below:"),
                        React.createElement("br", {}),
                        React.createElement("br", {}),
                        React.createElement("table", { id: "assign4_table" },
                            React.createElement("thead", {},
                                React.createElement("tr", {},
                                    React.createElement("th", {}, ""))),
                            React.createElement("tbody", {},
                                React.createElement("tr", {},
                                    React.createElement("td", {}, "")))),
                        React.createElement("br", {}),
                        React.createElement("br", {}),
                        React.createElement("div", { className: "data-input"}, 
                        React.createElement("a", {className: "btn small"}, "+ New Entry"),
                        React.createElement("div", {className: "deal-input" },
                            React.createElement("div", {className: "form-element"}, 
                                React.createElement("span", {className: "title"}, "Miles per Gallon"),
                                React.createElement("input", {type: "number", name: "miles_gallon[]", placeholder: "Miles per Gallon (i.e. 20.41)"})),
                            React.createElement("div", {className: "form-element"}, 
                                React.createElement("span", {className: "title"}, "Price"),
                                React.createElement("input", {type: "number", name: "price[]", min: "0.01", step:"0.01", placeholder: "Price (i.e. 15.32)"})))),
                        React.createElement("a", { id: "assign4_deal_submit", className: "btn top" }, "Submit"))) );
    }
});

// Create React view for GUI Programming Assignment 5
var GUI1Assign5 = React.createClass({
    propTypes: { },
	render: function() {
        return ( React.createElement("div", { className: "gui-assign5" },
                    React.createElement("h1", {}, "Miles/Gallon vs. Price"),
                    React.createElement("div", { className: "content" },
                        React.createElement("span", {}, "Visualize the relation between miles per gallon and price by entering the data below:"),
                        React.createElement("br", {}),
                        React.createElement("br", {}),
                        React.createElement("table", { id: "assign5_table" },
                            React.createElement("thead", {},
                                React.createElement("tr", {},
                                    React.createElement("th", {}, ""))),
                            React.createElement("tbody", {},
                                React.createElement("tr", {},
                                    React.createElement("td", {}, "")))),
                        React.createElement("br", {}),
                        React.createElement("br", {}),
                        React.createElement("div", { className: "data-input"}, 
                            React.createElement("a", {className: "btn small"}, "+ New Entry"),
                            React.createElement("form", {className: "deal-input" },
                                React.createElement("div", {className: "form-element"}, 
                                    React.createElement("span", {className: "title"}, "Miles per Gallon"),
                                    React.createElement("input", {type: "number", name: "miles_gallon[]", placeholder: "Miles per Gallon (i.e. 20.41)"}),
                                    React.createElement("span", { id: "validation" }, "")),
                                React.createElement("div", {className: "form-element"}, 
                                    React.createElement("span", {className: "title"}, "Price"),
                                    React.createElement("input", {type: "number", name: "price[]", min: "0.01", step:"0.01", placeholder: "Price (i.e. 15.32)"}),
                                    React.createElement("span", { id: "validation" }, "")))),
                        React.createElement("a", { id: "assign5_deal_submit", className: "btn top" }, "Submit"))) );
    }
});

// Create React view for GUI Programming Assignment 6
var GUI1Assign6 = React.createClass({
    propTypes: { },
	render: function() {
        return ( React.createElement("div", { className: "gui-assign6" },
                    React.createElement("h1", {}, "Miles/Gallon vs. Price"),
                    React.createElement("div", { className: "content" },
                        React.createElement("span", {}, "Visualize the relation between miles per gallon and price by entering the data below:"),
                        React.createElement("br", {}),
                        React.createElement("br", {}),
                        React.createElement("div", { id: "tabs" },
                            React.createElement("ul", {})),
                        React.createElement("br", {}),
                        React.createElement("div", { className: "data-input"}, 
                            React.createElement("a", {className: "btn small entry"}, "+ New Entry"),
                            React.createElement("a", {className: "btn small remove-all-tabs"}, "Remove all tabs"),
                            React.createElement("a", {className: "btn small remove-individual-tabs"}, "Show individual tabs to remove"),
                            React.createElement("form", { id: "remove_multiple" },
                                React.createElement("select", {multiple: true}),
                                React.createElement("input", {className: "btn small remove-selected-tabs", type: "submit", value: "Remove selected tabs"})),
                            React.createElement("form", {className: "deal-input" },
                                React.createElement("div", {className: "form-element"}, 
                                    React.createElement("span", {className: "title"}, "Miles per Gallon"),
                                    React.createElement("input", {type: "number", name: "miles_gallon[]", placeholder: "Miles per Gallon (i.e. 20.41)", defaultValue: 50}),
                                    React.createElement("div", { className: "miles-slider-range" }),
                                    React.createElement("span", { id: "validation" }, "")),
                                React.createElement("div", {className: "form-element"}, 
                                    React.createElement("span", {className: "title"}, "Price"),
                                    React.createElement("input", {type: "number", name: "price[]", min: "0.01", step:"0.01", placeholder: "Price (i.e. 15.32)", defaultValue: 50.00}),
                                    React.createElement("div", { className: "price-slider-range" }),
                                    React.createElement("span", { id: "validation" }, "")))),
                        React.createElement("a", { id: "assign6_deal_submit", className: "btn top" }, "Submit"))) );
    }
});