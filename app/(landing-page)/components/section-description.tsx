export default function SectionDescription({
  title,
  caption,
  titleClass,
  captionClass,
}: IProps) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <p className={`text-foreground font-black ${titleClass}`}>{title}</p>
      <p className={`text-center text-caption ${captionClass}`}>{caption}</p>
    </div>
  );
}

interface IProps {
  title: string;
  caption: string;
  titleClass: string;
  captionClass: string;
}
