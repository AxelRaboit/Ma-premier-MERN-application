import React, { useState, useEffect, Fragment } from 'react'
import RoomCard from './RoomCard'
import { Link } from 'react-router-dom';


const Rooms = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('/api/rooms')
            const json = await data.json()
            console.log(json)
            setRooms(json)
        }

        fetchData()
    }, [])

    return (
        <Fragment>
            {rooms.map(room => (
                <Link key={room._id} to={room._id}>
                    <RoomCard room={room}></RoomCard>
                </Link>
            ))}
        </Fragment>
    )
}

export default Rooms