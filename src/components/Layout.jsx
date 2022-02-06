import {useState} from 'react';

const Layout = () => {
  const [loading, setLoading ] = useState(false);
  
  return(
  <div className= "App">
      <NavBar/>
      <Outlet context={[loading, setLoading] />
      { loading ? <Loading/> : null}
    </div>
  )
}
export default Layout 