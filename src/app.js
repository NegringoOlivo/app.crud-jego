import express from "express"
import employeesRoutes from "./routes/employees.routes.js"
import indexRouter from "./routes/index.routes.js"



const app = express()

app.use(express.json())//Se utiliza para obteniendo los datos se conviertan a json
app.use(indexRouter)
app.use("/api",employeesRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: "EndPoint not found"
    })
})


export default app