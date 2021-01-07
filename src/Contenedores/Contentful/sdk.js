import * as contentful from "contentful";
import * as contentfulManagement from "contentful-management";

const SPACE_ID = '4j0b6xts7s00';
const ENVIRONMENT = 'master';
const ACCESS_TOKEN = 'LDcpxu4XvBSx6V8RlE4pQoZtD5htIValdSyokTSl0MM';
const ACCESS_TOKEN_MANAGEMENT = 'CFPAT-lQxHvkbDfcH9UXSHejDaDwgv4AVEROY_AUQdG2jhEkE';
const CONTENT_TYPE = 'workers';


const client = contentful.createClient({
    space: SPACE_ID,
    environment: ENVIRONMENT, // defaults to 'master' if not set
    accessToken: ACCESS_TOKEN
  });
  const clientManagement = contentfulManagement.createClient({
      accessToken: ACCESS_TOKEN_MANAGEMENT
  })

  export function getEntries(){
    return client.getEntries({
        content_type: CONTENT_TYPE
      }).then((result) => {
          console.log('info', result.items);
          return result.items;
      })
        .then((items) => {
            return dataTransformer(items);
        })
      .catch((err) => {
          console.error(err);
          return []
      });
  }

  function dataTransformer(items){
      return items.map((item) => {
          return itemTransformer(item)
      });

  }

  function itemTransformer({fields, sys}){
      return{
          ...fields,
          idEmployee: sys.idEmployee,
          createdAt: sys.createdAt,
          updatedAt: sys.updatedAt
      };
  }

    export function createEntry(payload) {
        return clientManagement
        .getSpace(SPACE_ID)
        .then((space) => space.getEnvironment(ENVIRONMENT))
        .then((environment) =>
            environment.createEntry(CONTENT_TYPE, bodyTransformer(payload))
        )
        .then((entry) => entry.publish())
        .catch((err) => {
            console.error(err);
        });
    }
  
  function bodyTransformer(payload) {
    const entries = Object.entries(payload);
    let fields = {};
    entries.forEach(([key, value]) => {
      fields[key] = {
        'en-US': value,
      };
    });
    return { fields };
  }