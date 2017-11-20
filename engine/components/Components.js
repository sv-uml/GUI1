// Header component that renders the header element at the top of every page
var HeaderComponent = React.createClass({
    propType: {},
    render: function() {
        return React.createElement("nav", { className: "header" },
                    React.createElement('a', { href: "#/", className: "header-logo" }, "Saurabh Verma"),
                    React.createElement("div", { className: "options-container" },
                        React.createElement('a', {href: '#/help', className: 'option'}, "Help"),
                        React.createElement('a', {href: '#/courses', className: 'option'}, "Courses")))
    }
});