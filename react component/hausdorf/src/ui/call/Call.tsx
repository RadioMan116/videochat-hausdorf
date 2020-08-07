import React, { useState } from 'react';

import CallView from './CallView';
import { CallProps, CallVariant } from './types';

export const Call: React.FC<CallProps> = (props) => {
  const [variant, setVariant] = useState<CallVariant>('modal');

  return <CallView {...props} variant={variant} setVariant={setVariant} />;
};

Call.displayName = 'ui.Call';
