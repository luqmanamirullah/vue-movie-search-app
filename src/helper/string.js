/**
 *
 * @param {{}} query
 * @description query must be an object
 * @returns
 */
export const queryToUrl = (query) => {
  let queries = [];

  Object.keys(query).forEach((key) => {
    if (query[key] != undefined) queries.push(`${key}=${query[key]}`);
  });

  return queries.join("&");
};
