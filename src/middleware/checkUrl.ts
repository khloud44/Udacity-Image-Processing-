import { Request, Response, NextFunction } from 'express'

const isNum = (stringNumber: string): boolean => {
   const isNumber: boolean =
      stringNumber.match(/^[0-9]+$/) != null ? true : false
   return isNumber
}

const checkURL = (req: Request, res: Response, next: NextFunction) => {
   const imgName: string = req.query.imgName as string
   const imgHeight: string = req.query.height as string
   const imgWidth: string = req.query.width as string

   if (!imgName) {
      return res.status(400).send('Missing Image Name')
   }
   if (!imgHeight || !imgWidth) {
      return res.status(400).send('Missing the width and the height')
   }
   if (!isNum(imgWidth) || Number(imgWidth) <= 0) {
      return res.status(400).send("Invalid Image's width")
   }
   if (Number(imgHeight) <= 0 || !isNum(imgHeight)) {
      return res.status(400).send("Invalid Image's width")
   }

   next()
}

export default checkURL
