/**
 * Webmastodon comment JSX component.
 * @module layout/comment/webmastodon
 */
const { Component, Fragment } = require('inferno');
const { cacheComponent } = require('hexo-component-inferno/lib/util/cache');


class WebmentionTimeline extends Component {
    render() {

        const { helper } = this.props;
        const { __ } = helper;
        const script = `
            var webmentionTimelineMessages = {
               "into_the_fediverse" : "${__('comment.webmention-timeline.into_the_fediverse')}"
            };
        `;

        return <Fragment>
            <div class="timeline webmention-timeline">
            </div>

            <script dangerouslySetInnerHTML={{
                __html: script}} ></script>
            <script src={helper.url_for('/js/webmention-timeline.js')}></script>

        </Fragment>


    }
}


module.exports = WebmentionTimeline;
