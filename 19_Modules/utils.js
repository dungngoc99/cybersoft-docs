//export: khai báo để các module khác có thể gọi tới và sử dụng biến này
export const PI = 3.14;

export function circleArea(r) {
  return PI * r ** 2;
}
