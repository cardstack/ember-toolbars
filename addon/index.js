export function requestAnimationFrame(callback) {
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame(callback);
  }
  return setTimeout(callback, 33);
}

export function cancelAnimationFrame(which) {
  if (window.cancelAnimationFrame) {
    return window.cancelAnimationFrame(which);
  }
  return clearTimeout(which);
}
