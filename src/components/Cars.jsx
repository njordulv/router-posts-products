import { Link } from "react-router-dom"
import carsData from "../data/carsData"

const Cars = () => {
  return (
    <div className="wrapper">
      <h1>Cars</h1>
      <div className="car-items">
        {carsData.map((car) => (
          <Link to={car.slug} key={car.id} className="item">
            <span>{car.id}</span>
            {car.make}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Cars
