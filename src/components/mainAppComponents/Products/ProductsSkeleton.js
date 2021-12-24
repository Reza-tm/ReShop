import { motion } from "framer-motion";
import React from "react";
import ContentLoader from "react-content-loader";

const ProductsSkeleton = (props) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <ContentLoader
      speed={2}
      width={265}
      height={440}
      viewBox="0 0 265 440"
      backgroundColor="rgba(250, 250, 250, 0.26)"
      foregroundColor="rgba(185, 185, 185, 0.2)"
      {...props}
    >
      <rect x="10" y="13" rx="7" ry="7" width="250" height="266" />
      <rect x="13" y="291" rx="3" ry="3" width="194" height="28" />
      <rect x="14" y="331" rx="2" ry="2" width="245" height="9" />
      <rect x="14" y="351" rx="2" ry="2" width="245" height="9" />
      <rect x="14" y="372" rx="2" ry="2" width="245" height="9" />
      <rect x="16" y="397" rx="3" ry="3" width="192" height="36" />
      <rect x="215" y="397" rx="2" ry="2" width="45" height="36" />
    </ContentLoader>
  </motion.div>
);
export default ProductsSkeleton;
