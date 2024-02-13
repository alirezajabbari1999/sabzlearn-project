import Frontend from "./Pages/Frontend/Frontend"
import Home from "./Pages/Home/Home"
import Security from "./Pages/Security/Security"
import Python from "./Pages/Python/Python"
import Php from './Pages/Php/Php'
import LevelUp from "./Pages/LevelUp/LevelUp"


let routes = [
  {path: '/', element: <Home />},
  {path: '/frontend', element: <Frontend />},
  {path: '/security', element: <Security />},
  {path: '/python', element: <Python />},
  {path: '/php', element: <Php />},
  {path: '/levelup', element: <LevelUp />},
  // {path: '/Course/:id', element: <MainCourse />},

  // {path: '/About', element: <About /> , children:[
  //   {path: 'setting', element: <p>Setting Section</p>},
  //   {path: 'dashboard', element: <p>Dashboard Section</p>},
  // ]}
]

export default routes