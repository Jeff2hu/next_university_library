import { cn } from "@/lib/utils";
import Image from "next/image";
import BookCoverSvg from "./BookCoverSvg";

type BookCoverVariant = "small" | "wide" | "extraSmall" | "medium" | "regular";

const variantStyles: Record<BookCoverVariant, string> = {
  small: "book-cover_small",
  wide: "book-cover_wide",
  extraSmall: "book-cover_extra_small",
  medium: "book-cover_medium",
  regular: "book-cover_regular",
};

interface BookCoverProps {
  className?: string;
  variant?: BookCoverVariant;
  coverColor: string;
  coverImage: string;
}

const BookCover = ({
  className,
  variant = "regular",
  coverColor = "#012B48",
  coverImage = "https://placehold.co/600x400",
}: BookCoverProps) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className
      )}
    >
      <BookCoverSvg coverColor={coverColor} />
      <div className="absolute z-10 left-[12%] w-[87.5%] h-[88%]">
        <Image
          src={coverImage}
          alt="book cover"
          fill
          className="object-cover rounded-sm"
        />
      </div>
    </div>
  );
};

export default BookCover;
