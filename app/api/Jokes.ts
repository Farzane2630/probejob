import { NextApiRequest, NextApiResponse } from 'next';
import { fetchAndInsertJoke } from "../Utils/chunckNorrisApi"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const insertedJoke = await fetchAndInsertJoke();

    res.status(200).json({ success: true, joke: insertedJoke });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};
