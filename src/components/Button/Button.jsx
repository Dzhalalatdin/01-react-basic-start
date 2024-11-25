import classes from "./Button.module.css";

export default function Button({
  children,
  buttonCLicked,
  isActive,
  ...props
}) {
  // let classes = "button";
  // if (isActive) classes += " active";

  return (
    <button
      {...props}
      className={
        isActive ? `${classes.button} ${classes.active}` : classes.button
      }
      onClick={buttonCLicked}
      onDoubleClick={() => console.log("dbl")}
    >
      {children}
    </button>
  );
}
