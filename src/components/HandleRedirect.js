import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HandleRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const redirectPath = queryParams.get('p');

    if (redirectPath) {
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return null; 
};

export default HandleRedirect;
