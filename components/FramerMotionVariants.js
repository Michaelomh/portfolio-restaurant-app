export const slideLeft = {
  initial: { x: -100, opacity: 0 },
  whileInView: { x: 0, opacity: 1, transition: { duration: 0.7 } },
};

export const slideRight = {
  initial: { x: 100, opacity: 0 },
  whileInView: { x: 0, opacity: 1, transition: { duration: 0.7 } },
};

export const slideUp = {
  initial: { y: 100, opacity: 0 },
  whileInView: { y: 0, opacity: 1, transition: { duration: 0.7 } },
};

export const slideDown = {
  initial: { y: -100, opacity: 0 },
  whileInView: { y: 0, opacity: 1, transition: { duration: 0.7 } },
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 0.7 } },
};
