import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreem from './screens/HomeScreen'


const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>

        <Container>
          <HomeScreem />
        </Container>


      </main>
      <Footer />

    </>
  );
}

export default App;
