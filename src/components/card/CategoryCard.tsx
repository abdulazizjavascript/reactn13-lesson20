import Category from "@/types/category";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ _id, image, name }: Category) => {
  return (
    <div>
      <div className="relative" style={{ height: "200px" }}>
        <Image
          src={image.url}
          fill
          alt={name}
          style={{objectFit: 'cover'}}
        />
      </div>
      <Link href={`categories/${_id}`}>{name}</Link>
    </div>
  );
};

export default CategoryCard;
