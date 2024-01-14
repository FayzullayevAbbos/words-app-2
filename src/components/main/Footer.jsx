import React from 'react'

function Footer({api}) {

  
  return (
    api[0] ? <a href={api[0].sourceUrls[0]}>{api[0].sourceUrls[0]}</a> : ""
    
  )
}

export default Footer