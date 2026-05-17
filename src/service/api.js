const BASE_API =
  "https://internshala.com/hiring/search";

export const fetchInternships = async () => {

  try {

    const response = await fetch(
      `https://corsproxy.io/?${encodeURIComponent(BASE_API)}`
    );

    if (!response.ok) {

      throw new Error(
        "Failed to fetch internships"
      );
    }

    const textData =
      await response.text();

    console.log(textData);

    /*
      Convert response to JSON
    */

    const data =
      JSON.parse(textData);

    return data;

  } catch (err) {

    console.log(
      "API Error:",
      err
    );

    return null;
  }
};