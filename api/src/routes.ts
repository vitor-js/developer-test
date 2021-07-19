import * as core from "express-serve-static-core";

import {createCustomer,getCustomer,deleteCustomer, updateCustomer, getUserId} from '../src/controller/customer.controller'

export function routes(app: core.Express) {
    
    app.get("/", getCustomer)
    app.get("/:id", getUserId)
    app.post("/create-customer", createCustomer)
    app.put("/update-customer", updateCustomer)
    app.delete("/:id", deleteCustomer)
    
}