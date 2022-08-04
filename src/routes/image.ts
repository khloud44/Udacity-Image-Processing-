import express from 'express'
import path from 'path'
import {
   checkImageExists,
   checkThumbExists,
   resizeImage,
   fullImagePath,
   thumbImagePath
} from '../controller/imageController'
import checkURL from '../middleware/checkUrl'

const image = express.Router()

image.get(
   '/',
   checkURL,
   async (req: express.Request, res: express.Response): Promise<void> => {
      const isImageExists: boolean = await checkImageExists(
         req.query.imgName as string
      )
      const isThumbExists = await checkThumbExists(
         req.query.imgName as string,
         req.query.width as string,
         req.query.height as string
      )

      if (isImageExists) {
         if (!isThumbExists) {
            try {
               await resizeImage(
                  path.resolve(fullImagePath, `${req.query.imgName}.jpg`),
                  Number(req.query.width),
                  Number(req.query.height),
                  path.resolve(
                     thumbImagePath,
                     `${req.query.imgName}-${req.query.width}-${req.query.height}.jpg`
                  )
               )
               res.status(200).sendFile(
                  path.resolve(
                     thumbImagePath,
                     `${req.query.imgName}-${req.query.width}-${req.query.height}.jpg`
                  )
               )
            } catch {
               res.status(400).send('Error while image Proccessing')
            }
         } else {
            res.status(200).sendFile(
               path.resolve(
                  thumbImagePath,
                  `${req.query.imgName}-${req.query.width}-${req.query.height}.jpg`
               )
            )
         }
      } else {
         res.status(400).send('Invalid Image Name')
      }
   }
)

export default image
