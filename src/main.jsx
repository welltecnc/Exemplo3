import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/*DEPENDENCIAS PARA CRIAR AS ROTAS */
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Aluno from './routes/Aluno.jsx'


{/*CRIANDO A FUNÇÃO CREATEBROWESERROUTER */}

const router=createBrowserRouter([
  {
    //CHAMANDO OS ELEMENTOS PAI
    path:'/',element:<App/>,
    errorElement:<Error/>,

    //CHAMANDO OS ELEMENTOS FILHOS
    children:[
      //CRIANDO A ROTA HOME 
      {path:'/', element:<Home/>},
      //CRIANDO A ROTA ALUNO
      {path:'/aluno',element:<Aluno/>}
    ]

  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*CRIANDO O PROPS QUE SERÁ RENDERIZADO*/}
    <RouterProvider router={router} />
  </StrictMode>,
)
