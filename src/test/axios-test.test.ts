import { cleanup } from "@testing-library/react";
import AxiosMock from "axios-typescript";
afterEach(cleanup)

it("test axios post request",()=>{
    AxiosMock.post.mockResolvedValue({data:})
})