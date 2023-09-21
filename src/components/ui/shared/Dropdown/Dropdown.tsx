import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import * as Ariakit from "@ariakit/react";
import type { HTMLMotionProps, MotionProps } from "framer-motion";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import s from "./Dropdown.module.css";

export interface DropdownProps extends ComponentPropsWithoutRef<"div"> {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  label: ReactNode;
  disabled?: boolean;
  animate?: MotionProps["animate"];
  transition?: MotionProps["transition"];
  variants?: MotionProps["variants"];
  initial?: MotionProps["initial"];
  exit?: MotionProps["exit"];
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(function Menu(
  {
    open,
    setOpen,
    label,
    children,
    animate,
    transition,
    initial,
    exit,
    ...props
  },
  ref
) {
  const menu = Ariakit.useMenuStore({ open, setOpen });
  const currentPlacement = menu.useState("currentPlacement");
  const mounted = menu.useState("mounted");

  const menuVariants = {
    closed: {
      scale: 0,
      transition: {
        delay: 0.15,
      },
    },
    open: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.4,
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <MotionConfig reducedMotion="user">
      <Ariakit.MenuButton
        store={menu}
        ref={ref}
        className={s.button}
        {...props}
      >
        {label}
        <Ariakit.MenuButtonArrow />
      </Ariakit.MenuButton>
      <AnimatePresence>
        {mounted && (
          <Ariakit.Menu
            store={menu}
            alwaysVisible
            className={s.dropdown}
            // We'll use this data attribute to style the transform-origin
            // property based on the menu's placement. See style.css.
            data-placement={currentPlacement}
            render={
              <motion.div
                initial={initial}
                exit={exit}
                animate={animate}
                variants={menuVariants}
                transition={transition}
              />
            }
          >
            <Ariakit.MenuArrow className={s.dropdown_arrow} />
            {children}
          </Ariakit.Menu>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
});

export const DropdownItem = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  function DropdownItem(props, ref) {
    const item = {
      variants: {
        closed: { x: -16, opacity: 0 },
        open: { x: 0, opacity: 1 },
      },
      transition: { opacity: { duration: 0.2 } },
    };
    
    return (
      <Ariakit.MenuItem
        ref={ref}
        className={s.dropdown_item}
        render={<motion.div {...item} {...props} />}
      />
    );
  }
);

export default Dropdown;
