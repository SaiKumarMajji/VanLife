import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider,createBrowserRouter,createRoutesFromElements, Route, Link } from 'react-router-dom';
import Vans, { loader as vansLoader } from "./pages/Vans/Vans"
import Home from "./pages/Home";
import About from "./pages/About";
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail"
import Dashboard,  { loader as dashboardLoader } from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVans, { loader as hostVansLoader} from "./pages/Host/HostVans"
import HostVanDetail, { loader as hostVanDetailLoader } from "./pages/Host/HostVanDetail"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPricing from "./pages/Host/HostVanPricing.jsx"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import NotFound from './pages/NotFound';
import Error from "./components/Error"
import Login, { loader as loginLoader, action as loginAction } from "./pages/Login"
import { redirect} from "./utils"
import "./server.js"


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="login" element={<Login />}  loader={loginLoader} action={loginAction} />
    <Route path="vans" element={<Vans />} errorElement={<Error />} loader={vansLoader} />
    <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />

    <Route path="host" element={<HostLayout />}>
      <Route index element={<Dashboard />}  loader= {dashboardLoader} />
      <Route path="income" element={<Income />}  loader={async (request) => await redirect(request)} />
      <Route path="reviews" element={<Reviews />}  loader={async (request) => await redirect(request)} />
      <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
      <Route path="vans/:id" element={<HostVanDetail />}  loader={hostVanDetailLoader} >
        <Route index element={<HostVanInfo />}  loader={async (request) => await redirect(request)} />
        <Route path="pricing" element={<HostVanPricing />}  loader={async (request) => await redirect(request)} />
        <Route path="photos" element={<HostVanPhotos />}  loader={async (request) => await redirect(request)} />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);