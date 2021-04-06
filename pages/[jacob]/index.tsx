import React from 'react'
// import Style from '../styles/Home.module.css'
import Style from '../../styles/Home.module.css'

import  {NextPage,GetStaticPropsResult} from 'next'

interface InitialProps {
  
}
interface Props extends InitialProps {}

let Hello:NextPage<Props,InitialProps>=(props)=> {
  return (
    <div>
      <h1 className={Style.h1}>hi jacob</h1>
    </div>
  )
}

export async function getStaticProps(context): Promise<GetStaticPropsResult<InitialProps>> {
    const {params} = context
    console.log(params)
return  
}

export default Hello
