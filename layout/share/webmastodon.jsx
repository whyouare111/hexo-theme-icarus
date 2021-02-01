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
                <a class="level-item button is-transparent is-marginless mastodon-reply" target="_blank" rel="me noopener" title="回复" href="####"><i class="fa fa-reply fa-fw"></i></a>
                <a class="level-item button is-transparent is-marginless mastodon-reblog" target="_blank" rel="me noopener" title="转嘟" href="####"><i class="fa fa-retweet fa-fw"></i></a>
                <a class="level-item button is-transparent is-marginless mastodon-favourite" target="_blank" rel="me noopener" title="喜欢" href="####"><i class="fas fa-star"></i></a>
            </div>
            <script dangerouslySetInnerHTML={{
                __html: `var webmastodonConfig = { 'mastodonBaseUrl':'${mastodonBaseUrl}','webmentionBaseUrl':'${webmentionBaseUrl}' }; 
        
        ` }} ></script>
            <script src={helper.url_for('/js/webmastodon.js')}></script>

        </Fragment>


    }
}


module.exports = Webmastodon;
