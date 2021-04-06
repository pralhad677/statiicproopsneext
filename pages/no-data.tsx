import React from 'react'
import Style from '../styles/Home.module.css'

import  {NextPage} from 'next'

interface InitialProps {
  
}
interface Props extends InitialProps {}

let noData:NextPage<Props,InitialProps>=(props)=> {
  return (
    <div>
      <h1 className={Style.h1}>hi jacob</h1>
    </div>
  )
}
noData.getInitialProps = async () => ({
 
})

export default noData
