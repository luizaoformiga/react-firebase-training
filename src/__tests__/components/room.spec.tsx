import { render } from "@testing-library/react";
import { RoomCode } from "@/components";

describe("RoomCode", () => {
  test("Deve renderizar o RoomCode", () => {
    render(<RoomCode />);
  });
});
