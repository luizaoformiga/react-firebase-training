import { render } from "@testing-library/react";
import { Question } from "@/components";

describe("Question", () => {
  test("Deve renderizar o Question", () => {
    render(<Question />);
  });
});
