# Proyecto básico de tareas con: NODE, EXPRESS, MONGODB
Sin rutas protegidas ni JWT.
Con middleware que oculta errores (no lo recomiento) pero maneja de manera distinta los errores.
Tablas: 1 tabla (tasks)

Task:

(get, post) http://localhost:3000/api/tasks

`{
    "name":"creating task",
    "completed": false,
    "statud": false
}`

(get, patch, delete) http://localhost:3000/api/tasks/62f1ca085802bdaa82a81541