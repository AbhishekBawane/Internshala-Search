import internshipsData
from "../data/internshalaData.json";

export const fetchInternships =
  async () => {

    try {

      return internshipsData;

    } catch (err) {

      console.log(err);

      return null;
    }
};
