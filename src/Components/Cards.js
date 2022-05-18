const Cards = (props) => {
  const objImg = {
    objectFit: "fill",
    height: "150px",
  };
  return (
    <div class="col">
      <div class="card h-100">
        <img src={props.img} className="" alt="contenido" style={objImg} />
        <div class="card-body">
          <h3 class="card-title">{props.title}</h3>
          <p class="card-text">{props.description}</p>
          <div class="d-grid gap-2">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
