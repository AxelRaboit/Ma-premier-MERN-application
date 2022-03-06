import RoomModel from "../models/roomModel.js"

//CREATE A ROOM
export const addRoom = async (req, res) => {
    const room = new RoomModel(req.body)

    try {
        await room.save()
        res.send(room)
    }
    catch (err) {
        res.status(500).send(err)
    }
}

//READ ALL
export const getRooms = async (req, res) => {
    const rooms = await RoomModel.find({})

    //Pour rechercher par un nom specifique
    /* const rooms = await RoomModel.find({name: 'suite 19'}) */

    try {
        res.send(rooms);
    }
    catch (err) {
        res.status(500).send(err)
    }
}

//READ ONE
export const getRoom = async (req, res) => {
    const room = await RoomModel.find({_id: req.params.id})

    try {
        res.send(room[0]);
    }
    catch (err) {
        res.status(500).send(err)
    }
}

//UPDATE ROOM
export const updateRoom = async (req, res) => {
    const room = await RoomModel.findByIdAndUpdate(req.params.id, req.body)

    try {
        await room.save()
        res.send(room);
    }
    catch (err) {
        res.status(500).send(err)
    }
}

//DELETE ROOM
export const deleteRoom = async (req, res) => {
    const room = await RoomModel.findByIdAndDelete(req.params.id)

    //Bonus
    if(!room) {
        res.status(404).send('Aucune chambre trouvée.')
    }

    try {
        res.status(200).send();
    }
    catch (err) {
        res.status(500).send(err)
    }
}