import React from "react";
import ContentLoader from "react-content-loader";

const CategorySkeleton = ({ lg }) => {
  return (
    <ContentLoader
      width={lg ? "45%" : "30%"}
      height={250}
      viewBox="0 0 450 400"
      backgroundColor="rgba(242, 242, 242, 0.51)"
      foregroundColor="#dedede"
    >
      <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
      <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
      <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
    </ContentLoader>
  );
};

export default CategorySkeleton;
