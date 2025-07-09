export default function Background() {
  return (
    <div className="absolute flex min-w-full h-full z-0">
      <div className="w-1/2 bg-white min-h-full" />
      <div className="w-1/2 bg-secondary min-h-full" />
    </div>
  );
}
