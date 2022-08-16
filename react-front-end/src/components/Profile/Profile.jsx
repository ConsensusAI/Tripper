import React, { useContext } from "react";
import { AppContext } from "../hooks/useAppContext";
import { ProfileEvents } from "../ProfileEvents";
import "./Profile.css";

export const Profile = () => {
  const { plans } = useContext(AppContext);

  return (
    <div className="wrapper-profile">
      <div className="profile">
        {plans.length > 0 ? (
          <>
            <h2><b>My Plans:</b></h2>
          </>
        ) : (
          <h3>No plans to show, go create a plan!</h3>
        )}
        <ul>
          <div className="profileParent">
            {plans.map((item) => {
              console.log("item:", item);
              return (
                <div className="profileList">
                  <li key={item.id}>
                    {item.name}
                    <div className="profileList2">
                    <ProfileEvents key={item.id} plan_id={item.id} />
                    </div>
                  </li>
                </div>
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
};
