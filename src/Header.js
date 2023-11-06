import './App.css';
import bannerImg from "./restauranfood.jpg";

function Header() {
  return (
    <header>
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>
          <a href='/booking'><button aria-label="On Click">Reserve Table</button></a>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </section>
    </header>
  );
}

export default Header;
