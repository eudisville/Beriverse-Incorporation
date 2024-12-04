import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Cursor.css';

function Cursor({ cursorVariant }) {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    // Variants pour Framer Motion
    const variants = {
        default: {
            x: mousePosition.x - 10, // Ajuster pour centrer le curseur
            y: mousePosition.y - 10,
            height: 20,
            width: 20,
            backgroundColor: 'white',
        },
        text: {
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            height: 150,
            width: 150,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
    };

    return (
        <motion.div
            className="cursor"
            variants={variants}
            animate={cursorVariant} // Passez le variant en prop
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
    );
}

export default Cursor;