import { render } from "@testing-library/react";
import { Button } from "@/components";

describe("Button", () => {
  test("Deve renderizar o Button", () => {
    render(<Button />);
  });
});
