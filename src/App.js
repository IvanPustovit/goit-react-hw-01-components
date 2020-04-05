import React from "react";
import Profile from "./components/Profile/Profile";
import user from "./db/user.json";
import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./db/statistical-data.json";
import FriendList from "./components/FriendList/FriendList";
import friendsData from "./db/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import itemsData from "./db/transactions.json";

const App = () => {
  return (
    <>
      <Profile user={user} />,
      <Statistics title="Upload stats" stats={statisticalData} />,
      <FriendList friends={friendsData} />
      <TransactionHistory items={itemsData} />
    </>
  );
};

export default App;
