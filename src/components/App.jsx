import dataSet from "../data";
import ProfileCard from "components/Profile";

import StatisticsCard from "./Statistics/Statistics";

import FriendList from "components/FriendList";
import TransactionHistory from "components/TransactionHistory";


const { user } = dataSet;

export const App = () => {
  return (
    <>
   <ProfileCard
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    < StatisticsCard title="Upload stats" stats={dataSet.statistics}
      />
      < FriendList friends={dataSet.friends}
      />
      <TransactionHistory items={dataSet.transactions}/>
</>
  );
};
