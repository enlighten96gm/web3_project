import styled from "styled-components"
import Loader from "../loader"
import React, {useContext} from 'react'
import {TransactionContext} from '../../context/transaction-context'

const Input = ({placeholder, name, type, value, handleChange}) => (
    <InputTag placeholder={placeholder} type={type} step='0.0001' value={value} onChange={(e) => handleChange(e, name)} />
)

const Welcome = () => {
    const { connectWallet, currentAccount, formData, handleChange, sendTransaction } = useContext(TransactionContext)
    console.log(currentAccount);
    const handleSubmit = () => {
        const { addressTo, amount, keyword, message} = formData
        if (!addressTo || !amount || !keyword || !message) return 

        sendTransaction()
    }
    return (
        <Wrapper>
            <MainContainer>
            <div>
            <TextContainer>Send crypto <br /> across the globe</TextContainer>
            {!currentAccount && 
            <WalletContainer onClick={connectWallet}>
                Connect Wallet
            </WalletContainer>}
            
            </div>
            <div>
                <CardComponent>
                    <CardHead>
                        <div>E</div>
                        <div>i</div>
                    </CardHead>
                    <CardContent>
                        <div>Address</div>
                        <div>Etherium</div>
                    </CardContent>
                </CardComponent>
                <FormComponent>
                    <Input placeholder={'Address To'} name='addressTo' type='text' handleChange={handleChange} />
                    <Input placeholder={'Ammount (ETH)'} name='amount' type='number' handleChange={handleChange} />
                    <Input placeholder={'Keyword (Gif)'} name='keyword' type='text' handleChange={handleChange} />
                    <Input placeholder={'Enter Message'} name='message' type='text' handleChange={handleChange} />
                    {false ? <Loader /> : <SubmitButton onClick={handleSubmit}>Send now</SubmitButton> }

                </FormComponent>
            </div>
            </MainContainer>
        </Wrapper>
    )
}
export default Welcome

const Wrapper = styled.div`
    width: 100%;
    color: white;
`
const MainContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
> :last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
}
`
const TextContainer = styled.div`
    padding: 40px;
    font-size: 85px;
`
const WalletContainer = styled.div`
width: 69%;
height: 50px;
display: flex;
font-size: 25px;
align-items: center;
justify-content: center;
color: black;
    margin-left: 40px;
    cursor: pointer;
    border-radius: 14px;
    background-color: #4240b7;
    &:hover {
    background-color: #6867bc;

    }

`

const CardComponent = styled.div`
margin-top: 40px;
margin-right: 40px;
width: 70%;
height: 300px;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color:#a099ff;
  background-image: 
    radial-gradient(at 83% 67%, rgb(152, 231, 156) 0, transparent 58%), 
    radial-gradient(at 67% 20%, hsla(357,94%,71%,1) 0, transparent 59%), 
    radial-gradient(at 88% 35%, hsla(222,81%,65%,1) 0, transparent 50%), 
    radial-gradient(at 31% 91%, hsla(9,61%,61%,1) 0, transparent 52%), 
    radial-gradient(at 27% 71%, hsla(336,91%,65%,1) 0, transparent 49%), 
    radial-gradient(at 74% 89%, hsla(30,98%,65%,1) 0, transparent 51%), 
    radial-gradient(at 53% 75%, hsla(174,94%,68%,1) 0, transparent 45%);
    border-radius: 15px;

` 

const CardHead = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
> :first-child {
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    border-radius: 100%;
    border: 1px solid white;
}
> :last-child {
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    border-radius: 100%;
    border: 1px solid white;
    cursor: pointer;
}

`

const CardContent = styled.div`
padding: 20px;
> :first-child {
color: rgba(255, 255, 255, 0.8);
}
> :last-child {
    font-size: 30px;
}
`

const FormComponent = styled.div`
margin-top: 40px;
margin-right: 40px;
width: 75%;
background-color: rgba(255, 255, 255, 0.5);
border-radius: 14px;
padding: 20px;
`
const InputTag = styled.input`
margin-bottom: 20px;
border: none;
background: rgba(255, 255, 255, 0.637);
color: black;
font-size: 18px;
outline: none;
width: 100%;
height: 30px;
`

const SubmitButton = styled.div`
width: 15%;
height: 50px;
display: flex;
font-size: 15px;
align-items: center;
justify-content: center;
color: black;
    margin-left: 40px;
    cursor: pointer;
    border-radius: 14px;
    background-color: #4240b7;
    &:hover {
    background-color: #6867bc;

    }

`