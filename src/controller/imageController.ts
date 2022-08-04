import { promises as fsPromises } from 'fs'
import path from 'path'
import sharp from 'sharp'

const fullImagePath = path.join(__dirname, '../../assets/images')
const thumbImagePath = path.join(__dirname, '../../assets/thumb')

// Check if the image is existing or Not
const checkImageExists = async (imgName: string): Promise<boolean> => {
   try {
      await fsPromises.access(`${fullImagePath}/${imgName}.jpg`)
      return true
   } catch {
      return false
   }
}

// Check if the image already resezed or Not
const checkThumbExists = async (
   imgName: string,
   imgWidth: string,
   imgHeight: string
): Promise<boolean> => {
   try {
      await fsPromises.access(
         `${thumbImagePath}/${imgName}-${imgWidth}-${imgHeight}.jpg`
      )
      return true
   } catch {
      return false
   }
}

// Sharp Function to resize the image
const resizeImage = async (
   inputPath: string,
   width: number,
   height: number,
   outputPath: string
): Promise<string | null> => {
   try {
      await sharp(inputPath)
         .resize(width, height)
         .toFormat('jpg')
         .toFile(outputPath)
      return null
   } catch {
      return "Can't resize this image, Please try again..."
   }
}

export {
   fullImagePath,
   thumbImagePath,
   checkImageExists,
   checkThumbExists,
   resizeImage
}
