import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./Counter";

describe("Counter", () => {
  const setup = () => {
    const value = 5;
    const onChange = jest.fn();

    const utils = render(<Counter value={value} onChange={onChange} />);
    const input = screen.getByRole("textbox");
    return { input, value, onChange, ...utils };
  };

  it("renders counter", async () => {
    const { input, onChange } = setup();

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("5");
  });

  it("increments counter", async () => {
    const { input, onChange } = setup();

    const increment = screen.getByRole("button", { name: "+" });

    fireEvent.click(increment);
    expect(input).toHaveValue("6");

    expect(onChange).toBeCalledWith(6);
  });

  it("decrements counter", async () => {
    const { input, onChange } = setup();

    const decrement = screen.getByRole("button", { name: "-" });

    fireEvent.click(decrement);
    expect(input).toHaveValue("4");
    expect(onChange).toBeCalledWith(4);
  });
});
