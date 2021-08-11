import { render } from "@testing-library/react";
import { NewRoom } from "@/pages";

describe("NewRoom", () => {
  test("Deve renderizar o NewRoom", () => {
    render(<NewRoom />);
  });
});
