/**
 * 获取Promise返回的类型，否则直接返回
 */
export type GetPromiseType<T> = T extends Promise<infer R> ? R : T

/**
 * 获取任意函数的返回类型
 */
export type ReturnTypePromise<T extends (...args: any) => any> = GetPromiseType<ReturnType<T>>
