import img1 from "../../assets/earth.svg"
import img2 from "../../assets/fire.svg"
import img3 from "../../assets/square.svg"
import gsap from "gsap"
import { useEffect } from "react"

const MouseTrail = () => {

    useEffect(() => {
        const imgs = [img1, img2, img3]
        let currentIndex = 0
        let lastX = 0
        let lastY = 0
        const createImage = (x: number, y: number) => {
            const img = document.createElement('img')
            img.classList.add('image-trail')
            img.src = imgs[currentIndex]
            document.querySelector('.trail_container')?.appendChild(img)
            currentIndex = (currentIndex + 1) % imgs.length

            gsap.set(img, {
                x: x,
                y: y,
                scale: 0,
                opacity: 0
            })

            gsap.to(img, {
                scale: 1,
                opacity: 1,
                duration: 0.4,
                ease: 'power2.in'
            })
            gsap.to(img, {
                scale: 0.2,
                duration: 0.5,
                opacity: 0,
                ease: 'power2.in',
                delay: 0.5,
            })
        }
        const handleMouseMove = (e: MouseEvent) => {
            const diffX = e.clientX - lastX
            const diffY = e.clientY - lastY
            const distance = Math.sqrt(diffX * diffX + diffY * diffY)
            if (distance > 60) {
                createImage(e.clientX, e.clientY)
                lastX = e.clientX
                lastY = e.clientY
            }

        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <div className="bg-neutral-900 relative h-full">
            <div className="trail_container absolute  w-full h-full overflow-hidden" />
        </div>
    )
}

export default MouseTrail