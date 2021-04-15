import React from 'react'
import Style from '../styles/Home.module.css'

import  {NextPage, GetServerSidePropsResult} from 'next'
import { Context } from 'node:vm'
import { redirect } from 'next/dist/next-server/server/api-utils'

interface InitialProps {
  name:string
}
interface Props extends InitialProps {}

let serverSideProps:NextPage<Props,InitialProps>=(props)=> {
    if(!props.name){
        return <h1>not found:true</h1>
    }
  return (
    <div>
      <h1 className={Style.h1}>{props.name}</h1>
    </div>
  )
}

export async function getServerSideProps(context:Context): Promise<GetServerSidePropsResult<InitialProps>> {
    console.log(context.params) 
   
    var a:number=1;
    if(a === 0){
        console.log('redirect')
        return {
            redirect:{
                statusCode:301,
                destination:'/no-data'
            }
        }
    }
    if(a === undefined){
        console.log('notFound')
        return {
            notFound:true
        }
    }
return  {
  
    props:{
        name:'jacob'
    }
}
}

export default serverSideProps
