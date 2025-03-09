import BookList from "@/components/BookList";
import BookOverView from "@/components/BookOverView";
import { sampleBooks } from "../../../constants/indexx";

const Home = () => {
  return (
    <>
      <BookOverView {...sampleBooks[0]} />
      <BookList
        title="Latest Book"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </>
  );
};

export default Home;
