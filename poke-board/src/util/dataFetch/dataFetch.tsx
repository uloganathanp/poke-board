/**
 * Common method to fetch data
 * @param url
 * @returns - promise
 */
export async function dataFetch(url: string) {
  let result: any;
  await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        result = response.json();
      } else {
        result = [];
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return result;
}
