import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function MouseFollower() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [cursorVariant, setCursorVariant] = useState("default")

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            backgroundColor: "rgba(255, 87, 34, 0.3)",
            border: "1px solid rgba(255, 87, 34, 0.5)",
        },
        text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            mixBlendMode: "difference"
        }
    }

    return (
        <>
            <motion.div
                className="cursor"
                variants={variants}
                animate={cursorVariant}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    height: 32,
                    width: 32,
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    backdropFilter: 'blur(2px)'
                }}
            />
            {/* Spotlight effect */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 87, 34, 0.06), transparent 80%)`
                }}
            />
        </>
    )
}
