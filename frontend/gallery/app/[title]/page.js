import Image from "next/image";
import { getImages } from "../get_images";

export async function generateStaticParams() {
  const pics = await getImages();
  return pics.results.map((p) => ({ title: p.title }));
}

async function getImage( title ) {
  const res = await fetch(`http://127.0.0.1:8000/api/gallery/${title}`);
  return res.json();
}

export default async function Page({ params }) {
  const { title,image } = await getImage(params.title,params.image);
  return (
    <div>
      <h1 className="text-black">the title is {title}</h1>
      <Image
        alt={`${title}`} 
        src={image} 
        width={200} 
        height={200}  
      />
    </div>
  );
}



