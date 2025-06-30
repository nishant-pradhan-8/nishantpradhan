import Link from "next/link";

export default function Blogs() {
  return (
    <div className="mt-[300px]">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl text-center">
          You&apos;ve landed on my Blog Page but currently, I haven&apos;t wrote
          any.
        </h1>
        <Link href="/" className="text-xl ">
          Go Back
        </Link>
      </div>
    </div>
  );
}
