import React, {useEffect} from 'react'

const Redirect = ({ path }) => {
  useEffect(() => {
    window.location.href = path
  }, []);

  return (
    <div />
  )
}

export default Redirect
