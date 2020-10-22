import React from "react";
import PageTitle from "../components/PageTitle";

const Activities: React.FC = () => {
  return (
    <div>
      <PageTitle
        heading="Activities"
        subheading="Activities performed by users"
        showCreateAction={false}
        icon={"pe-7s-news-paper icon-gradient bg-happy-itmeo"}
      />
    </div>
  );
};

export default Activities;
