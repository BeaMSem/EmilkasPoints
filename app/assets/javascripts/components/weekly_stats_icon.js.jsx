var WeeklyStatsIcon = React.createClass({

    getInitialState(){
        return({
            active: this.props.active
        })
    },
    renderActiveIcon(){
        return(
            <div className="achievement_icon active">
                <div className="achievement_svg">
                    {this.props.children}
                </div>
            </div>
    )},
    renderInactiveIcon(){
        return(
            <div className="achievement_icon inactive">
               <div className="achievement_svg">
                   {this.props.children}
               </div>
            </div>
        )
    },
    render(){
        // console.log('this.props');
        // console.log(this.props);
        return(
            this.state.active ? this.renderActiveIcon() : this.renderInactiveIcon()
        )
    },
    componentWillReceiveProps(nextProps){
        // console.log('this.state weekly stats');
        // console.log(this.state);
        // console.log('nextProps WeeklyStatsIcon');
        // console.log(nextProps);
        this.setState({active: nextProps.active})

    }
});