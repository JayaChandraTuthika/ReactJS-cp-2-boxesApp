const Box = (props) => {
  return <div className={`${props.size}`}>{props.text}</div>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div class="inner">
      <Box size="small" text="Small" />
      <Box size="medium" text="Medium" />
      <Box size="large" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
