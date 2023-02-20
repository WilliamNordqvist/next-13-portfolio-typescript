import { request, gql } from 'graphql-request'

export type WorksProps = {
  description:string,
  githubLink:string,
  id:number,
  image: {
    url:string
  },
  link:string,
  name:string
}

const query = gql`
{
    caseCollection(order:id_ASC) {
      items {
        name
        description
        githubLink
        id
        link
        image {
          url
        }
      }
    }
  }
  
`
export const getCases = async (): Promise<WorksProps[]>  => {
    const {caseCollection: {items}} = await request<{caseCollection:{items:[WorksProps]}}>(`https://graphql.contentful.com/content/v1/spaces/dgbqz1h8siux?access_token=${process.env.ACCESS_TOKEN}`, query)
    return items
}
