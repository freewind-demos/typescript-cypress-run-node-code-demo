TypeScript Cypress Run Node Code Demo
=========================================

在cypress中，有一个位置可以让我们运行node代码，就是在plugins中。

其它地方的代码将会在浏览器中执行，所以不能有node的代码，需要访问本地文件等，都需要使用cy提供的方法，
如`cy.readFile`等。

而在plugins中，它是在cypress启动的时候执行，可以运行node代码并对config对象进行修改供测试中使用。

```
npm install
npm run test:open

npm run test:run
```
