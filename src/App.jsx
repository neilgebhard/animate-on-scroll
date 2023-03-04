import { useEffect, useRef, useState } from 'react'

const Box = () => {
  const ref = useRef()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = (e) => {
      const triggerBottom = window.innerHeight * 0.8
      const boxTop = ref.current.getBoundingClientRect().top
      if (boxTop < triggerBottom) setShow(true)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`h-52 duration-1000 bg-green-800 flex items-center justify-center text-xl border m-4 text-white transition ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
      ref={ref}
    >
      Animate
    </div>
  )
}

function App() {
  return (
    <div>
      {[...Array(10)].map((_, idx) => (
        <div
          className='h-52 flex items-center justify-center border m-4 text-xl'
          key={idx}
        >
          Box
        </div>
      ))}
      <Box />
      {[...Array(5)].map((_, idx) => (
        <div
          className='h-52 flex items-center justify-center border m-4 text-xl'
          key={idx}
        >
          Box
        </div>
      ))}
    </div>
  )
}

export default App
