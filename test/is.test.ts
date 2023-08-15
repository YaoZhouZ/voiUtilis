import { expect, test } from "vitest";
import { is, isFunction } from "../src/modules/is";

const value = "hello world";

test("'Hello World'是否是字符串类型", () => {
  expect(is(value, "String")).toBe(true);
});

test("'Hello World'是否是函数类型", () => {
  expect(isFunction(value)).toBe(false);
});
