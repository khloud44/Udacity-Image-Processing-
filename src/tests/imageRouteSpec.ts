import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('Image Endpoint', () => {
   describe('Image does not exist', () => {
      it('get /images', async () => {
         const res = await request.get('/images')
         expect(res.status).toBe(400)
      })
      it('get /images?imgName=test', async () => {
         const res = await request.get('/images?imgName=test')
         expect(res.status).toBe(400)
      })
   })
   describe('get resized image', () => {
      it('get /images?imgName=santamonica&width=200&height=200', async () => {
         const res = await request.get(
            '/images?imgName=santamonica&width=200&height=200'
         )
         expect(res.status).toBe(200)
      })
   })
   describe('check if width and height are numbers or Not', () => {
      it('get /images?imgName=santamonica&width=aaa&height=bbb', async () => {
         const res = await request.get(
            '/images?imgName=santamonica&width=aaa&height=bbb'
         )
         expect(res.status).toBe(400)
      })
   })
})
