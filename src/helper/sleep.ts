/**
 * sleep
 * @param {Number} num  - å¾ãããms
 * @returns Promise
 */

export const sleep: (num: number) => Promise<unknown> = (num: number) => {
  return new Promise((resolve: (value?: unknown) => void) =>
    setTimeout(() => resolve(), num)
  );
};
