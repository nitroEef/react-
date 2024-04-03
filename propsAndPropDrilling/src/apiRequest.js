

const apiRequest = async(url = '',optionsObj = null, errMsg = null) => {
    try{
        const response = await fetch (url, optionsObj);
        if(!response.ok) throw Error(`please reload the app`)
    
    }catch(err) {
        errMsg = err.message

    }finally{
        return errMsg

    }
 
}

// An asynchronous function named fetchData is defined.
// Inside fetchData, the URL and options for the API request are defined.
// The apiRequest function is called using the await keyword, which waits for the asynchronous operation to complete.
// If an error message is returned from apiRequest, it is logged to the console.
// If an exception occurs during the API request or error handling, it is caught and logged.






export default apiRequest
