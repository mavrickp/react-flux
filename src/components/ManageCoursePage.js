import React from "react";

const ManageCoursePage = props => {
  return (
    <>
      <h2>Mage Course Page</h2>
      {props.match.params.slug}
    </>
  );
};

export default ManageCoursePage;
