import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Fetchitems from '../components/Fetchitems'
import LoadingSpinner from '../components/LoadingSpinner'
import { useSelector } from 'react-redux'



const App = () => {

  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <div>
      <Header />
      <Fetchitems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </div>
  )
}

export default App;
