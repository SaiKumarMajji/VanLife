import { redirect } from "react-router-dom"

function mutateResponse(pathname){

  const response = redirect(pathname)
 
  response.body = true
  return response
 
}
export { mutateResponse as redirect }
