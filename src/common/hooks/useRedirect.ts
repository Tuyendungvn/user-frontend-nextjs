import { useCallback } from "react";
import { useRouter } from "next/router";
import { i18n } from "next-i18next";
import { paths } from "@routes/index";
import path from "path";

export const useRedirect = () => {
  const router = useRouter();
  const currentLanguage = i18n.language;

  const redirect = useCallback((
    routeName: string,
    params: object = {},
    query: object = {},
    options?: { useRefresh: boolean }, // ? For refresh page not use route
    locale: string = undefined,
    shallow: boolean = true,
  ) => {
    const currentPath = paths.find((item) => item.name === routeName);
    if (!locale) locale = currentLanguage;

    if (!currentPath) {
      console.error(
        `[Link Error] Don't find any route which has name is "${routeName}"`,
      );
    }

    let href = path.join(`/${currentPath?.locale?.[locale]}`);

    if (Object.keys(params).length) {
      for (const key in params) {
        const value = params[key];
        href = href.replace(`/:${key}`, `/${value}`);
      }
    }

    href = href.replace(/(\/:)\w+/g, "/-");

    if (Object.keys(query).length) {
      const queryString = renderQueryStringFromObject(query);
      href += `?${queryString}`;
    }

    if (options?.useRefresh) {
      const aTag = document.createElement("a");
      aTag.href = href;
      aTag.click();
      return;
    }

    router.push(href, undefined, { shallow });
  }, []);
  return redirect;
};

const renderQueryStringFromObject = (query: object) => {
  return new URLSearchParams(query as any)?.toString();
};
