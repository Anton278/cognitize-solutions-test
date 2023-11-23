import s from "./Input.module.scss";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

function Input({ type, ...otherProps }: InputProps) {
  switch (type) {
    case "text":
    case undefined:
      return <input type="text" className={s.input} {...otherProps} />;

    case "checkbox":
      return (
        <label className={s.checkbox}>
          <input type="checkbox" {...otherProps} />
          <span></span>
        </label>
      );

    default:
      return <input type={type} {...otherProps} />;
  }
}

export default Input;
