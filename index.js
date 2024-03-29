/**
 * AUTHENTICATION IN SERVER SIDE RENDERING
 * IN Normal SPA Application API Alwayes Know Who is sending request
 * COOKIES ====> As Auth Contract Between Browser And Server
 * COOK HAS Info Formed By The Host Name And Request Comes From Browser
 * SEND User Request On Proxy Server That Runs On Renderer Server
 * AND THE PROXY WILL FORWARD THIS INTO API THAT AUTHENTICATE USER
 * PROXY WILL ONLY RUN IN FOLLOW UP REQUEST NOT ON INITIAL PAGE LOAD
 * MAKE SURE THAT ANY ACTION CREATOR THAT IS RUNNING ON INITIAL PAGE LOAD (REDUX SERVER SETUP)
 * WILL GO TO API SERVER DIRECTLY AND THE FOLLOW UP REQUETS WILL GO PROXY SERVER TO FORWORD TO PROXY
 */

// REDUX SETUP ON CLIE

let axiosClientnstance = axios.create({
  baseURL: "/api" // express will forward to apimainutl/api // Proxy Server Will Attach Cookie From Broser Request Authmatice
});

thunk.withExtraArgument();

let axiosClientInstance = axios.create({
  baseURL: "apimainurl" // In Server And Initial Page Load We Have To Pass Express Request To Create Store On Server Setup Object and Get Cookie From It And It Axios Custom Server Instance
});

app.use("/api", proxy("http://react-ssr-api.herokuapp.com"));

if ("dev" === server) {
  axios.get("apiurl");
} else if (dev === "client") {
  axios.get("apiurl/api"); // This will go proxy that server sertup with express
}
