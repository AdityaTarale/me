import reactLogo from "./react.svg";
import vscodeLogo from "./vscode.png";
import reactQueryLogo from "./react-query.svg";
import formikLogo from "./formik.svg";
import javascriptLogo from "./javascript.svg";
import typescriptLogo from "./typescript.svg";
import reduxLogo from "./redux.svg";
import sagaLogo from "./saga.svg";
import nodeLogo from "./nodejs.svg";
import scssLogo from "./scss.svg";
import cssLogo from "./css.svg";
import htmlLogo from "./html.svg";
import tailwindLogo from "./tailwindcss.svg";
import routerLogo from "./react-router.svg";
import postmanLogo from "./postman.svg";
import ubuntuLogo from "./ubuntu.svg";
import linuxLogo from "./linux.svg";
import githubOctocatLogo from "./github-octocat.svg";
import openLayersLogo from "./openlayers.svg";
import ionicLogo from "./ionic.svg";
import nginxLogo from "./nginx.svg";
import jiraLogo from "./jira.svg";
import jsonLogo from "./json.svg";
import mongoLogo from "./mongo.svg";
import expressLogo from "./express.svg";
import firebaseLogo from "./firebase.svg";
import styleGuideLogo from "./styleguidist.svg";
import testingLogo from "./testing.svg";
import materialLogo from "./material.svg";
import linkedInLogo from "../assets/linkedin.svg";
import githubLogo from "../assets/github.svg";
import twitterLogo from "../assets/twitter.svg";
import signatureLogo from "../assets/signature.png";

const icons = {
  react: reactLogo,
  vscode: vscodeLogo,
  query: reactQueryLogo,
  formik: formikLogo,
  javascript: javascriptLogo,
  typescript: typescriptLogo,
  redux: reduxLogo,
  saga: sagaLogo,
  node: nodeLogo,
  scss: scssLogo,
  tailwind: tailwindLogo,
  css: cssLogo,
  html: htmlLogo,
  router: routerLogo,
  postman: postmanLogo,
  ubuntu: ubuntuLogo,
  linux: linuxLogo,
  githubColored: githubOctocatLogo,
  openLayers: openLayersLogo,
  ionic: ionicLogo,
  nginx: nginxLogo,
  jira: jiraLogo,
  json: jsonLogo,
  mongo: mongoLogo,
  express: expressLogo,
  firebase: firebaseLogo,
  styleGuide: styleGuideLogo,
  testing: testingLogo,
  material: materialLogo,
  linkedIn: linkedInLogo,
  github: githubLogo,
  twitter: twitterLogo,
  signature: signatureLogo,
};

export const getIcon = (iconKey) => icons[iconKey];
