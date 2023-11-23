import s from "./Button.module.scss";

type ButtonProps = {
  children?: string;
};

function Button({ children }: ButtonProps) {
  return <button className={s.blueButton}>{children}</button>;
}

export default Button;
