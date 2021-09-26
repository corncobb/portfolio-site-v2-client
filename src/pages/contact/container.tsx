import { Helmet } from 'react-helmet';
import { ContactLayout } from './layout';

export const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | CamCobb.com</title>
      </Helmet>
      <ContactLayout />
    </>
  );
};
