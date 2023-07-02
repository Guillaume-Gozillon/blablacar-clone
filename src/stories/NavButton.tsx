import "./button.css";
import { Link } from "react-router-dom";
interface NavButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Navigation redirect
   */
  to: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const NavButton = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  to,
  ...props
}: NavButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <Link to={to}>
      <button
        type="button"
        className={["storybook-button", `storybook-button--${size}`, mode].join(
          " "
        )}
        style={{ backgroundColor }}
        {...props}
      >
        {label}
      </button>
    </Link>
  );
};
