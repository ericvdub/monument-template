
import type { SVGProps } from 'react';

interface IconWrapperProps {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  className?: string;
  iconClassName?: string;
}

export default function IconWrapper({ icon: Icon, className, iconClassName }: IconWrapperProps) {
  return (
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-primary-foreground border shadow ${className}`}>
      <Icon className={`w-6 h-6 text-primary ${iconClassName}`} />
    </div>
  );
}
