import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test('Gets the First Name input box', () =>{
  const container = render(<App />); 
  const firstName = container.getByTestId(/firstName/i)

  expect(firstName.placeholder).toBe('Edd');
  expect(firstName.name).toBe("firstName")
});

test('Gets the Last Name input box', () =>{
  const container = render(<App />); 
  const lastName = container.getByTestId(/lastName/i)

  expect(lastName.placeholder).toBe('Burke');
  expect(lastName.name).toBe("lastName")
});

test('Gets the email input box', () =>{
  const container = render(<App />); 
  const email = container.getByTestId(/email/i)

  expect(email.placeholder).toBe('bluebill1049@hotmail.com');
  expect(email.name).toBe("email")
});

test('Gets the message input box', () =>{
  const container = render(<App />); 
  const message = container.getByTestId(/message/i)

  expect(message.placeholder).toBe('');
  expect(message.name).toBe("message")
});

test('checking lables', () =>{
  const {getByTestId} = render(<App />);

   getByTestId(/First Name/i)

  
})