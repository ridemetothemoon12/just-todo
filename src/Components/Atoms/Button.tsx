type Props = React.ComponentPropsWithoutRef<"button">;

const Button = (props: Props) => {
  return <button {...props} />;
};

export default Button;
