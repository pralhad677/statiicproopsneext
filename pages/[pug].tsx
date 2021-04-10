import React from 'react'
import Style from '../styles/Home.module.css'
import { ParsedUrlQuery } from 'querystring'
import fs from 'fs/promises'
import path from 'path'
import jsonfile from 'jsonfile'

import  {NextPage,GetStaticPropsResult,GetStaticPathsResult} from 'next'
// import { array } from '../data/dummy.backend';

interface Data {
  name:string,
  id:string
}
interface InitialProps{
    array:Array<Data>
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
      {props.array.map(item=>{
        return <li key={item.id}>{item.name}:{item.id}</li>
      })}
    </div>
  )
}




export async function getStaticProps(context): Promise<GetStaticPropsResult<InitialProps>> {
  let {params} = context
  let dynamicId = params.pug
 
  
    try{
    var Path = path.resolve(process.cwd(),'data','array.txt')//you can use path.join() too
    //process.cwd => gives current working directory and then using 'data' to move into data folder inside of working directory
    console.log(Path)
    var data1:string= (await fs.readFile(Path)).toString()
    //    var data2 = data1.array
    console.log('data1',data1)
   

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
    console.log('arrayOnly')
    //execution order confusing x



    //ya hamile json.readFile grda ni hunxa but tyo async task vako le getStaticProps le surumai return object grdina ani tespaxi matra json,redFile le data return grxa so readFileSync use grya ho
    let myData = jsonfile.readFileSync(Path)
    console.group('myData',myData)
    
    let array1 = myData.array.find(item=>item.id ===dynamicId)
    console.log(array1)
    // var arr:InitialProps;
    // jsonfile.readFile(Path, function (err, obj) {
    //   if (err) console.error(err)
    //   // console.log( obj.array.forEach(x=>console.log(x)))
    //   myFUnc(obj)
    // })
    // let myFUnc =(data)=>{
    //   arr=data
    //   console.log('arr',arr.array)
    // }
    // console.log('arr',arr)

    
   
    return {
      
        props: {
          array:[array1]
        
          //  array:[{name:'jacob',id:'1'}],
        
            
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
