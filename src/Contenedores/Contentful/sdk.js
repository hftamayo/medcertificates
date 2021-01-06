import * as contentful from "contentful";

const SPACE_ID = '4j0b6xts7s00';
const ENVIRONMENT = 'master';
const ACCESS_TOKEN = 'LDcpxu4XvBSx6V8RlE4pQoZtD5htIValdSyokTSl0MM';
const CONTENT_TYPE = 'workers';


const client = contentful.createClient({
    space: SPACE_ID,
    environment: ENVIRONMENT, // defaults to 'master' if not set
    accessToken: ACCESS_TOKEN
  })

  export function getEntries(){
    return client.getEntries({
        content_type: CONTENT_TYPE
      }).then((result) => {
          console.log('info', result.items);
          return result.items
      }).catch((err) => {
          console.error(err);
          return []
      });
  }


