import { Link } from "react-router-dom"
import { PiEngine, PiListNumbersLight } from "react-icons/pi"
import { IoCalendarNumberOutline, IoCarSport } from "react-icons/io5"
import { FaHandHoldingDollar } from "react-icons/fa6"
import carsData from "../data/carsData"

const Cars = () => {
  return (
    <div className="wrapper">
      <h1>Cars available</h1>
      <div className="center">Sorted by </div>
      <div className="buttons">
        <button type="button">
          <IoCalendarNumberOutline />
        </button>
        <button type="button">
          <PiListNumbersLight />
        </button>
        <button type="button">
          <IoCarSport />
        </button>
        <button type="button">
          <PiEngine />
        </button>
        <button type="button">
          <FaHandHoldingDollar />
        </button>
      </div>
      <div className="car-titles">
        <span>Id</span>
        <span>Make</span>
        <span>Model</span>
        <span>Year</span>
        <span>Engine</span>
        <span>Price</span>
      </div>
      <div className="car-items">
        {carsData.map((car) => (
          <Link to={car.slug} key={car.id} className="item">
            <span>{car.id}</span>
            <span>{car.make}</span>
            <span>{car.model}</span>
            <span>{car.year}</span>
            <span>
              {car.engine}
              <i>l.</i>
            </span>
            <span>
              <i>$</i>
              {car.price}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Cars
