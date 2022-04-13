export default function Divider({ content }) {
  return (
    <div className="relative flex py-4 items-center">
      <div className="flex-grow border-t border-teal-600"></div>
      <span className="flex-shrink mx-4 text-teal-600 font-medium">
        {content}
      </span>
      <div className="flex-grow border-t border-teal-600"></div>
    </div>
  );
}
