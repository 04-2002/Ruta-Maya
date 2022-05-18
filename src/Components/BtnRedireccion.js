import { Link } from "react-router-dom";

const BotonRedireccion = ({ children, to }) => {
  return (
    <Link class="btn btn-primary text-start" role="button" to={to}>
      {children}
    </Link>
  );
};

export default BotonRedireccion;
