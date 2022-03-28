import styled from "styled-components"

const Navbar = () => {
    return (
       <Wrapper>
           <Container>
               Logo
           </Container>
            <LoginButton>
                Login
            </LoginButton>
       </Wrapper>
    )
}
export default Navbar

const Wrapper = styled.nav`
width: 100%;
display: flex;
justify-content: space-between;
/* padding: 0 20px; */
`

const Container = styled.div`
padding: 20px;
font-size: 25px;
color: White;
`

const LoginButton = styled.div`
padding: 20px;
font-size: 25px;
color: White;

cursor: pointer;


`