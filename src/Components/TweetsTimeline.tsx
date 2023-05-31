import { Timeline } from 'react-twitter-widgets'

const TweetsTimeline = () => (
    <div className="my-16">
        <Timeline
            dataSource={{ sourceType: 'profile', screenName: 'michalwdowik' }}
            options={{ theme: 'dark', width: '350', height: '500' }}
        />
    </div>
)

export default TweetsTimeline
