import React from 'react'
import Style from '../styles/Home.module.css'
import fs from 'fs/promises'
import path from 'path'

import  {NextPage,GetStaticProps,GetStaticPropsResult} from 'next'

import {array} from '../data/dummy.backend'


interface PageData {
  id:string,
  title:string
}
// interface Dummy{
//   Products:Array<PageData>
// }
interface InitialProps {
  Products:Array<PageData>,
  message:string
}
interface Props extends InitialProps {}

let Index:NextPage<Props,InitialProps>=({Products,message})=> {
  console.log('Products',Products)
  return (
    <div>
      <h1 className={Style.h1}>hi jacob: {message}</h1>
      {
        Products.map(item=>{
          console.log(item.id)
          return <li key={item.id}>{item.title}</li>
               
        })
      }
    </div>
  )
}
// Index.getInitialProps = async () => ({
//  Products:[]
// }) gives an error :You cannot use getStaticProps with getInitialProps



export async function GetStaticProps(context): Promise<GetStaticPropsResult<InitialProps>> {
  try{
  const Path = path.resolve(process.cwd(),'data','jacob.txt')//you can use path.join() too
  //process.cwd => gives current working directory and then using 'data' to move into data folder inside of working directory
  console.log(Path)
  var data1:string = (await fs.readFile(Path)).toString()
  }catch(err){
    console.log(err)
  }
  if(!data1){
   return {
     redirect:{
       statusCode:301,
       destination:'/no-data'
     }
   }
  }
  if(data1.length=== 0){
    return {
      notFound:true
    }
  }
  return {
      props: {
          Products:array,
          message:data1
      },
      revalidate:10,
     
    
     
      //revalidate means in every 10 second server sends a new new file to client in production but in development it generates new file on each request
  };
}

export default Index
