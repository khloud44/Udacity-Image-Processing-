import express from 'express'
import image from './image'

const routes = express.Router()

routes.get('/', image)

export default routes
