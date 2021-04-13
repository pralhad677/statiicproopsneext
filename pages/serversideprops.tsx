import React from 'react'
import Style from '../styles/Home.module.css'

import  {NextPage,GetServerSideProps} from 'next'

interface InitialProps {
  text:string
}
interface Props extends InitialProps {}

let serverSideProps:NextPage<Props,InitialProps>=(props)=> {
  return (
    <div>
      <h1 className={Style.h1}>{props.text}</h1>
    </div>
  )
}

export async function getServerSideProps(context): Promise<GetServerSideProps<InitialProps>> {
return 
}

export default serverSideProps
