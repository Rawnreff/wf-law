import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
    children,
    to,
    href,
    variant = 'primary',
    className = '',
    ...props
}) => {

    const baseStyles = "inline-block font-bold py-3 px-8 rounded transition duration-300 uppercase tracking-wide text-sm";

    const variants = {
        primary: "bg-primary hover:bg-primary-dark text-white",
        secondary: "bg-secondary hover:bg-gray-600 text-white",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        white: "bg-white text-primary hover:bg-gray-100 shadow-lg",
        ghost: "text-primary hover:bg-primary/10",
        yellow: "bg-yellow-500 hover:bg-yellow-600 text-black",
    };

    const styles = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

    if (to) {
        return (
            <Link to={to} className={styles} {...props}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={styles} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button className={styles} {...props}>
            {children}
        </button>
    );
};

export default Button;
