import React from 'react'

const Title = () => {
    console.log("rendering title")
  return (
    <h2>useCallback hook</h2>
  )
}

export default React.memo(Title)
