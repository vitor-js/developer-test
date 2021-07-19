
import { Response, Request } from "express";
import {getData} from '../service/getData'

interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  cpf: number;
  age: number;
  gender: string;
  email: string;
  phone: number;
  escolaridade?: string;
}

let customers: Customer[] = getData()


export function getCustomer(req: Request, res: Response) {
    return res.json({data:customers})
}

export function getUserId(req: Request, res: Response) {
    const {id} = req.params
    try {
        const customer = customers.find(customer => customer.id ===  parseInt(id))
        if(!customer) {
            return res.status(404).json({error:'Customer not found'})
        }
        return res.status(200).json({data:customer})
    }catch (err) {
        return res.status(500).json({error:`Internal error ${err}`})
    }
}

export function createCustomer(req: Request, res: Response) {
    try {
        const {firstName,lastName,cpf,age,gender,email,phone,escolaridade} = req.body
        const customerExist = customers.find(customer => customer.email ===  email)
        if(customerExist) {
            return res.status(400).json({error:'User Exist'})
        }
        const lastItem = customers[customers.length -1]
        const id = lastItem.id + 1
        const data  = {
            id:id,
            firstName, 
            lastName, 
            cpf, 
            age, 
            gender,
            email,
            phone,
            escolaridade: escolaridade ? escolaridade: null
        }
        customers.push(data)
        return res.status(200).json({data:customers})
    } catch (err) {
        return res.status(500).json({error:`Internal error ${err}`})
    }
  
}

export function deleteCustomer(req:Request, res: Response) {
    try {
        const {id} = req.params;
        const customerExist = customers.find(customer => customer.id ===  parseInt(id))
    
        if(!customerExist) {
            return res.status(404).json({error:'Customer not found'})
        }
        const listIndex = customers.findIndex(card => card.id === parseInt(id) )
        customers.splice(listIndex,1)
        return res.status(200).json({
            data:customers
        })
    }
    catch (err) {
        return res.status(500).json({error:`Internal error ${err}`})
    }
    
}

export function updateCustomer(req:Request, res:Response) {
    try {
        const {id,firstName,lastName,cpf,age,gender,email,phone,escolaridade} = req.body
        const customerExist = customers.find(customer => customer.id ===  parseInt(id))
        if(!customerExist) {
            return res.status(404).json({error:'Customer not found'})
        }
    
        const updateCard = {
            id:parseInt(id),
            firstName:firstName ? firstName : customerExist?.firstName, 
            lastName:lastName ? lastName : customerExist?.lastName, 
            cpf:cpf ? cpf : customerExist?.cpf, 
            age:age ? age : customerExist?.age, 
            gender: gender ? gender : customerExist?.gender, 
            email:email ? email : customerExist?.email, 
            phone: phone ? phone : customerExist?.phone, 
            escolaridade: escolaridade ? escolaridade : customerExist?.escolaridade ? customerExist.escolaridade : null
          }
    
        const index = customers.findIndex(customer => customer.id == parseInt(id))
        customers[index] = updateCard
        res.status(200).json({data:customers})
    }catch (err) {
        return res.status(500).json({error:`Internal error ${err}`})
    }
   
}
