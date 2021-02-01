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
                {link ? <link rel="webmention" href={link} /> : null}
                {pingbackLink ? <link rel="pingback" href={pingbackLink} /> : null}
            </Fragment>
        }

        return null;

    }
}


module.exports = Webmention;