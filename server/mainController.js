module.exports = {
    getMenus: (req, res) => {
        const db = req.app.get('db')
        // console.log('hit')
        db.products.get_products()
        .then(foods => res.status(200).send(foods))
        .catch(err => res.status(500).send(err))
    },
    addNewReservation: (req, res) => {
        const {number_of_customer, date, time, customer_name, phone_number} = req.body
        const db = req.app.get('db')
        db.reservation.add_reservation(number_of_customer, date, time, customer_name, phone_number)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    }
}