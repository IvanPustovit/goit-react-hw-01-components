import React, { Fragment } from "react";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import statisticalData from "./Statistics/statistical-data.json";
import FriendList from "./FriendList/FriendList";
import friendsData from "./FriendList/friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import itemsData from "./TransactionHistory/transactions.json";

const App = () => {
  return (
    <Fragment>
      <Profile />,
      <Statistics title="Upload stats" stats={statisticalData} />,
      <FriendList friends={friendsData} />
      <TransactionHistory items={itemsData} />
    </Fragment>
  );
};

export default App;
