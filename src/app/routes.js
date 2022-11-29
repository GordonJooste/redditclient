const ROUTES = {
    funnyRoute: () => "/funny",
    frontRoute: () => '/',
    commentsRoute: (permalink) => `/post/${permalink}`,
    eyebleachRoute: () => "/eyebleach",
  };
  
  export default ROUTES;