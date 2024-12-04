import React, { useState } from 'react'
import Header from '../components/Software/Header'
import Cursor from '../components/Cursor/Cursor'

function Software() {
  const [cursorVariant, setCursorVariant] = useState('default');

    const textEnter = () => setCursorVariant('text');
    const textLeave = () => setCursorVariant('default');

  return (
    <div>
        <Cursor cursorVariant={cursorVariant} />
        <Header/>
    </div>
  )
}

export default Software