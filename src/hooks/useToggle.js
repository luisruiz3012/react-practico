import React, { useState } from 'react'

const [toggle, setToggle] = useState(false)

const handleToggle = () => {
    setToggle(!toggle)
}

export default handleToggle