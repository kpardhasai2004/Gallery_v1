import Link from "next/link";
import { getImages } from "../get_images";

export default async function Layout({ children }) {
  const { results } = await getImages();
  return (
    <div style={{display: 'flex', gap: '2rem'}}>
      <ul>
        {results.map(({ title }) => (
          <li key={`${title}`}>
            <Link href={`http://localhost:3000/${title}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <div className="bg-white">
        {children}
      </div>
    </div>
  );
}