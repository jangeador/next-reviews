import Heading from "@/components/heading";

export default function StardewValleyPage() {
  return (
    <>
      <Heading>Stardew Valley</Heading>
      <img
        src="/images/stardew-valley.jpg"
        alt=""
        width="640"
        height={360}
        className="mb-2 rounded"
      />
      <p>Here we'll list all the review for Stardew Valley</p>
    </>
  );
}
