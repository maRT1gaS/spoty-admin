import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Cookie from 'js-cookie';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { setAuth, setAdmin } from './redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { ProtectedRoute, Loader, Confirmation } from './components/index';
import { WrapperPage } from './App.style';
import RootRoutes from './router/RootRoutes';

const App: React.FC = (): JSX.Element => {
  const [isLoader, setIsLoader] = useState<boolean>(true);
  const authToken: string | undefined = Cookie.get('TOKEN');
  const dispatch = useAppDispatch();
  const isAdmin = useAppSelector((state) => state.user.isAdmin);
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const { isOpen, text, textButton, onClick, bgWarning } = useAppSelector(
    (state) => ({
      isOpen: state.confirmation.isOpen,
      text: state.confirmation.text,
      textButton: state.confirmation.textButton,
      onClick: state.confirmation.onClick,
      bgWarning: state.confirmation.bgWarning,
    })
  );

  useEffect(() => {
    if (authToken) {
      const decoded = jwtDecode<JwtPayload>(authToken);
      const { name, email, role } = decoded;
      if (role === 'admin') {
        dispatch(setAdmin());
        dispatch(setAuth());
        const storageData = {
          name,
          email,
          role,
        };
        sessionStorage.setItem('adminInfo', JSON.stringify(storageData));
        setIsLoader(false);
      } else {
        setIsLoader(false);
      }
    } else {
      setIsLoader(false);
    }
  }, [authToken, dispatch]);

  return (
    <>
      <Helmet>
        <title>Админка</title>
      </Helmet>
      <WrapperPage>
        {isOpen && (
          <Confirmation
            textButton={textButton}
            text={text}
            onClick={onClick}
            bgWarning={bgWarning}
          />
        )}
        {isLoader ? (
          <Loader />
        ) : (
          <ProtectedRoute
            path='/'
            Component={RootRoutes}
            isAdmin={isAdmin}
            isAuth={isAuth}
          />
        )}
      </WrapperPage>
    </>
  );
};
export default App;
