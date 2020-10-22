import React from "react";
import PageTitle from "../components/PageTitle";

const Groups: React.FC = () => {
  return (
    <div>
      <PageTitle
        heading="Groups"
        subheading="Manage groups in your organization"
        showCreateAction={false}
        icon={"pe-7s-folder icon-gradient bg-happy-itmeo"}
      />
    </div>
  );
};

export default Groups;
