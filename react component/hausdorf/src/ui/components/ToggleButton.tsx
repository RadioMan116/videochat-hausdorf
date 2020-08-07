import React, { useCallback } from 'react';

import Button from './Button';

interface Props {
  enabled?: boolean;
  onToggle?: (enabled: boolean) => void;
  className?: string;
  IconEnabled: React.ComponentType;
  IconDisabled: React.ComponentType;
}

const ToggleButton: React.FC<Props> = (props) => {
  const {
    enabled,
    onToggle,
    className = 'videochat__micro js-micro',
    IconEnabled,
    IconDisabled,
  } = props;
  const icon = enabled ? <IconEnabled /> : <IconDisabled />;
  const onClick = useCallback(() => {
    if (onToggle) {
      onToggle(!enabled);
    }
  }, [onToggle, enabled]);
  return (
    <Button onClick={onClick} className={className}>
      {icon}
    </Button>
  );
};

export default ToggleButton;
