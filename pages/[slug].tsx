import React from 'react'
import Style from '../styles/Home.module.css'
import { ParsedUrlQuery } from 'querystring'
import fs from 'fs/promises'
import path from 'path'
// import Style from '../../styles/Home.module.css'

import  {NextPage,GetStaticPathsResult,GetStaticPropsResult} from 'next'

interface InitialProps {
  
}
interface Props extends InitialProps {}

interface IParams extends ParsedUrlQuery {
    slug: string
}

let Slug:NextPage<Props,InitialProps>=(props)=> {
  return (
    <div>
      <h1 className={Style.h1}>hi jacob</h1>
    </div>
  )
}
export async function getStaticProps(_context): Promise<GetStaticPropsResult<InitialProps>> {
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
         
      },
      revalidate:10,
     
    
     
      //revalidate means in every 10 second server sends a new new file to client in production but in development it generates new file on each request
  };}

export async function getStaticPaths(context): Promise<GetStaticPathsResult<IParams>> {


  //haile main herunu parne kura cahi k ho vanda kheri ni dyamic page ma hamile dyanamic aprt id lai acces agrne techniuq vanko chai 2 ta x vanum
  //euta chai useRouter ko through bata router and then router.query.dynamicId(pid)
  
  //arko vaneko chai getStaticProps ma 
  //context le params dido rexa ani tesbata direct params.pid grda hunxa


// console.log('cp',context.params)
//   const { slug } = context.params as IParams
    
    // console.log(slug)
return  {
    paths: [
        {
            params:{
                slug:'1'
            },
            
        },
        {
        params:{
          slug:'2'
      }
    },
    {
      params:{
        slug:'3'
    }
    }
    ],
    fallback:true
}
}


export default Slug



//note==> getStaticProps chai hamile kunai pani page le pre-rendering grda use garxa in the case where file is not dynamic means not edning with [anything].tsx 
//but yedi dynamic data from dyanamic path bata aako x vne ni getStaticPaths use grnu prxa along with getStaticProps eklai getStaticPaths wont work

