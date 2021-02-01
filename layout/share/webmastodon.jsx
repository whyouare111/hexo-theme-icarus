/**
 * Webmastodon comment JSX component.
 * @module layout/comment/webmastodon
 */
const { Component, Fragment } = require('inferno');
const { cacheComponent } = require('hexo-component-inferno/lib/util/cache');


class Webmastodon extends Component {
    render() {

        const { helper, share } = this.props;


        const {
            mastodonBaseUrl,
            webmentionBaseUrl
        } = share;
        return <Fragment>
            <div class="share level is-mobile">
                <a class="level-item button is-transparent is-marginless mastodon-reply" rel="mastodon-interact" title="回复" href="javascript:webmastodon.reply()"><i class="fa fa-reply fa-fw"></i></a>
                <a class="level-item button is-transparent is-marginless mastodon-reblog" rel="mastodon-interact" title="转嘟" href="javascript:webmastodon.reblog()"><i class="fa fa-retweet fa-fw"></i></a>
                <a class="level-item button is-transparent is-marginless mastodon-favourite" rel="mastodon-interact" title="喜欢" href="javascript:webmastodon.favourite()"><i class="fas fa-star"></i></a>
            </div>
            <script dangerouslySetInnerHTML={{
                __html: `var webmastodon = { mastodonBaseUrl:'${mastodonBaseUrl}',webmentionBaseUrl:'${webmentionBaseUrl}', reply:function(){},reblog:function(){},favourite: function(){} }; 
        
        ` }} ></script>
            <script src={helper.url_for('/js/webmastodon.js')}></script>

        </Fragment>


    }
}


module.exports = Webmastodon;
