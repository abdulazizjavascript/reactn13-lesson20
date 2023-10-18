import request from "@/server";

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
  let { data } = await request.get(`category/${params.categoryId}`);

  return (
    <div>
      <h1 className="text-center">{data.name}</h1>
    </div>
  );
};

export default CategoryPage;
