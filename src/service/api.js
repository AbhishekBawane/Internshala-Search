const BASE_API =
  "https://internshala.com/hiring/search";

export const fetchInternships =
  async () => {

    try {

      const response = await fetch(

        `https://api.allorigins.win/raw?url=${encodeURIComponent(BASE_API)}`

      );

      if (!response.ok) {

        throw new Error(
          "Failed to fetch internships"
        );
      }

      const data =
        await response.json();

      return data;

    } catch (err) {

      console.log(err);

      return null;
    }
};
