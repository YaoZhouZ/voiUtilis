/**
 * 该函数确保给定的字符串具有指定的前缀。
 * @param {string} s - `s` 参数是一个表示输入字符串的字符串。
 * @param {string} prefix - “prefix”参数是一个字符串，表示所需的前缀，如果“s”字符串尚不存在，则应将其添加到该前缀中。
 * @returns 函数“str_ensure_prefix”返回一个字符串。
 */
function str_ensure_prefix(s: string, prefix: string) {
  return s.startsWith(prefix) ? s : `${prefix}${s}`;
}

/**
 * 该函数确保给定的字符串以指定的后缀结尾。
 * @param {string} s - 参数“s”是一个字符串，表示输入字符串。
 * @param {string} suffix - “suffix”参数是一个字符串，表示所需的后缀，如果“s”末尾尚未存在该后缀，则应将其添加到输入字符串“s”中。
 * @returns 函数“str_ensure_suffix”返回一个字符串。
 */
function str_ensure_suffix(s: string, suffix: string) {
  return s.endsWith(suffix) ? s : `${s}${suffix}`;
}

export { str_ensure_prefix, str_ensure_suffix };
