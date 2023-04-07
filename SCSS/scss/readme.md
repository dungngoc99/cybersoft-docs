- Link layout: https://cyber-phone-dark.vercel.app/?fbclid=IwAR3K4xxlHPNfkISooA7hzr_L4HJtolPi8nhmGN8Zs7TTbL2sAkIJolZLFq8

- Vào trang style.scss
- Mở watching sass ở dưới hoặc nhấn ctrl+shift+P rồi gõ live sass:watch sass
- Bấm ctrl + , => ở trang setting bấm chọn open setting(JSON) ở góc trên bên phải
- Ở cuối cùng, sau số 1, thêm dòng sau:
  ,
  "liveSassCompile.settings.formats": [
  {
  "format": "expanded",
  "extensionName": ".css",
  "savePath": "~/../css"
  }
  ]
- Trước mỗi file trong cá folder con đều chứa dấu \_ để được bỏ qua, sau đó mới import chúng vào file style.scss chính
- folder base: chứa những file chỉnh sửa lại mặc định của trình duyệt hoặc của thư viện
- helpers: chứa những file variables, mixin, extend, function
- component: chứa những file phần tử nhỏ của nhỏ của trang web(button,...)
