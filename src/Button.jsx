export default function Button({children, type="submit"}) {
	return (
		<button
          className="auth__button"
          type={type}>
          {children}
		</button>);
}
