import React from 'react'
import PortfolioCard from '../../components/cards/PortfolioCard'

export default function Portoflio() {
  const projects = [
    { img: require('../../assets/images/project-1.jpg'), title: 'Finance', category: 'Web development' },
    { img: require('../../assets/images/project-2.png'), title: 'Orizon', category: 'Web development' },
    { img: require('../../assets/images/project-3.jpg'), title: 'Fundo', category: 'Web design' },
    { img: require('../../assets/images/project-4.png'), title: 'Brawlhalla', category: 'Applications' },
    { img: require('../../assets/images/project-5.png'), title: 'DSM.', category: 'Web design' },
    { img: require('../../assets/images/project-6.png'), title: 'MetaSpark', category: 'Web design' },
    { img: require('../../assets/images/project-7.png'), title: 'Summary', category: 'Web development' },
    { img: require('../../assets/images/project-8.jpg'), title: 'Task Manager', category: 'Applications' },
    { img: require('../../assets/images/project-9.png'), title: 'Arrival', category: 'Web development' },
  ]
  return (

    <article className="portfolio active" data-page="portfolio">

      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">

        <ul className="filter-list">

          <li className="filter-item">
            <button className="active" data-filter-btn>All</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Web design</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Applications</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Web development</button>
          </li>

        </ul>

        <div className="filter-select-box">

          <button className="filter-select" data-select>

            <div className="select-value" data-selecct-value>Select category</div>

            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>

          </button>

          <ul className="select-list">

            <li className="select-item">
              <button data-select-item>All</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web design</button>
            </li>

            <li className="select-item">
              <button data-select-item>Applications</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web development</button>
            </li>

          </ul>

        </div>

        <ul className="project-list">

          {projects.map((project, index) => {
            return <PortfolioCard key={index} image={project.img} title={project.title} category={project.category} />
          })}

          {/* <li className="project-item  active" data-filter-item data-category="web development">
          <a href="#">

            <figure className="project-img">
              <div className="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img src="./assets/images/project-1.jpg" alt="finance" loading="lazy" />
            </figure>

            <h3 className="project-title">Finance</h3>

            <p className="project-category">Web development</p>

          </a>
        </li>

        <li className="project-item  active" data-filter-item data-category="web development">
          <a href="#">

            <figure className="project-img">
              <div className="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img src="./assets/images/project-2.png" alt="orizon" loading="lazy"/>
            </figure>

            <h3 className="project-title">Orizon</h3>

            <p className="project-category">Web development</p>

          </a>
        </li>

        <li className="project-item  active" data-filter-item data-category="web design">
          <a href="#">

            <figure className="project-img">
              <div className="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img src="./assets/images/project-3.jpg" alt="fundo" loading="lazy"/>
            </figure>

            <h3 className="project-title">Fundo</h3>

            <p className="project-category">Web design</p>

          </a>
        </li>

        <li className="project-item  active" data-filter-item data-category="applications">
          <a href="#">

            <figure className="project-img">
              <div className="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img src="./assets/images/project-4.png" alt="brawlhalla" loading="lazy"/>
            </figure>

            <h3 className="project-title">Brawlhalla</h3>

            <p className="project-category">Applications</p>

          </a>
        </li>

        <li className="project-item  active" data-filter-item data-category="web design">
          <a href="#">

            <figure className="project-img">
              <div className="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img src="./assets/images/project-5.png" alt="dsm." loading="lazy"/>
            </figure>

            <h3 className="project-title">DSM.</h3>

            <p className="project-category">Web design</p>

          </a>
        </li>

        <li className="project-item  active" data-filter-item data-category="web design">
          <a href="#">

            <figure className="project-img">
              <div className="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img src="./assets/images/project-6.png" alt="metaspark" loading="lazy"/>
            </figure>

            <h3 className="project-title">MetaSpark</h3>

            <p className="project-category">Web design</p>

          </a>
        </li>

        <li className="project-item  active" data-filter-item data-category="web development">
          <a href="#">

            <figure className="project-img">
              <div className="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img src="./assets/images/project-7.png" alt="summary" loading="lazy"/>
            </figure>

            <h3 className="project-title">Summary</h3>

            <p className="project-category">Web development</p>

          </a>
        </li>

        <li className="project-item  active" data-filter-item data-category="applications">
          <a href="#">

            <figure className="project-img">
              <div className="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img src="./assets/images/project-8.jpg" alt="task manager" loading="lazy"/>
            </figure>

            <h3 className="project-title">Task Manager</h3>

            <p className="project-category">Applications</p>

          </a>
        </li>

        <li className="project-item  active" data-filter-item data-category="web development">
          <a href="#">

            <figure className="project-img">
              <div className="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img src="./assets/images/project-9.png" alt="arrival" loading="lazy"/>
            </figure>

            <h3 className="project-title">Arrival</h3>

            <p className="project-category">Web development</p>

          </a>
        </li> */}

        </ul>

      </section>

    </article>

  )
}
