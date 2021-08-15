const GIT_REPO =
  "https://github.com/codegeous/react-component-depot/tree/master/src/";
const YOUTUBE_BASE = "https://youtu.be/";

export default {
  api: process.env.REACT_APP_API_ENDPOINT,

  GOOGLE: {
    GAPI_KEY: "",
    reCaptcha: process.env.REACT_APP_RECAPCTHA_SITE_TOKEN,
    GA_TRACKING_CODE: process.env.REACT_APP_GA_TRACKING_CODE,
  },

  hCaptchaSiteToken: process.env.REACT_APP_HCAPTCHA_SITE_TOKEN,

  links: {
    contactListCRUD: {
      tutorial: "",
      code: `${GIT_REPO}pages/ContactList/index.js`,
    },
  },
  youtubeVideos: [
    {
      title: "Full page loading spinner for API calls in ReactJS with Redux",
      id: "vCs50MV-TbM",
    },
    {
      title: "File Upload with progress bar in React JS and axios",
      id: "Ti8QNiRRzOA",
    },
    {
      title: "Add loading spinner for buttons in reactjs",
      id: "vgDObZGhQuw",
    },
    {
      title: "Display fallback image for a broken image link in reactjs ",
      id: "90P1_xCaim4",
    },
    {
      title: "Material style preloader for image tag in react js",
      id: "GBHBjv6xfY4",
    },
    {
      title: "Building a search filter in reactjs",
      id: "RM_nXOyHwN0",
    },
  ],
};
