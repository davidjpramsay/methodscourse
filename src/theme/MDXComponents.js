import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Geogebra from '@site/src/components/Geogebra';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Geogebra,
};