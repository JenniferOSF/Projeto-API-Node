export default function verifyUserType(req, res, next) {
    const { type } = req.body

    if (type === 'admin'){
        return res.status(400).json( { message: 'Ação invalida' })
    }

    next()
}