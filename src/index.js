import ReactDom from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
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
