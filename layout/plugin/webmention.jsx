const { Component, Fragment } = require('inferno');

class Webmention extends Component {
    render() {

        const { helper, plugin, head } = this.props;
        const {
            baseUrl,
            link,
            pingbackLink
        } = plugin;

        if (head) {
            return <Fragment>
                {link ? <link rel="webmention" href={link} /> : null}
                {pingbackLink ? <link rel="pingback" href={pingbackLink} /> : null}
            </Fragment>
        }

        return <Fragment>

            <script dangerouslySetInnerHTML={{
                __html: `var webmentionContext = { baseUrl:'${baseUrl}'}; 
    
    ` }} ></script>
            <script src={helper.url_for('/js/webmention.js')}></script>

        </Fragment>;

    }
}


module.exports = Webmention;