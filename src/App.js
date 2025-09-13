import "./App.scss";
import Header from "./Header";

import imgEarth from "./assets/img/hero-earth.png";
import imgRocket from "./assets/img/rocket.svg";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="hero">
          <div className="hero__container container">
            <div className="hero__left">
              <h1 className="hero__title">
                Discover the vast
                <br /> expanses of{" "}
                <span className="hero__title--pink">space</span>
              </h1>
              <p className="hero__subtitle">
                Where the possibilities are{" "}
                <span className="hero__subtitle--yellow">endless!</span>
              </p>
              <a href="/" className="hero__button button">
                Learn more
              </a>
            </div>
            <div className="hero__right">
              <img src={imgEarth} alt="Hero" className="hero__image" />
            </div>
          </div>
        </section>

        <section className="offers">
          <div className="container">
            <h2 className="offers__title title">Offers</h2>

            <div class="features">
              <div class="features__item features__item--first features__item--full">
                <h2 class="features__title features__title--full">
                  Move the borders of reality!
                </h2>
                <p class="features__subtitle features__subtitle--full">
                  Go on a space adventure - it's possible with us!
                </p>
                <a href="/" class=" button">
                  Read more
                </a>
              </div>
              <div class="features__item features__item--second">
                <h2 class="features__title">
                  Space is not just stars and planets
                </h2>
                <p class="features__subtitle">Go on a space adventure </p>
                <a href="/" class=" button">
                  Read more
                </a>
              </div>
              <div class="features__item features__item--third">
                <h2 class="features__title">For those who dream of stars </h2>
                <p class="features__subtitle ">
                  Our offer: make your dream come true
                </p>
                <a href="/" class=" button">
                  Read more
                </a>
              </div>
              <div class="features__item features__item--fourth features__item--full">
                <h2 class="features__title features__title--full">
                  Fulfill your fantastic dreams
                </h2>
                <p class="features__subtitle features__subtitle--full">
                  Space has never been so close
                </p>
                <a href="/" class=" button">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="prefooter">
          <div className="container">
            <h2 className="prefooter__title title">
              Embark on a space journey
            </h2>
            <p className="prefooter__text">
              Travelling into space is one of the most exciting and
              unforgettable adventures that can change your life forever. And if
              you have ever dreamed of exploring stars, planets and galaxies,
              then our company is ready to help you realize this dream. We offer
              a unique experience that will allow you to go on a space journey
              and see all the secrets of the universe. We guarantee that every
              moment in space will be filled with incredible impressions,
              excitement and new discoveries. Our team of professionals takes
              care of your safety and comfort so that you can fully enjoy your
              adventure in space. We offer various options for space excursions.
            </p>

            <div class="expandable">
              <input
                type="checkbox"
                id="expand-toggle"
                class="expandable__checkbox"
              />

              <p class="prefooter__text expandable__content">
                Вот дополнительный текст, который появляется при клике на
                кнопку. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>

              <label for="expand-toggle" class="expandable__button">
                <span class="expandable__text--show">Read more</span>
                <span class="expandable__text--hide">Read less</span>
              </label>
            </div>
          </div>
        </section>
      </main>

      <footer class="footer">
        <img src={imgRocket} alt="Footer Logo" width="70" />
        <p class="footer__text">Exciting space adventure!</p>
      </footer>
    </>
  );
}

export default App;
