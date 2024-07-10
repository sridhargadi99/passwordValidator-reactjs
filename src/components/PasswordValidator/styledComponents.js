// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: #24263c;
  background-size: cover;
  padding: 20px;
  @media screen and (min-width: 768px) {
    align-items: center;
  }
`
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
  background-color: #383a4e;
  box-shadow: 0px 0px 4px 0px #434451;
  @media screen and (min-width: 768px) {
    height: 300px;
    width: 500px;
  }
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  color: #f8fafc;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`
export const Input = styled.input`
  height: 40px;
  width: 100%;
  cursor: pointer;
  outline: none;
  border: none;
  padding-left: 15px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #475569;
  background-color: #edeeff;
  @media screen and (min-width: 768px) {
    width: 65%;
  }
`
export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-size: 11px;
  font-weight: 400;
  color: #ef4444;
  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`
