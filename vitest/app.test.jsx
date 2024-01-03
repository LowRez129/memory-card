import { render, screen } from "@testing-library/react";

const App = () => <div>test</div>
describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.queryByRole("div").textContent).toMatch(/test/i);
  });
});