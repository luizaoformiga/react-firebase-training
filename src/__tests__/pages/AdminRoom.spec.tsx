import { render } from "@testing-library/react";
import { AdminRoom } from "@/pages";

describe("AdminRoom", () => {
  test("Deve renderizar o AdminRoom", () => {
    render(<AdminRoom />);
  });
});
