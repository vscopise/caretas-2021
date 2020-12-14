import server from "@frontity/core/src/server";
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

export default server({ packages });

