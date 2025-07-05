// interfaces/index.ts

/**
 * Interface for the properties of a reusable Card component.
 *
 * @property {string} title - The main title displayed on the card.
 * @property {string} [imageUrl] - Optional URL for an image to display on the card.
 * @property {string} [description] - Optional detailed description for the card.
 * @property {React.ReactNode} [children] - Optional React nodes to render inside the card (e.g., more complex content).
 * @property {string} [className] - Optional CSS class names for custom styling (e.g., Tailwind classes).
 */
export interface CardProps {
    title: string;
    imageUrl?: string;
    description?: string;
    children?: React.ReactNode;
    className?: string;
    // Add more properties as your Card component becomes more complex (e.g., `price`, `location`, `onClick`)
  }
  
  /**
   * Interface for the properties of a reusable Button component.
   *
   * @property {string} children - The text or content to display inside the button.
   * @property {() => void} onClick - The function to call when the button is clicked.
   * @property {'primary' | 'secondary' | 'ghost'} [variant='primary'] - Visual style of the button.
   * @property {'small' | 'medium' | 'large'} [size='medium'] - Size of the button.
   * @property {boolean} [disabled=false] - If true, the button will be disabled.
   * @property {string} [type='button'] - The button's type attribute ('button', 'submit', 'reset').
   * @property {string} [className] - Optional CSS class names for custom styling (e.g., Tailwind classes).
   */
  export interface ButtonProps {
    children: React.ReactNode; // Can be string, number, JSX, etc.
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'ghost'; // Example variants
    size?: 'small' | 'medium' | 'large'; // Example sizes
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    // Add more properties as your Button component requires (e.g., `icon`, `href` for a link-button)
  }
  
  // You can add more interfaces here as your project grows,
  // e.g., for user data, property listings, API responses, etc.
  // export interface User {
  //   id: string;
  //   name: string;
  //   email: string;
  // }