/**
 * Webmastodon comment JSX component.
 * @module layout/comment/webmastodon
 */
const { Component, Fragment } = require('inferno');
const { cacheComponent } = require('hexo-component-inferno/lib/util/cache');


class WebmentionTimeline extends Component {
    render() {

        const { helper } = this.props;

        return <Fragment>
            <div class="timeline webmention-timeline">
            </div>    

            <script src={helper.url_for('/js/webmention-timeline.js')}></script>

        </Fragment>


    }
}


module.exports = WebmentionTimeline;
