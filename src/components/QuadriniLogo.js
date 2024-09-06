import './styles/QuadriniLogo.css';

function QuadriniLogo(props) {
  const className = props.md ? 'logo-container-md' : 'logo-container'
  return (
    <div className="QuadriniLogo">
      <div className={className}>
        Quadrini
      </div>
    </div>
  );
}

export default QuadriniLogo;
