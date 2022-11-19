import ReactDom from "react-dom";

// CSS
import "./index.css";
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/61xWTfK4EKL._AC_UL210_SR195,210_.jpg"
    alt=""
  />
);

const Title = () => <h1>Engineering in plain sight</h1>;
const Author = () => <h1>Michael Morpugo</h1>;

ReactDom.render(<BookList />, document.getElementById("root"));
