import { render } from "@testing-library/react";
import App from "../App";

test("snapshort for App component",()=>{
    const container=render(<App/>)
    expect(container).toMatchSnapshot()
})