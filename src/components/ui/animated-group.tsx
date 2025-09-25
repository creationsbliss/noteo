"use client";
import { motion, type Variants } from "framer-motion";
import React, {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

export type PresetType =
  | "fade"
  | "slide"
  | "scale"
  | "blur"
  | "blur-slide"
  | "zoom"
  | "flip"
  | "bounce"
  | "rotate"
  | "swing";

export type AnimatedGroupProps<
  T extends ElementType = "div",
  C extends ElementType = "div",
> = {
  children: ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: PresetType;
  as?: T;
  asChild?: C;
} & ComponentPropsWithoutRef<T> &
  ComponentPropsWithoutRef<C>;

const defaultContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants: Record<PresetType, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slide: {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  scale: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  },
  blur: {
    hidden: { filter: "blur(4px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  },
  "blur-slide": {
    hidden: { filter: "blur(4px)", y: 20, opacity: 0 },
    visible: { filter: "blur(0px)", y: 0, opacity: 1 },
  },
  zoom: {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  },
  flip: {
    hidden: { rotateX: -90, opacity: 0 },
    visible: {
      rotateX: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  },
  bounce: {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  },
  rotate: {
    hidden: { rotate: -180, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  },
  swing: {
    hidden: { rotate: -10, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 8 },
    },
  },
};

const addDefaultVariants = (variants?: Variants): Variants => ({
  hidden: { ...defaultItemVariants.hidden, ...(variants?.hidden || {}) },
  visible: { ...defaultItemVariants.visible, ...(variants?.visible || {}) },
});

function AnimatedGroup<
  T extends ElementType = "div",
  C extends ElementType = "div",
>({
  children,
  className,
  variants,
  preset,
  as,
  asChild,
  ...rest
}: AnimatedGroupProps<T, C>) {
  const As: ElementType = as || "div";
  const AsChild: ElementType = asChild || "div";

  const containerVariants = variants?.container || defaultContainerVariants;
  const itemVariants =
    variants?.item || addDefaultVariants(preset ? presetVariants[preset] : {});

  const MotionComponent = motion(As);
  const MotionChild = motion(AsChild);

  return (
    <MotionComponent
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={className}
      {...rest}
    >
      {React.Children.map(children, (child, index) => (
        <MotionChild key={index} variants={itemVariants}>
          {child}
        </MotionChild>
      ))}
    </MotionComponent>
  );
}

export { AnimatedGroup };
