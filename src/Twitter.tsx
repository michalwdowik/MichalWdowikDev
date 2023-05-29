import { Timeline } from "react-twitter-widgets";

export const MyTwitterProfile = () => (
    <Timeline
      dataSource={{ sourceType: "profile", screenName: "michalwdowik" }}
      options={{ width: "384", height: "600"}}
    />
  );