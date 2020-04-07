const ec2ip =
  process.env.VUE_APP_EC2IP || "https://eag-dash.aws.na.sysco.net:9090"; //https url for the api
const configip =
  process.env.VUE_APP_CONFIGIP || "https://eag-dash.aws.na.sysco.net/"; //https url for the dashboard
const apiurl = "/v1/qcenterconfig/configuration";
const cxpodsapiurl = "/v1/s3/qcenter/cx";
const btpodsapiurl = "/v1/s3/qcenter/bt";
const cakepodsapiurl = "/v1/s3/qcenter/cake";
const btapiurl = "/v1/s3/qcenter/bturl";
const cakecxapiurl = "/v1/s3/qcenter/cakecxurl";

export default {
  apiurl: apiurl,
  configip: configip,
  ec2ip: ec2ip,
  cxpodsapiurl: cxpodsapiurl,
  btpodsapiurl: btpodsapiurl,
  cakepodsapiurl: cakepodsapiurl,
  btapiurl: btapiurl,
  cakecxapiurl: cakecxapiurl
};
