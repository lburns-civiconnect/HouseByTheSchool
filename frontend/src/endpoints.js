// Your strapi tables we want to fetch on screen load
export const strapiEndpoints = [
  {
    slug: "example-collections",
    populate: "populate=*",
  },
  {
    slug: "example-single-type",
    // populate: "populate[0]=exampleAccordion&populate[1]=exampleAccordion.items&populate[2]=exampleSlider&populate[3]=exampleSlider.items&populate[4]=exampleSlider.items.background",
    populate: "populate[0]=exampleSlider&populate[1]=exampleSlider.items&populate[2]=exampleSlider.items.background&populate[3]=exampleAccordion&populate[4]=exampleAccordion.items",
  },
];
