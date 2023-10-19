"use client";

import { useState } from "react";

const FilterComp = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <h1>FilterComp</h1>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default FilterComp;
