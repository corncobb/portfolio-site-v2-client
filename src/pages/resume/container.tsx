import { Helmet } from 'react-helmet';
import { ResumeLayout } from './layout';

export const Resume = () => {
  return (
    <>
      <Helmet>
        <title>Resume | CamCobb.com</title>
      </Helmet>
      <ResumeLayout />
    </>
  );
};
