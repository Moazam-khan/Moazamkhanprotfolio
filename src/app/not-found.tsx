import Link from "next/link";
import { Arrow } from "@/components/Icon";

export default function NotFound() {
  return (
    <div className="container inner-page not-found">
      <p className="eyebrow">404 / A small detour</p>
      <h1>
        This page took
        <br />
        <em>a different route.</em>
      </h1>
      <p>
        The page you’re looking for isn’t here. Let’s get you back to the work.
      </p>
      <Link className="button" href="/">
        Back to the homepage <Arrow direction="left" />
      </Link>
    </div>
  );
}
