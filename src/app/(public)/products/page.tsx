"use client";

import { useRouter, useSearchParams } from "next/navigation";

const Products = () => {
  const router = useRouter();
  const search = useSearchParams();
  console.log(search.get("page"));
  console.log(search.get("limit"));

  const changePage = (page: number) => {
    router.push(`/products/?page=${page}`);
  };

  return (
    <div>
      <h1 className="text-center">Products</h1>
      <button
        className="border-1 px-5 py-2 bg-[red]"
        onClick={() => changePage(1)}
      >
        1
      </button>
      <button
        className="border-1 px-5 py-2 bg-[blue]"
        onClick={() => changePage(2)}
      >
        2
      </button>
    </div>
  );
};

export default Products;
