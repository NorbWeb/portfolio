import porfolioData from '../../../data/portfolio.json'
import './Projects.scss'



const RenderPortfolio = () => {

  return (
    <div className="images-container">
      {porfolioData.portfolio.map((port, index) => {
        return (
          <div key={index} className="image-box">
            <img
              src={port.cover}
              className="portfolio-image"
              alt={port.title}
            />
            <div className="content">
              <p className="title">{port.title}</p>
              <h4 className="description">{port.description}</h4>
              <p className='info'>{port.info}</p>

              <button className="btn" onClick={() => window.open(port.url)}>
                view
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RenderPortfolio
