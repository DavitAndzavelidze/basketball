import article from "./images/article.jpg";
import article2 from "./images/article2.jpg";
import "./Article.css";

function Article() {
  return (
    <>
      <div className="article__container">
        <img className="article__image" src={article} alt="article-img" />
        <div className="article__box">
          <h3 className="article__title">Georgia Basketball</h3>
          <p className="article__text">
            Comfort and aesthetic looks stuff built with top quality material
            and professional worker, one of the best collection in 2022. Comfort
            and aesthetic looks stuff built with top quality material and
            professional worker, one of the best collection in 2022.
          </p>
          <button className="article__btn">Details</button>
        </div>
      </div>
      <div className="article__container reverse">
        <img className="article__image" src={article2} alt="article-img" />
        <div className="article__box box-reverse">
          <h3 className="article__title">Georgia Basketball</h3>
          <p className="article__text">
            Comfort and aesthetic looks stuff built with top quality material
            and professional worker, one of the best collection in 2022. Comfort
            and aesthetic looks stuff built with top quality material and
            professional worker, one of the best collection in 2022.
          </p>
          <button className="article__btn">Details</button>
        </div>
      </div>
    </>
  );
}

export default Article;
