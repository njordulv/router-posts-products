import { useNavigate, useParams } from "react-router-dom"
import carsData from "../data/carsData"
import { useEffect } from "react"

const SingleCar = () => {
  const navigate = useNavigate()
  const params = useParams()
  const cars = carsData.find((car) => car.slug === params.carSlug)

  useEffect(() => {
    if (!cars) {
      navigate("..", { relative: "path" })
    }
  }, [cars, navigate])

  return (
    <div className="wrapper">
      <h1>{cars?.make}</h1>
      <div className="car-item">
        <img src={cars?.image} alt={cars?.make} width="288" height="162" />
        <div className="car-content">
          <div>
            <span>Make: </span>
            {cars?.make}
          </div>
          <div>
            <span>Model: </span>
            {cars?.model}
          </div>
          <div>
            <span>Engine: </span>
            {cars?.engine}L.
          </div>
          <div>
            <span>Year: </span>
            {cars?.year}
          </div>
          <div>
            <span>VIN: </span>
            {cars?.vin}
          </div>
          <div>
            <span>Price: </span>${cars?.price}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCar
