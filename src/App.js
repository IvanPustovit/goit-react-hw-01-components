import React, { Fragment } from "react";
import Profile from "./Components/Profile/Profile";
import user from "./db/user.json";
import Statistics from "./Components/Statistics/Statistics";
import statisticalData from "./db/statistical-data.json";
import FriendList from "./Components/FriendList/FriendList";
import friendsData from "./db/friends.json";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";
import itemsData from "./db/transactions.json";

const App = () => {
  return (
    <Fragment>
      <Profile user={user} />,
      <Statistics title="Upload stats" stats={statisticalData} />,
      <FriendList friends={friendsData} />
      <TransactionHistory items={itemsData} />
    </Fragment>
  );
};

export default App;
