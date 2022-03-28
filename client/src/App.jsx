import styled from 'styled-components'
import {Navbar, Welcome, Footer, Services, Transactions} from './components/index'

const App = () => {
  return (
    <Wrapper>
      <ComponentContainer>
        <Navbar />
        <Welcome />
      </ComponentContainer>
        <Services />
        <Transactions />
        <Footer />
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
max-width: 100%;

`

const ComponentContainer = styled.div`
max-width: 100%;
height: 100vh;
background-color:#0f0e13;
background-image: 
    radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
    radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
    radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%);
`