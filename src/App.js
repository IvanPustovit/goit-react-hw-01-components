import React, { Fragment } from "react";
import Profile from "./Components/Profile/Profile";
import Statistics from "./Components/Statistics/Statistics";
import statisticalData from "./Components/Statistics/statistical-data.json";
import FriendList from "./Components/FriendList/FriendList";
import friendsData from "./Components/FriendList/friends.json";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";
import itemsData from "./Components/TransactionHistory/transactions.json";

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
