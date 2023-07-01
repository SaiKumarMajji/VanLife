import { redirect } from "react-router-dom"

function mutateResponse(path){
    const response = redirect("/login?message=You must log in first.")
    response.body = true
    return response
  }
  
export { mutateResponse as redirect }