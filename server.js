const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Используем стандартные middleware
server.use(middlewares);

// Middleware для автоматической генерации числовых ID
server.use(jsonServer.bodyParser); // Подключаем bodyParser для обработки тела запроса
server.use((req, res, next) => {
  if (req.method === 'POST') {
    // Генерация нового ID на основе текущего времени
    req.body.id = Date.now();
  }
  next(); // Передаем управление следующему middleware или роутеру
});

// Используем стандартный роутер JSON-сервера
server.use(router);

// Запуск сервера
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});