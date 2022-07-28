export const UPDATE = "UPDATE"
export const GET_SINGLE_PRODUCT = "GET_SINGLE_PRODUCT"


export const updateAction = () => {
    return {
        type: UPDATE,
    }
}

export const getSingleProductActionWithThunk = (id) => {

    const endPoint = process.env.REACT_APP_BE_URL +"/"+id

    return async (dispatch) => {
        try{
            const response = await fetch(endPoint)
            const singleProduct = await response.json()
           
            
            
            dispatch({
                type:GET_SINGLE_PRODUCT,
                payload:singleProduct
            })
          
            } catch (error) {
              console.log(error)
            }
    }
   
}