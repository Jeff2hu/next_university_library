import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { sampleBooks } from "../../constants/indexx";
import BookCover from "./BookCover";
import { Button } from "./ui/button";

type BookCardProps = (typeof sampleBooks)[number] & {
  isLoanedBook?: boolean;
};

const BookCard = ({
  id,
  title,
  author,
  genre,
  rating,
  color,
  cover,
  isLoanedBook = false,
}: BookCardProps) => {
  return (
    <li className="hover:scale-105 hover:translate-y-[-10px] transition-all duration-150">
      <Link
        href={`/books/${id}`}
        className={cn(isLoanedBook && "w-full flex flex-col items-center")}
      >
        <BookCover coverColor={color} coverImage={cover} />
      </Link>

      <div className={cn("mt-4", !isLoanedBook && "xs:max-w-40 max-w-28")}>
        <p className="book-title">{title}</p>
        <p className="book-genre">{genre}</p>
      </div>

      {isLoanedBook && (
        <div className="mt-3">
          <div className="book-loaned">
            <Image
              src="/icons/calendar.svg"
              alt="calendar"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-light-100">11 days to return</p>
          </div>

          <Button className="book-btn">Download Receipt</Button>
        </div>
      )}
    </li>
  );
};

export default BookCard;
