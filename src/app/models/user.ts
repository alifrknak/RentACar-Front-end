

export interface User {

  id: number
  first_name: string
  last_name: string
  email: string
  passwordSalt: string
  passwordHash: string
  status: boolean

}
