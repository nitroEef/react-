// App.js Update 

const myItem = listItems.filter((item)  => item.id === id)
const updateOption = {
  method: 'PATCH',
  headers: {
    'Content-TYpe':'application/json'
  },
  body:JSON.stringify({checked: myItem[0].checked})
}
const reqUrl = `${API_URL}/${id}`
const result = await apiRequest(reqUrl, updateOption);
if(result) setFetchError(result)



// In this code snippet:

// 1. `myItem` is defined as the result of filtering `listItems` array 
// based on a condition (`item.id === id`).
// 2. An `updateOption` object is created, containing options for making a
//  PATCH request to the API. It includes the method (`PATCH`), headers 
//  specifying that the content type is JSON, and a request body that 
//  contains the `checked` property of the first item in the `myItem`
//   array (assuming `myItem` is not empty).
// 3. `reqUrl` is defined as the concatenation of `API_URL` and the 
// provided `id`.
// 4. The `apiRequest` function is called asynchronously with the constructed
//  URL and the `updateOption` object as parameters.
// 5. If `result` is truthy (indicating an error message is returned),

// it sets the fetch error using `setFetchError`.

// This code appears to be updating an item with a specific `id` in 
// the backend API based on the `checked` property of the corresponding item in the `listItems` array.