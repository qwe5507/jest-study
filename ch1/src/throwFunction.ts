export function error() {
    throw new Error('test');
}

export class CustomError extends Error {}
export function customError() {
    throw new CustomError('test');
}