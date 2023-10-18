import { AxiosResponse } from "axios";
import request from "@/server";
import Category from "@/types/category";
import CategoryCard from "@/components/card/CategoryCard";

const Home = async () => {
  const { data }: AxiosResponse<Category[]> = await request.get("category");
  return (
    <main>
      <h1 className="text-center">All categories</h1>
      <div className="grid grid-cols-4 gap-4">
        {data?.map((category) => (
          <CategoryCard key={category._id} {...category} />
        ))}
      </div>
    </main>
  );
};

export default Home;
