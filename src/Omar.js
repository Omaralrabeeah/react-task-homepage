const Omar = (props) => {
  const value = props.ayshey(1, 2);
  return (
    <h1>
      HELLO {props.name}!{value}
    </h1>
  );
};

export { Omar };
