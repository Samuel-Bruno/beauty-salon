import { createBrowserRouter } from "react-router-dom"
import ApiRoutes from "./apps/api/routes"
import UiRoutes from "./apps/ui/routes"


const routes = createBrowserRouter(
  [
    ...UiRoutes,
    ...ApiRoutes
  ]
)

export default routes