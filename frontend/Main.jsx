import * as React from 'react';


export default React.createClass({
    getInitialState: function() {
        return {msg: "initializing..."};
    },
    componentDidMount: function() {
        this.updateMessage("hello")
    },
    updateMessage: function(elmMsg) {
        this.setState({msg: elmMsg});
    },
    render: function () {
        return (
            <div className="row">
                <div className="col-md-6 bolded">hellowww</div>
                <div className="col-md-6 bolded">world</div>
                <div className="col-md-6">{this.state.msg}</div>
            </div>
        );
    }
});
