import React from 'react'
import { Card, Badge } from 'antd'
const { Meta } = Card

const imageStyle = {
    width: '300px',
    height: '350px',
    objectFit: 'cover'
}

const containerCard = {
    width: 300,
    margin: '1rem'
}

const RoomCard = ({ room }) => {
    return (
        <div style={containerCard}>
            <Badge count="PROMO">
                <Card
                    cover={
                        <img alt={room.name}
                            /* Getting random image from 300 to 1000 */
                            src={`https://source.unsplash.com/random/${Math.ceil(Math.random() * 1000 + 300)}x350/?bed`}
                            style={imageStyle}
                        />
                    }
                >
                    <Meta title={room.name.toUpperCase()} description={`Nombre de personnes maximum: ${room.maxPersons}`}></Meta>
                </Card>
            </Badge>
        </div>
    )
}

export default RoomCard
