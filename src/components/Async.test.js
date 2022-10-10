import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("renders posts if request succeeds", async () => {

    window.fetch = jest.fn();

    window.fetch.mockResolvedValueOnce({
        json: async ()=> [{id: 'p1', title: 'First post' }]
    })

    render(<Async />);

    const listOfItems = await screen.findAllByRole("listitem"); // find query returns a promise and get returns simple the render.

    expect(listOfItems).not.toHaveLength(0);
  });
});
