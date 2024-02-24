// Style your elements here
import styled from 'styled-components/macro'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 91%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 86%;
    max-width: 1115px;
  }
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  text-align: center;
  font-size: 25px;
  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`
export const DirectionsDescription = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-weight: 550;
  font-size: 23px;
  line-height: 1.4;
`
export const GradientDirectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 61%;
    max-width: 428px;
  }
`
export const ColorsPickersDescription = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-weight: 550;
  font-size: 23px;
  line-height: 1.4;
`
export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 322px;
`
export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 19px;
  font-weight: 550;
`
export const CustomInput = styled.input`
  width: 100px;
  height: 51px;
  background-color: transparent;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
`
export const GenerateButton = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 550;
  background-color: #00c9b7;
  min-width: 24px;
  border-radius: 5px;
  border: none;
  padding-left: 25px;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-right: 25px;
  margin-left: 14px;
  margin-bottom: 11px;
  margin-left: 0px;
  margin-top: 24px;
  color: #1e293b;
  outline: none;
  cursor: pointer;
`
