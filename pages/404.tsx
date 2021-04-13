import React from 'react'
import Style from '../styles/Home.module.css'

import  {NextPage} from 'next'

interface InitialProps {
  text:string
}
interface Props extends InitialProps {}

let noData:NextPage<Props,InitialProps>=(props)=> {
  return (
    <div>
      <h1 className={Style.h1}>{props.text}</h1>
    </div>
  )
}
noData.getInitialProps = async () => ({
 text:'page not found'
})

export default noData
