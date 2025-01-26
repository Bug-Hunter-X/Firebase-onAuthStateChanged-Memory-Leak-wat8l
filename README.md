# Firebase onAuthStateChanged Memory Leak
This repository demonstrates a common error when using Firebase Authentication's `onAuthStateChanged` listener: forgetting to unsubscribe.

The `authBug.js` file shows the problematic code that causes a memory leak. The `authBugSolution.js` shows how to fix it.

## Problem
The `onAuthStateChanged` listener continues to run even when the component or function it's in unmounts or completes, leading to unnecessary resource consumption and potential crashes. 

## Solution
The solution involves storing the return value of `onAuthStateChanged` which is an unsubscribe function, and calling that function when the component unmounts or when the listener is no longer needed. This ensures that the listener is properly cleaned up.