import s from "./Input.module.scss";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

function Input({ type, error, ...otherProps }: InputProps) {
  switch (type) {
    case "text":
    case undefined:
      return (
        <div>
          <input
            type="text"
            className={`${s.input} ${error ? s.inputError : ""}`}
            {...otherProps}
          />
          {error && <p className={s.errorMessage}>{error}</p>}
        </div>
      );

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
