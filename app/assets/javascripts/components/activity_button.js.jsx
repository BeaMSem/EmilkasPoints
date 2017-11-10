var ActivityButton  = React.createClass({

    render(){
        console.log('activitySvg- this.props');
        console.log(this.props);
        console.log('activitySvg- this.state');
        console.log(this.state);

        return(
            <div className="activity_button">
                <div className="svg">
                    <SVG_activity
                        svg = {this.props.child_activity.svg}
                    />
                </div>
                <div className="title">
                    {this.props.child_activity.name}
                </div>
            </div>
        )
    },

});