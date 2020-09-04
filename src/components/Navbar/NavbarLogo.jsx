import React, { useRef, useState, useEffect, useCallback } from 'react'
import { render } from 'react-dom'
import { useTransition, animated } from 'react-spring'
import './NavbarLogo.css';

function NavbarLogo() {
    const ref = useRef([])
    const [secondWord, setSecond] = useState([])
    const transitions = useTransition(secondWord, null, {
      from: { opacity: 1, height: 32, innerHeight: 32, transform: 'perspective(600px) rotateX(0deg)', color: '#9bcfeb' },
      enter: [
        { opacity: 1, height: 32, innerHeight: 32 },
        { transform: 'perspective(600px) rotateX(0deg)', color: "#a1559c"},
      ],
      leave: [{ color: '#a1559c' }, { opacity: 0, height: 0}],
      update: { color: '#3ea354' },
    })
  
    const reset = useCallback(() => {
      ref.current.map(clearTimeout)
      ref.current = []
      setSecond([]);
      ref.current.push(setTimeout(() => setSecond(['Inspiration']), 2500))
      ref.current.push(setTimeout(() => setSecond(['Page']), 2500))
      ref.current.push(setTimeout(() => setSecond(['Thoughts']), 5000))
    }, [])
  
    useEffect(() => void reset(), [])
  
    return (
      <div>
        {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
          <animated.div className="transitions-item" key={key} style={rest}>
            <animated.div style={{ overflow: 'hidden', height: innerHeight, paddingTop: '5px' }}>{secondWord}</animated.div>
          </animated.div>
        ))}
      </div>
    )
}

export default NavbarLogo;