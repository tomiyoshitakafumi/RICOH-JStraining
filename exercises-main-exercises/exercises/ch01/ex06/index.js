﻿// Fn = F[n-1] + F[n-2]とすると計算量が増えて終わらない
export function fib(n) {
    if (n < 0) {
        throw new Error("負の値が設定されています");
    }
    let F = [];
    F[0] = 0;
    F[1] = 1;
    for (let i = 2; i <= n; i++) {
        F[i] = F[i - 1] + F[i - 2];
    }
    return F[n];
}