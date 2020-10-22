import React from "react";
import PageTitle from "../components/PageTitle";

const Dashboard: React.FC = () => {
  return (
    <div>
      <PageTitle
        heading="Dashboard"
        subheading="Javat365 Dashboard"
        showCreateAction={false}
        icon={"pe-7s-graph2 icon-gradient bg-happy-itmeo"}
      />
    </div>
  );
};

export default Dashboard;
