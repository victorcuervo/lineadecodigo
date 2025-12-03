---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQMZ222%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFT86fNFo0AV86XJlt1ZjNr72ge4jzfemxk18gyLm3N2AiEAhf%2ByL4mnxtRnJESpGEgj3pQ8MZ0jKKihD%2Bd6HZPSLzsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJsOJZoeaY07qqEbJSrcA9l%2Bl5oPa54DIR6azB1F9AEEMYj6fXGQPcyOlHknFjDGrJir2yIQbKB0fi1QE34BGQ42W6hCyL9ArdYnrRxssNMrhd5AN0hPgoKqba%2FF83DnR8I2gFZCiV8Cwg8FajXuq8tkDwCLCBbHGfRBreQp6FyXqUr3RPv3%2FExKXdRPyEaOW%2FppFiAx6loh2dKk6qyGK%2BgwCIpQdU8YjVpqkQk8XIgx1WN2kLEhhZ9xTe082c8DKRHTBakOUgqDu71b5llNZNZAzb4T3g9e55fxCnsQ2dsf2ZnnUZ%2FzOfWxl4WBs%2FtPNqK9SIoWIUlBdUv3o1h9QF1UzdVWGXwNKC0y1Zo8p0Ftc8vtFW0tYYV68WP%2FYiCnb0AHnIDjbdyDOtQIB4HB71WrKix%2BHRPnunfIkcTw8udqpGOjS3iYqacT7a08QYUi15XAI2AzePfbPJPuoDKyjYKaqkRB%2Bu13PxroEDSToOlfELxvr5BIYl0qPRNbpLUVHVP7i3t0suV4Y5YrgReeE53FQUTQ%2F%2BzjxRYndimL8XFgtPqcYXTLzLdVH%2BhvZJIglM%2Bed0SMPAoKWqWBmNjhziZXmTVPdBdv8Ry1owMmi%2FEhmleNCm1hCx4kRpsLYEYkQ6uLY91kZJOlKhkRMJX4wskGOqUBILyTiToWQbE2lFpHzs1kid2QhmgMIsiOVr5C%2F%2BsjOpH7T9ZhiYbtRu3yPdip9PanCo0si%2FDieuehdpUzvgsvGs%2BzsJ8%2BrP0vWbqu5iRoOOGa4NIKEWpbYL7A%2FbACkx0vuNMf0bmjo2MDG3wiHO9GYv8jrTxU%2FPVx3sdNmGegmOdBf7M%2FlfwhF4utggYI2c58J6Qy6H9hMtNO67Ou8BO3k9ZBFrGj&X-Amz-Signature=c8e4ba384995ba8d4b5994f1b3ac1fff7481a533695e8f153d654cb9ad1a8158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

