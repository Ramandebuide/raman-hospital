import {act} from 'react'
import { fireEvent, render,cleanup, screen } from '@testing-library/react';
import RoomButton from '../main/component/RoomButton';
import HospitalDetails from '../main/component/HospitalDetail';

// afterEach(cleanup);

// test('renders normalRoom roomButton component', () => {
//   let name="normalRoom";
//   const getRoomDetails=jest.fn();
//   render(<RoomButton getRoomDetails={getRoomDetails} name={name} />);
//   const buttonElement = screen.getByRole("button");
//   const textElement = screen.getByText(/normalRoom/);
//   fireEvent.click(buttonElement)
//   expect(textElement).toBeInTheDocument();
//   expect(getRoomDetails).toHaveBeenCalled();
// });

// test('renders oxygenRoom roomButton component', () => {
//   let name="oxygenRoom";
//   const getRoomDetails=jest.fn();
//   render(<RoomButton getRoomDetails={getRoomDetails} name={name} />);
//   const buttonElement = screen.getByRole("button");
//   const textElement = screen.getByText(/oxygenRoom/);
//   fireEvent.click(buttonElement)
//   expect(textElement).toBeInTheDocument();
//   expect(getRoomDetails).toHaveBeenCalled();
// });

describe('render roomButton component using testeach', () => {

  test.each([["normalRoom"],["oxygenRoom"]])('provide input as %p',(input)=>{
    
    const getRoomDetails=jest.fn();
    render(<RoomButton getRoomDetails={getRoomDetails} name={input} />);
    const buttonElement = screen.getByRole("button");
    const textElement = screen.getByText(input);
    fireEvent.click(buttonElement)
    expect(textElement).toBeInTheDocument();
    expect(getRoomDetails).toHaveBeenCalled();
  })
  
})

describe("test the axios mock function",()=>{
  test("test the getRoomDetails",()=>{

    render(<HospitalDetails/>)
    
  })
})