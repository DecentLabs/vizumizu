import wine3 from '../assets/svg/wine3.svg'
import rectangle from '../assets/svg/rectangle.svg'
import circle from '../assets/svg/circle.svg'
import triangle from '../assets/svg/triangle.svg'
import leaf from '../assets/svg/leaf.svg'
import moon from '../assets/svg/moon.svg'
import star from '../assets/svg/star.svg'

const images = [
  {
    name: 'wine3',
    width: 34,
    height: 100,
    src: wine3
  },
  {
    name: 'rect',
    width: 102,
    height: 102,
    src: rectangle
  },
  {
    name: 'circle',
    width: 102,
    height: 102,
    src: circle
  },
  {
    name: 'triangle',
    width: 100,
    height: 102,
    src: triangle
  },
  {
    name: 'leaf',
    width: 100,
    height: 102,
    src: leaf
  },
  {
    name: 'moon',
    width: 100,
    height: 102,
    src: moon
  },
  {
    name: 'star',
    width: 100,
    height: 102,
    src: star
  }
]

export default images

export function findByName (name) {
  return images.find(image => image.name === name)
}
