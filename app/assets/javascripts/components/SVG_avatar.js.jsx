var SVG_avatar = React.createClass({
    render() {
        var svg = null;
        switch(this.props.svg) {
            case 'SVG_avatar_0001':
                svg = <SVG_avatar_0001/>;
                break;
            case 'SVG_avatar_0002':
                svg = <SVG_avatar_0002/>;
                break;
            case 'SVG_avatar_0003':
                svg = <SVG_avatar_0003/>;
                break;
            case 'SVG_avatar_0004':
                svg = <SVG_avatar_0004/>;
                break;
            case 'SVG_avatar_0005':
                svg = <SVG_avatar_0005/>;
                break;
            case 'SVG_avatar_0006':
                svg = <SVG_avatar_0006/>;
                break;
            case 'SVG_avatar_0007':
                svg = <SVG_avatar_0007/>;
                break;
            case 'SVG_avatar_0008':
                svg = <SVG_avatar_0008/>;
                break;
            default:
                svg = null
        }
        return (svg)
    }

});