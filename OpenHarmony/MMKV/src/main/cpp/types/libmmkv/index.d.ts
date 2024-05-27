export const initialize: (rootDir: string, cacheDir: string, logLevel: number) => string;
export const version: () => string;
export const pageSize: () => number;
export const getDefaultMMKV: (mode: number, cryptKey?: string) => bigint;
export const mmkvWithID: (mmapID: string, mode: number, cryptKey?: string, rootPath?: string, expectedCapacity?: bigint) => bigint;
export const mmapID: (handle: bigint) => string;
export const encodeBool: (handle: bigint, key: string, value: boolean, expiration?: number) => boolean;
export const decodeBool: (handle: bigint, key: string, defaultValue?: boolean) => boolean;
export const encodeInt32: (handle: bigint, key: string, value: number, expiration?: number) => boolean;
export const decodeInt32: (handle: bigint, key: string, defaultValue?: number) => number;
export const encodeUInt32: (handle: bigint, key: string, value: number, expiration?: number) => boolean;
export const decodeUInt32: (handle: bigint, key: string, defaultValue?: number) => number;
export const encodeInt64: (handle: bigint, key: string, value: bigint, expiration?: number) => boolean;
export const decodeInt64: (handle: bigint, key: string, defaultValue?: bigint) => bigint;
export const encodeUInt64: (handle: bigint, key: string, value: bigint, expiration?: number) => boolean;
export const decodeUInt64: (handle: bigint, key: string, defaultValue?: bigint) => bigint;
export const encodeFloat: (handle: bigint, key: string, value: number, expiration?: number) => boolean;
export const decodeFloat: (handle: bigint, key: string, defaultValue?: number) => number;
export const encodeDouble: (handle: bigint, key: string, value: number, expiration?: number) => boolean;
export const decodeDouble: (handle: bigint, key: string, defaultValue?: number) => number;
export const encodeString: (handle: bigint, key: string, value: string, expiration?: number) => boolean;
export const decodeString: (handle: bigint, key: string, defaultValue?: string) => string;
export const encodeStringSet: (handle: bigint, key: string, value: string[], expiration?: number) => boolean;
export const decodeStringSet: (handle: bigint, key: string, defaultValue?: string[]) => string[];
export const encodeNumberSet: (handle: bigint, key: string, value: number[], expiration?: number) => boolean;
export const decodeNumberSet: (handle: bigint, key: string, defaultValue?: number[]) => number[];
export const encodeBoolSet: (handle: bigint, key: string, value: boolean[], expiration?: number) => boolean;
export const decodeBoolSet: (handle: bigint, key: string, defaultValue?: boolean[]) => boolean[];
export const encodeBytes: (handle: bigint, key: string, value: ArrayBuffer, expiration?: number) => boolean;
export const decodeBytes: (handle: bigint, key: string, defaultValue?: ArrayBuffer) => ArrayBuffer;
export const encodeInt32Array: (handle: bigint, key: string, value: ArrayBuffer, expiration?: number) => boolean;
export const decodeInt32Array: (handle: bigint, key: string, defaultValue?: ArrayBuffer) => ArrayBuffer;
export const encodeUInt32Array: (handle: bigint, key: string, value: ArrayBuffer, expiration?: number) => boolean;
export const decodeUInt32Array: (handle: bigint, key: string, defaultValue?: ArrayBuffer) => ArrayBuffer;
export const encodeInt64Array: (handle: bigint, key: string, value: ArrayBuffer, expiration?: number) => boolean;
export const decodeInt64Array: (handle: bigint, key: string, defaultValue?: ArrayBuffer) => ArrayBuffer;
export const encodeUInt64Array: (handle: bigint, key: string, value: ArrayBuffer, expiration?: number) => boolean;
export const decodeUInt64Array: (handle: bigint, key: string, defaultValue?: ArrayBuffer) => ArrayBuffer;
export const containsKey: (handle: bigint, key: string) => boolean;
export const count: (handle: bigint, filterExpire: boolean) => bigint;
export const allKeys: (handle: bigint, filterExpire: boolean) => string[];
export const removeValueForKey: (handle: bigint, key: string) => void;
export const removeValuesForKeys: (handle: bigint, keys: string[]) => void;
export const clearAll: (handle: bigint, keepSpace: boolean) => void;
export const totalSize: (handle: bigint) => bigint;
export const actualSize: (handle: bigint) => bigint;
export const sync: (handle: bigint, sync: boolean) => void;
export const clearMemoryCache: (handle: bigint) => void;
export const lock: (handle: bigint) => void;
export const unlock: (handle: bigint) => void;
export const tryLock: (handle: bigint) => boolean;
export const getValueSize: (handle: bigint, key: string, actualSize?: boolean) => number;
export const trim: (handle: bigint) => void;
export const close: (handle: bigint) => void;
export const removeStorage: (mmapID: string, rootPath?: string) => boolean;
export const isFileValid: (mmapID: string, rootPath?: string) => boolean;
export const cryptKey: (handle: bigint) => string;
export const reKey: (handle: bigint, newKey: string) => boolean;
export const checkReSetCryptKey: (handle: bigint, newKey: string) => void;
export const backupOneToDirectory: (mmapID: string, dstDir: string, rootPath?: string) => boolean;
export const restoreOneFromDirectory: (mmapID: string, srcDir: string, rootPath?: string) => boolean;
export const backupAllToDirectory: (dstDir: string) => bigint;
export const restoreAllFromDirectory: (srcDir: string) => bigint;
export const enableAutoKeyExpire: (handle: bigint, expireDurationInSecond: number) => boolean;
export const disableAutoKeyExpire: (handle: bigint) => boolean;
export const enableCompareBeforeSet: (handle: bigint) => void;
export const disableCompareBeforeSet: (handle: bigint) => void;
export const mmkvWithIDAndSize: (mmapID: string, size: number, mode: number, cryptKey?: string) => bigint;
export const mmkvWithAshmemFD: (mmapID: string, fd: number, metaFD: number, cryptKey?: string) => bigint;
export const ashmemFD: (handle: bigint) => number;
export const ashmemMetaFD: (handle: bigint) => number;
export const createNativeBuffer: (size: number) => bigint;
export const destroyNativeBuffer: (ptr: bigint, size: number) => void;
export const writeValueToNativeBuffer: (handle: bigint, key: string, ptr: bigint, size: number) => number;
