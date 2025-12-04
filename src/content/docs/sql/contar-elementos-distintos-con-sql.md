---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626VTGDUK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIG2JW2gJckO0fWb%2B7M%2BouXIUmDpp%2Bmc4uQGWEbQGQMqvAiEAk4qS31YpgGAph%2FyVM7c9J2nZcjO945sYqVEL%2FkdKHhAq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFzlv9%2FgLgc6m1VQfyrcA8dET2QN%2BPnFTk0NuakcODOAvfR%2FitL4ZoRXxpT%2BP4ngtGcXVrKfkf0FQp0Vm9MC%2FQj5IeSgTSvFd5anUiAR5DfHdNaUflWS7qrRiBGoWVX%2B10yr9e4APVkIK42PprOZpURuWSKWKAlNhOZ%2BSTS8FMxgXdQ%2FpwtgMgLIIU6q1lsJ%2B7G%2FUO%2FCJhI79boZt5EzhtgFqckvcOlxQT0%2BW5LJ1QOHLtXIHTgNwunE3HqspB5l8QmCbpKkaTOLXbfVoa%2FV2M1PSakqtVBmQGnhFFVRWezvjE6tU2TgV2xVIGJDt6lGMylqNOcsSjwlG3Xgi7S7Rk2z0MN4x0kcVGv0Fv0I4FKzVP7K93PSdP1n40u2EbzQPEKn6GrxrvhjZvG7%2BBAzgKEJ7LpwAoRPlli8TsdUSvk1yOiyAa3czaE9S7BQGYXP%2Fi3LOWgh6BIqgpJRadcjbBssg%2FgY2SPjKbXAiZcPMocFqQK1gIKqOsrSW6MIb%2BaC90wyMcs6SUZwok%2BCPu4ic8mnwCtEmnYOakNGg8jS1mEr3oYY1qU6JSpISFGKmVTrPXbwY%2B5PPLjp5Mrt8S9Cef2OJH%2FaTws%2FTwXI22uv89veUpS1APIsdZCaz8evznsukNi529I6JWLIH0VDMMqqxckGOqUBON3chpULIj1y79fcjJFDowsACydO5qG1iwrTyDDRt3Lxb6JwtbHbLLhxZEY92x7gWJCm37SlTjN0iyiRqyXfplx8AzAhe2VWCTC2DJ0lvfmHEI1joPoevi3UnJv1pnQs7TF6WTHPOR22iBObAzzKNfWofD6HiSw%2FgInIH82gfxaQbfBnz46HD5r9r4pj2iErfkLv4O%2Fpj9yfm5dk7Nfmc0K0%2BUcT&X-Amz-Signature=95bfed89b3492cfd4bec036d9341cdec7d83f79809b1d35ae6307c0d54f977bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

