import React from 'react'
import Style from '../styles/Home.module.css'
import { ParsedUrlQuery } from 'querystring'
import fs from 'fs/promises'
import path from 'path'
import jsonfile from 'jsonfile'

import  {NextPage,GetStaticPropsResult,GetStaticPathsResult} from 'next'
import { array } from '../data/dummy.backend';

interface Data {
  name:string,
  id:string
}
interface InitialProps{
    array:Data[]
}
// let d:InitialProps = {
//     array: [
//         {name:'jacob',id:'1'}
//     ]
// }
   

interface Props extends InitialProps {
  
}

interface IParams extends ParsedUrlQuery {
    pug: string
}

let Pug:NextPage<Props,InitialProps>=(props)=> {
  console.log('props.array',props.array)
  return (
    <div>
      <h1 className={Style.h1}>hi jacob</h1>
    </div>
  )
}




export async function getStaticProps(context): Promise<GetStaticPropsResult<InitialProps>> {
  let {params} = context
  let dynamicId = params.pug
  var arr:InitialProps;
  let myFUnc =(data)=>{
    arr=data
    console.log('arr',arr.array)
  }
  console.log('arr',arr)
  
    try{
    const Path = path.resolve(process.cwd(),'data','array.txt')//you can use path.join() too
    //process.cwd => gives current working directory and then using 'data' to move into data folder inside of working directory
    console.log(Path)
    var data1:string= (await fs.readFile(Path)).toString()
    //    var data2 = data1.array
    console.log('data1',data1)
    jsonfile.readFile(Path, function (err, obj) {
      if (err) console.error(err)
      // console.log( obj.array.forEach(x=>console.log(x)))
      myFUnc(obj)
    })

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
    // let array = arr.array.find(item=>item.id ===dynamicId)
    console.log('arrayOnly',array)
    //execution order confusing x
    return {
        props: {
          // array
           array:[{name:'jacob',id:'1'}],
          // array:arr.array
            
        },
        revalidate:10,
       
      
       
        //revalidate means in every 10 second server sends a new new file to client in production but in development it generates new file on each request
    };}

    export async function getStaticPaths(context): Promise<GetStaticPathsResult<IParams>> {
    return  {
          paths: [
              {
                  params:{
                      pug:'1'
                  },
                  
              },
              {
              params:{
                pug:'2'
            }
          },
          {
            params:{
              pug:'3'
          }
          }
          ],
          fallback:false
      }
      }
  


export default Pug
