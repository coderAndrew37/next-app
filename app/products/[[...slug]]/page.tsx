import React from "react";

interface Props {
  params: {
    slug: string[];
  };
  searchParams: {
    sortOrder: string;
  };
}

const productSlug = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      {" "}
      productSlug {slug} {sortOrder}
    </div>
  );
};

export default productSlug;
