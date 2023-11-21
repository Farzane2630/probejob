import axios from "axios";
import prisma from "../Prisma/Prisma";
import { fetchAndInsertJoke } from "./chunckNorrisApi"; // Replace with the actual filename

jest.mock("axios");

describe("fetchAndInsertJoke", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("fetches and inserts a joke", async () => {
    const mockJokeData = {
      value: "Chuck Norris joke here",
    };

    jest.spyOn(axios, 'get').mockResolvedValue({ data: mockJokeData });
    jest.spyOn(prisma, '$disconnect').mockResolvedValue(undefined);

    const result = await fetchAndInsertJoke();

    expect(axios.get).toHaveBeenCalledWith(
      "https://api.chucknorris.io/jokes/random?category=dev"
    );

    expect(prisma.$disconnect).toHaveBeenCalled();

    expect(result).toEqual(mockJokeData);
  });

  test("handles error during fetch", async () => {
    const errorMessage = "Mocked fetch error";
    jest.spyOn(axios, 'get').mockRejectedValue(new Error(errorMessage));

    await expect(fetchAndInsertJoke()).rejects.toThrow("Internal Server Error");
  });

  test("handles error during disconnect", async () => {
    const mockJokeData = {
      value: "Chuck Norris joke here",
    };

    jest.spyOn(axios, 'get').mockResolvedValue({ data: mockJokeData });
    jest.spyOn(prisma, '$disconnect').mockRejectedValue(new Error('Mocked disconnect error'));


    await expect(fetchAndInsertJoke()).rejects.toThrow('Mocked disconnect error');
  });
});
