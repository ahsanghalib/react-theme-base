import React from "react";
import PageTitle from "../components/PageTitle";

const GroupRequests = () => {
  return (
    <div>
      <PageTitle
        heading="Group Requests"
        subheading="Group Requests"
        showCreateAction={false}
        icon={"pe-7s-bell icon-gradient bg-happy-itmeo"}
      />
    </div>
  );
};

export default GroupRequests;
