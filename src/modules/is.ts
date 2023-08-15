/**
 * 检查值value是否属于特定类型type
 * @param {unknown} value - 要检查的值
 * @param {string} type - 一个字符串，表示要检查的值的类型
 * @returns 如果value为type类型,那么返回true,否则返回false
 */
function is(value: unknown, type: string): boolean {
  return Object.prototype.toString.call(value) === `[object ${type}]`;
}

/**
 * 检查一个值是函数
 * @param {unknown} value - 要检查的值
 * @returns 布尔值结果
 */
function isFunction<T = Function>(value: unknown): value is T {
  return is(value, "Function") || is(value, "AsyncFunction");
}

/**
 * 检查值是否已定义
 * @param {T} value - 要检查的值
 * @returns 布尔值结果
 */
function isDef<T = unknown>(value: T): value is T {
  return typeof value !== "undefined";
}

/**
 * 检查值是否未定义或为空
 * @param {T} value - 要检查的值
 * @returns 布尔值结果
 */
function isUnDef<T = unknown>(value: T): value is T {
  return !isDef(value);
}

/**
 * 检查值是否是对象
 * @param {any} value - 要检查的值
 * @returns 布尔值结果
 */
function isObject(value: any): value is Record<any, any> {
  return value !== null && is(value, "Object");
}

/**
 * 检查值是否不是对象
 * @param {any} value - 要检查的值
 * @returns 布尔值结果
 */
function isNotObject(value: any): boolean {
  return JSON.stringify(value) === "{}";
}

/**
 * 检查值是否为Date类型。
 * @param {unknown} val - 要检查的值
 * @returns 布尔值结果
 */
function isDate(val: unknown): val is Date {
  return is(val, "Date");
}

/**
 * 检查值是否为数字类型
 * @param {unknown} val - 要检查的值
 * @returns 布尔值结果
 */
function isNumber(val: unknown): val is number {
  return is(val, "Number");
}

/**
 * 检查值是否是异步函数
 * @param {unknown} val - 要检查的值
 * @returns 布尔值结果
 */
function isAsyncFunction<T = any>(val: unknown): val is () => Promise<T> {
  return is(val, "AsyncFunction");
}

/**
 * 检查值是否是Promise对象
 * @param {unknown} val - 要检查的值
 * @returns 布尔值结果
 */
function isPromise<T = any>(val: unknown): val is Promise<T> {
  return (
    is(val, "Promise") &&
    isObject(val) &&
    isFunction(val.then) &&
    isFunction(val.catch)
  );
}

/**
 * 检查值是否为字符串类型
 * @param {unknown} val - 要检查的值
 * @returns 布尔值结果
 */
function isString(val: unknown): val is string {
  return is(val, "String");
}

/**
 * 检查值是否为布尔类型
 * @param {unknown} val - 要检查的值
 * @returns 布尔值结果
 */
function isBoolean(val: unknown): val is boolean {
  return is(val, "Boolean");
}

/**
 * 检查值是否为数组
 * @param {any} val - 要检查的值
 * @returns 布尔值结果
 */
function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val);
}

/**
 * 检查值是否为空
 * @param {unknown} val - 要检查的值
 * @returns 布尔值结果
 */
function isNull(val: unknown): val is null {
  return val === null;
}

/**
 * 检查值是否为null且未定义
 * @param {unknown} val - 要检查的值
 * @returns 布尔值结果
 */
function isNullAndUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) && isNull(val);
}

/**
 * 检查值是否为null或未定义
 * @param {unknown} val - 要检查的值
 * @returns 布尔值结果
 */
function isNullOrUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) || isNull(val);
}

export {
  is,
  isFunction,
  isDef,
  isUnDef,
  isObject,
  isNotObject,
  isDate,
  isNumber,
  isAsyncFunction,
  isPromise,
  isString,
  isBoolean,
  isArray,
  isNull,
  isNullAndUnDef,
  isNullOrUnDef,
};
