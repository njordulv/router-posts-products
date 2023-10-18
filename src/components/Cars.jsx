import { Link, useLocation, useNavigate } from "react-router-dom"
import { PiEngine, PiListNumbersLight } from "react-icons/pi"
import { IoCalendarNumberOutline, IoCarSport } from "react-icons/io5"
import { FaHandHoldingDollar } from "react-icons/fa6"
import queryString from "query-string"
import carsData from "../data/carsData"
import { useState, useEffect } from "react"

const sortedKeys = ["year", "id", "make", "engine", "price"]

const sortedCars = (cars, key) => {
  const sortedArray = [...cars]
  if (!key || !sortedKeys.includes(key)) {
    return sortedArray
  }
  sortedArray.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  return sortedArray
}

const Cars = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const query = queryString.parse(location.search)
  const [sortKey, setSortKey] = useState(query.sort)
  const [sortData, setSortData] = useState(sortedCars(carsData, sortKey))

  useEffect(() => {
    const updatedQuery = queryString.stringify({ sort: sortKey })
    window.history.replaceState({}, "", `?${updatedQuery}`)
    setSortData(sortedCars(carsData, sortKey))

    if (!sortedKeys.includes(sortKey)) {
      navigate(".")
      setSortKey()
    }
  }, [sortKey, navigate])

  const handlerSort = (key) => {
    setSortKey(key)
  }

  return (
    <div className="wrapper">
      <h1>Cars available</h1>
      <div className="center">
        {sortKey ? `Sorted by ${sortKey}` : "Sorted by default"}
      </div>
      <div className="buttons">
        <button
          onClick={() => handlerSort("year")}
          type="button"
          className={sortKey === "year" ? "active" : ""}
        >
          <IoCalendarNumberOutline />
        </button>
        <button
          onClick={() => handlerSort("id")}
          type="button"
          className={sortKey === "id" ? "active" : ""}
        >
          <PiListNumbersLight />
        </button>
        <button
          onClick={() => handlerSort("make")}
          type="button"
          className={sortKey === "make" ? "active" : ""}
        >
          <IoCarSport />
        </button>
        <button
          onClick={() => handlerSort("engine")}
          type="button"
          className={sortKey === "engine" ? "active" : ""}
        >
          <PiEngine />
        </button>
        <button
          onClick={() => handlerSort("price")}
          type="button"
          className={sortKey === "price" ? "active" : ""}
        >
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
        {sortData.map((car) => (
          <Link to={car.slug} key={car.id} className="item">
            <span className={sortKey === "id" ? "active" : ""}>{car.id}</span>
            <span className={sortKey === "make" ? "active" : ""}>
              <b>{car.make}</b>
            </span>
            <span className={sortKey === "model" ? "active" : ""}>
              <b>{car.model}</b>
            </span>
            <span className={sortKey === "year" ? "active" : ""}>
              {car.year}
            </span>
            <span className={sortKey === "engine" ? "active" : ""}>
              {car.engine}
              <i>l.</i>
            </span>
            <span className={sortKey === "price" ? "active" : ""}>
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
