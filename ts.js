import { motion } from "framer-motion"
import React from 'react';
import {Text} from 'react-native';


<motion.div
  animate={{
    x: 0,
    backgroundColor: "#000",
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
    position: "fixed",
    transitionEnd: {
      display: "none",
    },
  }}
/>