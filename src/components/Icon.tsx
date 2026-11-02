import type { SVGProps } from "react";

export function Arrow({
  direction = "diagonal",
  ...props
}: SVGProps<SVGSVGElement> & {
  direction?: "diagonal" | "down" | "left" | "right";
}) {
  const paths = {
    diagonal: "M5 19 19 5M5 5h14v14",
    down: "M12 4v16m-6-6 6 6 6-6",
    left: "M20 12H4m6-6-6 6 6 6",
    right: "M4 12h16m-6-6 6 6-6 6",
  };
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={paths[direction]} />
    </svg>
  );
}

export function Plus({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 4v16M4 12h16" />
    </svg>
  );
}
