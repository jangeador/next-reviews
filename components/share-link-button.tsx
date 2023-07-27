"use client";
export default function ShareLinkButton() {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <button
      onClick={handleClick}
      className="px-2 py-1 text-sm border rounded text-slate-500 hover:bg-orange-100 hover:text-orange-700"
    >
      Share Link
    </button>
  );
}
