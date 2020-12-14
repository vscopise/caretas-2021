import client from "@frontity/core/src/client";
import caretas_2021_theme_default from "caretas-2021-theme/src/index";
import frontity__wp_source_default from "@frontity/wp-source/src/index";
import frontity__tiny_router_default from "@frontity/tiny-router/src/index";
import frontity__html2react_default from "@frontity/html2react/src/index";
import frontity__wp_comments_default from "@frontity/wp-comments/src/index";
import frontity__google_ad_manager_default from "@frontity/google-ad-manager/src/index";

const packages = {
  caretas_2021_theme_default,
  frontity__wp_source_default,
  frontity__tiny_router_default,
  frontity__html2react_default,
  frontity__wp_comments_default,
  frontity__google_ad_manager_default,
};

export default client({ packages });

if (module["hot"]) {
  module["hot"].accept(
    [
      "@frontity/core/src/client",
      "caretas-2021-theme/src/index",
      "@frontity/wp-source/src/index",
      "@frontity/tiny-router/src/index",
      "@frontity/html2react/src/index",
      "@frontity/wp-comments/src/index",
      "@frontity/google-ad-manager/src/index",
    ],
    () => {
      const client = require("@frontity/core/src/client").default;
      const caretas_2021_theme_default = require("caretas-2021-theme/src/index").default;
      const frontity__wp_source_default = require("@frontity/wp-source/src/index").default;
      const frontity__tiny_router_default = require("@frontity/tiny-router/src/index").default;
      const frontity__html2react_default = require("@frontity/html2react/src/index").default;
      const frontity__wp_comments_default = require("@frontity/wp-comments/src/index").default;
      const frontity__google_ad_manager_default = require("@frontity/google-ad-manager/src/index").default;
      const packages = {
        caretas_2021_theme_default,
        frontity__wp_source_default,
        frontity__tiny_router_default,
        frontity__html2react_default,
        frontity__wp_comments_default,
        frontity__google_ad_manager_default,
      };
      client({ packages });
    }
  );
}