// Style your elements here
import styled from 'styled-components/macro'

export const ListItem = styled.li`
  width: 48%;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    width: 23%;
  }
`
export const DirectionButton = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 550;
  width: 100%;
  border-radius: 5px;
  border: none;
  padding-left: 25px;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-right: 25px;
  margin-bottom: 12px;
  outline: none;
  background-color: #ffffff;
  text-align: center;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
`
