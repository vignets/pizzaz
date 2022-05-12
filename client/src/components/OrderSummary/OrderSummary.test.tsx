import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import OrderSummary from "./OrderSummary";
import { pizzasAtom } from "@/store";
import { Provider } from "jotai";
import { NotificationsProvider } from "@mantine/notifications";

describe("Order Summary", () => {
  it("does not render counter", async () => {
    render(<OrderSummary />);

    const heading = screen.queryByText(/order summary/i);
    expect(heading).not.toBeInTheDocument();
  });

  it("renders counter", async () => {
    const { container } = render(
      <NotificationsProvider position="top-right">
        <Provider
          initialValues={
            [
              [
                pizzasAtom,
                [
                  {
                    name: "Margherita",
                    price: 5,
                    ingredients: ["tomato"],
                    quantity: 2,
                  },
                ],
              ],
            ] as const
          }
        >
          <OrderSummary />
        </Provider>
      </NotificationsProvider>,
    );

    const heading = screen.queryByText(/order summary/i);
    expect(heading).toBeInTheDocument();

    expect(screen.getByTestId("total-price")).toHaveTextContent("$10.00");

    const order = screen.getByRole("button", { name: /place order/i });

    fireEvent.click(order);

    await waitFor(() => {
      screen.getByText(/order placed/i);
    });

    expect(container).toMatchSnapshot();
  });
});
