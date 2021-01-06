const { Component, Fragment } = require('inferno');
const Plugins = require('./plugins');

module.exports = class extends Component {
    render() {
        const { site, config, helper, page } = this.props;
        const { url_for, cdn } = helper;
        const { article } = config;
        const language = page.lang || page.language || config.language || 'en';

        let fold = 'unfolded';
        let clipboard = true;
        if (article && article.highlight) {
            if (typeof article.highlight.clipboard !== 'undefined') {
                clipboard = !!article.highlight.clipboard;
            }
            if (typeof article.highlight.fold === 'string') {
                fold = article.highlight.fold;
            }
        }
        // for (var k in config) {
        //     console.log('config key:' + k);
        // }
        // console.log('config.fanlocker:' + config.fanlocker);
        // for (var k in config.matataki) {
        //     console.log('config.matataki key:' + k);
        // }

        const embeddedConfig = `var IcarusThemeSettings = {
            article: {
                highlight: {
                    clipboard: ${clipboard},
                    fold: '${fold}'
                }
            }
        };
        var fl = new FanLocker({
            clientId: '${config.matataki.clientId}',
            clientSecret: '${config.matataki.clientSecret}'
          });
        `;

        return <Fragment>
            <script src={cdn('jquery', '3.3.1', 'dist/jquery.min.js')}></script>
            <script src={cdn('moment', '2.22.2', 'min/moment-with-locales.min.js')}></script>
            <script src="https://unpkg.com/fanlocker@latest/dist/fanlocker.js"></script>
            {clipboard && <script src={cdn('clipboard', '2.0.4', 'dist/clipboard.min.js')} async></script>}
            <script dangerouslySetInnerHTML={{ __html: `moment.locale("${language}");` }}></script>
            <script dangerouslySetInnerHTML={{ __html: embeddedConfig }}></script>
            <script src={url_for('/js/column.js')}></script>
            <Plugins site={site} config={config} page={page} helper={helper} head={false} />
            <script src={url_for('/js/main.js')} defer></script>
        </Fragment>;
    }
};
