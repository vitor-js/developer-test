import * as core from "express-serve-static-core";

import {createCustomer,getCustomer,deleteCustomer, updateCustomer} from '../src/controller/customer.controller'

export function routes(app: core.Express) {
    
    app.get("/", getCustomer)
    app.post("/create-customer", createCustomer)
    app.delete("/:id", deleteCustomer)
    app.put("/update-customer", updateCustomer)
}