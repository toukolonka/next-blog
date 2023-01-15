/* eslint-disable no-promise-executor-return */
// eslint-disable-next-line import/prefer-default-export
export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
