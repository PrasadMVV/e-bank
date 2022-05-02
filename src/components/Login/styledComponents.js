import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #152850;
  background-size: cover;
  min-height: 100vh;
`
export const BgSubContainer = styled.div`
  display: flex;
  background-color: #e0eefe;
  border-radius: 30px;
`
export const Image = styled.img`
  width: 60%;
  padding: 25px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #ffffff;
  width: 40%;
  border-radius: 30px;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 30px;
  padding-right: 30px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 600;
  color: #183b56;
  line-height: 1.2;
  margin-bottom: 25px;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #5a7184;
  line-height: 1.2;
  margin-bottom: 15px;
`
export const UserInput = styled.input`
  height: 56px;
  width: 420px;
  margin-bottom: 25px;
  border: none;
  border-radius: 10px;
  border-style: solid;
  border-width: 2px;
  border-color: #c3cad9;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #000000;
  line-height: 1.2;
  background-color: transparent;
  padding: 20px;
`
export const LoginButton = styled.button`
  height: 56px;
  width: 420px;
  border: none;
  border-radius: 10px;
  border-style: solid;
  border-width: 0px;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  line-height: 1.2;
  background-color: #1565d8;
  padding: 10px;
`
export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #ff0b37;
  line-height: 1.2;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
