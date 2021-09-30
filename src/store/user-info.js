import React from "react";

export const UserInfoContext = React.createContext({});

export const UserInfoProvider = (props) => {
  return (
    <UserInfoContext.Provider value={{}}>
      {props.children}
    </UserInfoContext.Provider>
  );
};
