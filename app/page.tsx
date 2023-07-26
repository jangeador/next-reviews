import Heading from "@/components/heading";
import Link from "next/link";
import {getFeaturedReview} from "@/lib/reviews";

export default async function HomePage() {
  const review = await getFeaturedReview();
  console.log("Rendering...");
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p>Only the best indie games, reviewed for you</p>
      <div className="bg-white border rounded shadow hover:shadow-xl">
        <Link
          href={`/reviews/${review.slug}`}
          className="flex flex-col sm:flex-row"
        >
          <img
            src={review.image}
            alt=""
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="py-1 font-semibold text-center font-orbitron sm:px-2">{review.title}</h2>
        </Link>
      </div>
    </>
  );
}
