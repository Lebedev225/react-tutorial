import ReactDom from "react-dom";
// CSS
import "./index.css";

//Initialize variables

const firstBook = {
    title: "Engineering in plain sight",
    author: "Michael Morpugo",
    img: "https://images-na.ssl-images-amazon.com/images/I/61xWTfK4EKL._AC_UL210_SR195,210_.jpg",
};

const secondBook = {
    title: "Atomic Habits",
    author: "James Clear",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL210_SR195,210_.jpg",
};

function BookList() {
    return (
        <section className="booklist">
            <Book
                img={firstBook.img}
                title={firstBook.title}
                author={firstBook.author}
            />
            <Book
                img={secondBook.img}
                title={secondBook.title}
                author={secondBook.author}
            />
        </section>
    );
}

const Book = (props) => {
    return (
        <article className="book">
            <img src={props.img} alt="" />
            <h1>{props.title}</h1>
            <h1>{props.author}</h1>
        </article>
    );
};

ReactDom.render(<BookList />, document.getElementById("root"));
