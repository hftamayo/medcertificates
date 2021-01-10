import * as contentful from 'contentful';
import { ACCESS_TOKEN, CONTENT_TYPE, ENVIRONMENT, SPACE_ID } from './utils';

const client = contentful.createClient({
  space: SPACE_ID,
  environment: ENVIRONMENT, // defaults to 'master' if not set
  accessToken: ACCESS_TOKEN,
});

export function getEntries() {
  return client
    .getEntries({
      content_type: CONTENT_TYPE,
    })
    .then(({ items }) => {
      return dataTransformer(items);
    })
    .catch((err) => {
      console.error(err);
      return [];
    });
}

function dataTransformer(items) {
  return items.map((item) => {
    return itemTransformer(item);
  });
}

function itemTransformer({ fields, sys }) {
  return {
    ...fields,
    id: sys.id,
    createdAt: sys.createdAt,
    updatedAt: sys.updatedAt,
    cast: fields.cast
      ? fields.cast.map((actor) => {
          return {
            ...actor.fields,
            id: actor.sys.id,
            createdAt: actor.sys.createdAt,
            updatedAt: actor.sys.updatedAt,
          };
        })
      : [],
    poster: fields.poster
      ? {
          ...fields.poster.fields,
          id: fields.poster.sys.id,
          createdAt: fields.poster.sys.createdAt,
          updatedAt: fields.poster.sys.updatedAt,
        }
      : {},
  };
}
