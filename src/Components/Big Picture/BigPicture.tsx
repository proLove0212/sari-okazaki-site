import React, { useState, useEffect } from 'react'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

//Styles
import { BigPictureArea, CarouselArea, LeftArrow, RightArrow } from './BigPicture.styles'

import image1 from "./carousel_images/image1.jpg"
import image2 from "./carousel_images/image2.jpg"
/*import image3 from './carousel_images/image3.jpg' */
import image4 from './carousel_images/image4.jpg'
import image5 from './carousel_images/image5.jpg'

const imageNames = [ image1, image2, image4, image5 ] 

const BigPicture = () => {

    const [ currentImage, setCurrentImage ] = useState(0)
    const [ animationOn, setAnimationOn ] = useState(false)

    useEffect(() => {
        imageNames.forEach((picture) => {
            const img = new Image()
            img.src = picture
        })
    }, []) 

    const triggerAnimation = () => {
        setAnimationOn(true)
        setTimeout(() => {
            setAnimationOn(false)
        }, 1100)
    }

    const nextImage = () => {
        triggerAnimation()

        if (currentImage === imageNames.length - 1) {
            setCurrentImage(0) 
        } else {
            setCurrentImage(currentImage + 1)
        }
    }

    const prevImage = () => {
        triggerAnimation()

        if (currentImage === 0) {
            setCurrentImage(imageNames.length - 1)
        }
        else {
            setCurrentImage(currentImage - 1)
        }
    }

    return(
        <BigPictureArea>
            <CarouselArea animationOn={animationOn} currentImage={imageNames[currentImage]}></CarouselArea>
            <LeftArrow onClick={prevImage}><IoIosArrowBack></IoIosArrowBack></LeftArrow>
            <RightArrow onClick={nextImage}><IoIosArrowForward></IoIosArrowForward></RightArrow>
        </BigPictureArea>
    )
}

export default BigPicture