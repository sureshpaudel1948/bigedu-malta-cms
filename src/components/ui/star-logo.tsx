import { cn } from "@/lib/utils";

interface StarLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const StarLogo = ({ className, size = "md" }: StarLogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.77L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z"
          fill="currentColor"
          className="text-white"
        />
        <path
          d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.77L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary-foreground"
        />
      </svg>
    </div>
  );
};

export default StarLogo;