const { Component, Fragment } = require('inferno');

class Webmention extends Component {
    render() {

        const { plugin, head } = this.props;

        if (head) {

            const {
                link,
                pingbackLink
            } = plugin;
            return <Fragment>
                <link rel="webmention" href={link} />
                <link rel="pingback" href={pingbackLink} />
            </Fragment>
        }

        return null;

    }
}


module.exports = Webmention;