========= Khai báo biến =========
Hiện không dùng var, chỉ dùng let và const do các nhược điểm sau

- cho phép khai báo lại biến đã được khai báo
- cơ chế hoisting:
  +B1: tất cả biến sẽ được đưa lên khai báo trước.ex: var d, var e,... và không gán giá trị
  +B2: nó sẽ chạy CT
  ex: console.log(d)
  let d=10; => kq hiện d undefind do hoisting sẽ khai báo d trước, sau đó sẽ hiện d với giá trị rỗng, sau đó mới gán d=10
  với let, cơ chế này sẽ không xuất hiện. biến vẫn được khởi tạo nhưng sẽ được cảnh báo là uninizelize => không thể truy cập vào biến trước khi khai báo biến
- Scope: phạm vi hoạt động của một biến:

* global scope: biến toàn cục là biến được khai báo ở ngoài cùng của một file, có thể truy cập được ở mọi nơi
* function scope: biến được khai báo bên trong một function: chỉ có thể truy cập biến bên trong function nó khai báo
* block scope: biến được khai báo trong {}. VD: if(){}, for(){}, while(){}
