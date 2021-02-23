const { Component } = require('inferno');
const { cacheComponent } = require('hexo-component-inferno/lib/util/cache');

class Matataki extends Component {
    render() {
        const { page, plugin, head } = this.props;


        if (!head && plugin.clientId && plugin.clientSecret && page.matataki && page.matataki.token) {

            //cdnjs等并没有包含fanLocker.js, 所以还是不直接用cdn配置，而是另外指定
            const fanLockerJsUrl = plugin.fanLockerJsUrl ? plugin.fanLockerJsUrl : 'https://unpkg.com/fanlocker@latest/dist/fanlocker.js';
            return <Fragment>
                <script src={fanLockerJsUrl}></script>
                <script dangerouslySetInnerHTML={{
                    __html: `var fl = new FanLocker({
            clientId: '${plugin.clientId}',
            clientSecret: '${plugin.clientSecret}'
        });     
        ` }}></script>
            </Fragment>
        }

        return null;
    }
}


module.exports = Matataki;
