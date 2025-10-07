/* JavaScript
export function forEach(items, callback) {
    for (const item of items) {
        callback(item);
    }
}
*/

// TypeScript equivalent
export function forEach<T>(items: T[], callback: (item: T) => void): void {
    for (const item of items) {
        callback(item);
    }
}
