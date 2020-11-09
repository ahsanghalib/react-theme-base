import React from "react";
import PageTitle from "../components/PageTitle";

const ManageUsers = () => {
  return (
    <div>
      <PageTitle
        heading="Manage Users"
        subheading="Manage admin users"
        showCreateAction={true}
        createActionLabel={"Add User"}
        icon={"pe-7s-users icon-gradient bg-happy-itmeo"}
      />
    </div>
  );
};

export default ManageUsers;
