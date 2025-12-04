---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCGBQJ5W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCICtZWk5BR%2FHoicbOwejjaF5ghjQcF9aXrbaXAhhdAih4AiAuolnb8lsAImeFmWnjVpi4%2FsZWD8RLy99Caa7RJyBEcSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMOIhpLXTy6qNtk1dcKtwDce1ZdL4slavBLLVddR0M6PYDrfJ8Gz1%2BIGFB8eyo5ajOr4fflq63S7WsrDxtj2XqQ8mIOfr%2F4Z4kcB3t3RIrJN2%2ByBkoMhK3zKIgFYaClJZFHVVZKR1ZH5%2BMSAWgtrgNEbyPZKApzRwNzH0SSgs%2BE4APAmWoiXo%2FIyavEy1%2FkqVoQiSoqEcJPrcHeHPsPM7bHhG8UZ2HiONWU%2BgHKDW7FJdgE5dkqZPeDpT1AUfFi%2F1h8BZld%2BZ0gRweDz5Az8QrekNBiza%2FHkM9qsCQ74AopuZIoKqdF8KCx3FjFHLy%2F5A8Mc79h58mTvp1BN%2BjU%2F12mWNI6ivcXp19uHHKu1s8AhpJR832TV5x%2B%2FKOIA0u7L4yuSXFNrvLUwew9oScaRVbttRpKkVp6VMKBg%2FH5Mu8Rg10F2QIQyFsayS9h3Y8sO4JW4Du7I1%2FdFroh0TZJ6JSTRlaVaAaogH3lB%2Fmug9iM0hBKXbI095aUjPM1dRKeLxvZVUaBm2yml2YWpAedltGNy2j0KVLn0Rz7te9j%2B5Rx%2FiD9VJnitvrntxGwWd0jWhW34ubhlPyUZGWJs7qhPIZe6Q0K0vYLZ87wtwm2%2B9oMysTjxAFHYc5majZ%2BS3r4TyCFEEwKF9A5FT0c%2FYw%2FoXFyQY6pgFTC2cEb4vhmOLVJxlZT9P3CfgpeG19WQQNlWnpe7WaYPTleO4nIWI6JooLhvwfqkJD5gY17fct%2FLM0TIfuCflkG9B7z6BVJZ2jAdDaJORS3KI0zhR%2F7XEPjxLr7fl2LeYzja9HyJbecOFqTCm3MXBju0HDhLBDfTghk6ic2vRsL2BUG5JrfMM6J6989mFpZiFIZgOZn0heSkzKd%2FazEK0GChLXmLeU&X-Amz-Signature=a855eed85125d8ad07caaf61532ebdc73ae681689388c48f3cd3a4cd6b1b88cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Dada nuestra tabla de libros, podemos realizar una consulta [SQL](https://www.manualweb.net/sql/), para contar elementos de la siguiente forma:


```sql
SELECT count(*) FROM libros
```


Esta consulta [SQL](http://www.manualweb.net/sql/) nos devolverá todas las entradas que tenga la tabla libros. Es decir, todos los libros de todos los autores. De esta forma, ante una tabla que tengamos los siguientes elementos dentro de ella.


| ISBN               | Titulo                  | Autor             |
| ------------------ | ----------------------- | ----------------- |
|  978-1-4493-0814-8 | What Is HTML5?          | Brett McLaughlin  |
| 970-26-0518-0      | Cómo Programar en Java  | Paul Deitel       |
| 978-84-415-2348-7  | Java SE 6               | F. Javier Moldes  |
| 978-1-4493-1439-2  | What's New in Java 7?   | Madhusudhan Konda |
| 978-1-4493-1608-2  | Just Spring             | Madhusudhan Konda |
| 978-1-4493-2838-2  | Just Spring Data Access | Madhusudhan Konda |

undefined
Obtendremos que hay 6 libros al utilizar la sentencia `count`.


Contar elementos distintos en [SQL](https://www.manualweb.net/sql/) sería para cubrir consultas del estilo... _"Contar todas las editoriales distintas de las que tenemos libros"_ o _"Contar todos los autores distintos de los que tenemos libros"_.


### Count y distinct para elementos distintos.


Para ello deberemos de aplicar la función `count` de [SQL](http://www.manualweb.net/sql/) sobre los campos editorial o autor, pero con una salvedad y es que utilizaremos el modificador `distinct`. Mediante esta sentencia `distinct` estaremos contando aquellos elementos que sean distintos.


La sentencia [SQL](http://www.manualweb.net/sql/) tendrá la siguiente sintaxis:


```sql
SELECT count(distinct campo) FROM tabla
```


Así, para sacar los autores distintos, ejecutaremos la siguiente sentencia [SQL](http://www.manualweb.net/sql/):


```sql
SELECT count(distinct autor) FROM libros
```


Siendo el resultado igual a 4 ya que solo hay libros de 4 autores diferentes.


De esta manera ya sabemos cómo podemos contar elementos distintos con [SQL](https://www.manualweb.net/sql/) mediante la sentencia `count` y el modificador `distinct`.

