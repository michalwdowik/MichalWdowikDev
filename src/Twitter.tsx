import { Timeline } from "react-twitter-widgets";

export const MyTwitterProfile = () => (
  <div style={{marginBottom: '4rem', marginTop: '4rem'}}>

    <Timeline
      dataSource={{ sourceType: "profile", screenName: "michalwdowik" }}
      options={{ theme: 'dark', width: "350", height: '500'}}
      />
      </div>
  );