import React, {useEffect} from 'react'
import { navigate } from "gatsby";

const Redirect = ({ path }) => {
  useEffect(() => {
    navigate(path)
  }, []);

  return (
    <div />
  )
}

export default Redirect
