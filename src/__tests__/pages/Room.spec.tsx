import { render } from "@testing-library/react";
import { Room } from "@/pages";

describe("Room", () => {
  test("Deve renderizar o Room", () => {
    render(<Room />);
  });
});
