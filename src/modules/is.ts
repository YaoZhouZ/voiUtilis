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
 * 检查值value是否是函数
 * @param {unknown} value - 要检查的值
 * @returns 如果value为funciton类型,那么返回true,否则返回false
 */
function isFunction<T = Function>(value: unknown): value is T {
  return is(value, "Function") || is(value, "AsyncFunction");
}

/**
 * 检查值value是否已定义
 * @param {T} value - 要检查的值
 * @returns 如果value不等于undefined,那么返回true,否则返回false
 */
function isDef<T = unknown>(value: T): value is T {
  return typeof value !== "undefined";
}

/**
 * 检查值value是否未定义
 * @param {T} value - 要检查的值
 * @returns 如果value等于undefined,那么返回true,否则返回false
 */
function isUnDef<T = unknown>(value: T): value is T {
  return !isDef(value);
}

/**
 * 检查值value是否是对象
 * @param {any} value - 要检查的值
 * @returns 如果value等于object,那么返回true,否则返回false
 */
function isObject(value: any): value is Record<any, any> {
  return value !== null && is(value, "Object");
}

/**
 * 检查值value是否不是对象
 * @param {any} value - 要检查的值
 * @returns 如果value不等于object,那么返回true,否则返回false
 */
function isNotObject(value: any): boolean {
  return JSON.stringify(value) === "{}";
}

/**
 * 检查值value是否为Date类型
 * @param {unknown} value - 要检查的值
 * @returns 如果value等于Data类型,那么返回true,否则返回false
 */
function isDate(value: unknown): value is Date {
  return is(value, "Date");
}

/**
 * 检查值value是否为number类型
 * @param {unknown} value - 要检查的值
 * @returns 如果value等于Number类型,那么返回true,否则返回false
 */
function isNumber(value: unknown): value is number {
  return is(value, "Number");
}

/**
 * 检查值value是否是异步函数
 * @param {unknown} value - 要检查的值
 * @returns 如果value等于Promise类型,那么返回true,否则返回false
 */
function isAsyncFunction<T = any>(value: unknown): value is () => Promise<T> {
  return is(value, "AsyncFunction");
}

/**
 * 检查值value是否是Promise对象
 * @param {unknown} value - 要检查的值
 * @returns 如果value等于Promise类型,那么返回true,否则返回false
 */
function isPromise<T = any>(value: unknown): value is Promise<T> {
  return (
    is(value, "Promise") &&
    isObject(value) &&
    isFunction(value.then) &&
    isFunction(value.catch)
  );
}

/**
 * 检查值value是否为string类型
 * @param {unknown} value - 要检查的值
 * @returns 如果value等于String类型,那么返回true,否则返回false
 */
function isString(value: unknown): value is string {
  return is(value, "String");
}

/**
 * 检查值value是否为boolean类型
 * @param {unknown} value - 要检查的值
 * @returns 如果value等于Boolean类型,那么返回true,否则返回false
 */
function isBoolean(value: unknown): value is boolean {
  return is(value, "Boolean");
}

/**
 * 检查值value是否为array
 * @param {any} value - 要检查的值
 * @returns 如果value等于Array类型,那么返回true,否则返回false
 */
function isArray(value: any): value is Array<any> {
  return value && Array.isArray(value);
}

/**
 * 检查值value是否为null
 * @param {unknown} value - 要检查的值
 * @returns 如果value等于null类型,那么返回true,否则返回false
 */
function isNull(value: unknown): value is null {
  return value === null;
}

/**
 * 检查值value是否为null且未定义
 * @param {unknown} value - 要检查的值
 * @returns 如果value等于null并且等于undefined类型,那么返回true,否则返回false
 */
function isNullAndUnDef(value: unknown): value is null | undefined {
  return isUnDef(value) && isNull(value);
}

/**
 * 检查值value是否为null或未定义
 * @param {unknown} value - 要检查的值
 * @returns 如果value等于null或者等于undefined类型,那么返回true,否则返回false
 */
function isNullOrUnDef(value: unknown): value is null | undefined {
  return isUnDef(value) || isNull(value);
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
