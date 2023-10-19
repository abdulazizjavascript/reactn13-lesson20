import request from "@/server";
import axios, { AxiosError } from "axios";

type Props = {
  params: { [id: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props) {
  let { data } = await request.get(`category/${params.categoryId}`);
  return {
    title: data.name,
  };
}

const CategoryPage = async ({ params }: { params: { categoryId: string } }) => {
  try {
    let { data } = await request.get(`category/${params.categoryId}`);
    return (
      <div>
        <h1 className="text-center">{data.name}</h1>
      </div>
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    } else {
      throw new Error((error as Error)?.message);
    }
  }
};

export default CategoryPage;
