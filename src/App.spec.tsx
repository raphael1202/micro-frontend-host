import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render the App component correctly", () => {
    render(<App />);

    const appComponent = screen.getByText("Hello from the Host application!");
    expect(appComponent).toBeInTheDocument();
  });
});
