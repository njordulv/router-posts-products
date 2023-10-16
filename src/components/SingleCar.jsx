import { useParams } from "react-router-dom"
import carsData from "../data/carsData"
import NotFound from "./NotFound"

const SingleCar = () => {
  const params = useParams()
  const cars = carsData.find((car) => car.slug === params.carSlug)
  const { make, model, engine, year, vin, price, image } = cars

  if (!cars) {
    return <NotFound />
  }

  return (
    <div className="wrapper">
      <h1>{make}</h1>
      <div className="car-item">
        <img src={image} alt={make} width="288" height="162" />
        <div className="car-content">
          <div>
            <span>Make: </span>
            {make}
          </div>
          <div>
            <span>Model: </span>
            {model}
          </div>
          <div>
            <span>Engine: </span>
            {engine}L.
          </div>
          <div>
            <span>Year: </span>
            {year}
          </div>
          <div>
            <span>VIN: </span>
            {vin}
          </div>
          <div>
            <span>Price: </span>${price}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCar
