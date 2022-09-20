import http from "http";

export default function ({ route }) {
  return http.get("http://www.w3schools.com/", {
    url: route.fullPath,
  });
}
