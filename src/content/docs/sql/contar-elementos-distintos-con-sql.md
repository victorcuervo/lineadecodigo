---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OEST64B%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIEdeWBDypQWYcYXBPX30BeEG1jItzJUx0ErrhP8ey4KvAiEAtTyA2TaSEgUMEDnht0abF%2FLGdQnB%2B6NMe76TJM%2BybVwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBWXAFsmMi3Hy7wPGCrcA54fnBLbjYGibUfvCj2RdW1hqHSNkw0mgXk2hZyuAJAQoi7gWE3rv49ThD06Mth3vK1y4N1p9dNypYWxSaZCJK9fNxVPdnWwUZ1zFCPsQQ4lpnGYNDYHm%2B230XpTWeSAOYCvHOZ7iCMLQ3D9FFiV4ZC%2FtqAnH0kp%2F6sk1tZIroS5BWiIwvgBT7ZDDVQwPRyu1PWNo8SWZbFM63x1I%2B3uRBMmGoeVWnhdh0TXM9q%2FgK5hDlgFJlZM9TXmejovZGJgk5XbwF%2ByrdsP6X360n3ragng5c4ts3jd9z0yRHsUgtclomOr%2B5fwCQ5xitmEuPtYDlaxnVaKA7Hko%2F%2Bzei%2FXDmDi16ain4gRpTxdbbWegQWrQ6uplBzfUg65M5zZw%2BFButLQy41dGWngNM6ANWveiyc9JYLDiqwP80bFxw5SNA942QVo6UkNujwrbGytINNAhVeBvMvmCCqnuETZn151rQLEbv9HhyYdo0Bu85c6Y2v9USIgGXEmduu8K0SOsThq%2BrqWWZLouYyVbV8FSr2zdDkHgB1e2EuDPIGWPNq9jCtm7IzoH94r91ShH4uj702VYmAuNc%2BUa19cZJa8AlYlcDT5koMKA8%2FIbwaTzE1wkxwhbfzI4WVqT3Op9rf4MKyGxckGOqUB95b6OlLqD6ODg3zNyoWANiW7Do0M0z67bXnnDM9l9mXMXFhLU9bSNNx9931ONCHFB6WS8dPRiqT%2F8ex%2FWazamzPe%2F%2FQzersIidoVh8EBBX%2BTctT5a%2FBEjYdDRX0TiPgGFAY0VM3YRh%2BK5IdxUPfN7h61dAM3y6jbNGABKsJM47ZyzZvRpa1aoVeA8utPR7WCT%2BpGIiwaH3fMgf%2BZZ%2F79aRDN2aY8&X-Amz-Signature=3e68953d1b406aca3f7f277a9b7975a1e946f0414206193f88208f97feb761b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

