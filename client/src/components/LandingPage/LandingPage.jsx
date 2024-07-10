import { useNavigate } from 'react-router-dom';
import './LandingPage.scss';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/home');
  };

  return (
    <div className="landing-page">
      <h1>Poke SPA</h1>
      <button onClick={handleEnter}>Ingresar</button>
    </div>
  );
};

export default LandingPage;

