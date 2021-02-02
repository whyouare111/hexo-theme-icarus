/**
 * Webmastodon comment JSX component.
 * @module layout/comment/webmastodon
 */
const { Component, Fragment } = require('inferno');
const { cacheComponent } = require('hexo-component-inferno/lib/util/cache');


class WebmentionMastodon extends Component {
    render() {

        const { helper, share } = this.props;
        const { __ } = helper;

        const {
            mastodonBaseUrl
        } = share;
        return <Fragment>
            <div class="share level is-mobile">
                <a class="level-item button is-transparent is-marginless mastodon-reply" rel="mastodon-interact" title={__('share.webmention-mastodon.reply')} href="javascript:mastodonContext.reply()"><i class="fa fa-reply fa-fw"></i></a>
                <a class="level-item button is-transparent is-marginless mastodon-reblog" rel="mastodon-interact" title={__('share.webmention-mastodon.reblog')} href="javascript:mastodonContext.reblog()"><i class="fa fa-retweet fa-fw"></i></a>
                <a class="level-item button is-transparent is-marginless mastodon-favourite" rel="mastodon-interact" title={__('share.webmention-mastodon.favourite')} href="javascript:mastodonContext.favourite()"><i class="fas fa-star"></i></a>
            </div>
            <script dangerouslySetInnerHTML={{
                __html: `var mastodonContext = { mastodonBaseUrl:'${mastodonBaseUrl}', reply:function(){},reblog:function(){},favourite: function(){} }; 
        
        ` }} ></script>
            <script src={helper.url_for('/js/webmention-mastodon.js')}></script>

        </Fragment>


    }
}


module.exports = WebmentionMastodon;
