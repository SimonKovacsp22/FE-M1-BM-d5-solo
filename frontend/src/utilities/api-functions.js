export const getProducts = async (endPoint) =>{
    try{
    const response = await fetch(endPoint)
    const data = await response.json()
    
    
    return data
  
    } catch (error) {
      console.log(error)
    }
     
  }

  export const postProduct = async (data,endPoint) =>{
    try{
    const response =await fetch(endPoint,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    },

    )
    return await response.json()
   
  
    } catch (error) {
      console.log(error)
    }
     
  }

  export const getSingleProduct = async (endPoint) =>{
    try{
    const response = await fetch(endPoint)
    const data = await response.json()
   
    
    
    return data
  
    } catch (error) {
      console.log(error)
    }
     
  }


  
  export const handleFileSend = async(selectedFile,id)=> {
    const body = new FormData()
    body.append("product_img",selectedFile)
    await fetch("http://localhost:3002/files/imageUrl/" + id,{method:'POST',body})
  }