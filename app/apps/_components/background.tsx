export default function Background() {
  return (
    <div className="absolute flex w-full h-full -z-10">
      <div className="w-1/2 bg-white min-h-full" />
      <div className="w-1/2 bg-secondary min-h-full" />
    </div>
  );
}
