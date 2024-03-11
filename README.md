# Password-Generate(密碼產生器)

使用 Node.js + Express 框架打造的作品，Template engine 為 handlerbars，使用者可依照需求產生一組密碼

## Feature 產品功能

使用者可依照以下條件作篩選，產生對應的隨機密碼組合及指定密碼長度

- 密碼長度為 4-16 個字元之間
- 是否要包含小寫 a~z
- 是否要包含大寫 A~Z
- 是否要包含數字
- 是否要包含特殊符號
- 可以輸入想要排除的字元
- 可以輸入想放在最前面的字元

---

## Screen Photo 畫面截圖

![cover] (https://github.com/dan00815/password-generate-Express-handlerbars-/blob/main/public/img/cover.jpg)

![screen1] (https://github.com/dan00815/password-generate-Express-handlerbars-/blob/main/public/img/screen1.jpg)

![screen2] (https://github.com/dan00815/password-generate-Express-handlerbars-/blob/main/public/img/screen2.jpg)

![screen3] (https://github.com/dan00815/password-generate-Express-handlerbars-/blob/main/public/img/screen3.jpg)

![screen4] (https://github.com/dan00815/password-generate-Express-handlerbars-/blob/main/public/img/screen4.jpg)

## Installing - 專案安裝

1. 打開終端機(terminal)，clone 該專案至本機電腦

```
git clone https://github.com/dan00815/password-generate-Express-handlerbars-.git
```

2. 打開 terminal 到存放此專案的資料夾

```
cd password-generate-Express-handlerbars-
```

3. 安裝相關套件

```
npm install
```

4. 執行專案

```
npm run start
```

終端機顯示`連線成功`代表啟動完成，請至[http://localhost:3000](http://localhost:3000)開始使用應用程式

5. 若要退出當前專案

```
Ctrl+C *2  //連按兩下Ctrl+C結束批次工作
```

## Tools 使用工具

- Express - 4.18.3
- Handlerbars - 7.1.2
