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
  //haile main herunu parne kura cahi k ho vanda kheri ni dyamic page ma hamile dyanamic aprt id lai acces agrne techniuq vanko chai 2 ta x vanum
  //euta chai useRouter ko through bata router and then router.query.dynamicId(pid)
  
  //arko vaneko chai getStaticProps ma 
  //context le params dido rexa ani tesbata direct params.pid grda hunxa
    const {params} = context
    console.log(params)
return  
}

export default Hello
