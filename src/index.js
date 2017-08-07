var React = require('react');
var ReactDom = require('react-dom');
var createClass = require('create-react-class');


var Component = createClass({
    render:function(){
        return(
        <h1>Hello World</h1>
    );
    }
});

ReactDom.render(
<Component />,
document.getElementById('root')
);