import { useEffect } from "react";

import { useRedirect } from "@common/hooks/useRedirect";
import { PATH } from "@routes";
import useAuth from "@common/hooks/useAuth";

export const withAuth = (Component: React.FC<any>) => () => {
  const { isAuth } = useAuth();
  const redirect = useRedirect();

  useEffect(() => {
    if (isAuth === false) {
      // redirect(PATH.LOGIN);
    }
  }, []);

  return <Component />;
};
