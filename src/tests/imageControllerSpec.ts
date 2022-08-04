import path from 'path'
import {
   checkImageExists,
   checkThumbExists,
   resizeImage
} from '../controller/imageController'

describe('Image Controller', () => {
   it('Check if Image is Existing', async () => {
      const imgName = 'encenadaport'
      expect(await checkImageExists(imgName)).toBe(true)
   })

   it('Check if Image Thumb is Existing', async () => {
      const imgName = 'encenadaport'
      const imgWidth = '100'
      const imgHeight = '100'
      expect(await checkThumbExists(imgName, imgWidth, imgHeight)).toBe(false)
   })

   it('resizes image', async () => {
      const imagePath = path.join(
         __dirname,
         '../../assets/images/palmtunnel.jpg'
      )
      const rezizedImagePath = path.join(
         __dirname,
         '../../assets/thumb/palmtunnel-200-200.jpg'
      )
      const resizedImage = await resizeImage(
         imagePath,
         200,
         200,
         rezizedImagePath
      )
      expect(resizedImage).toBeFalsy()
   })
})
