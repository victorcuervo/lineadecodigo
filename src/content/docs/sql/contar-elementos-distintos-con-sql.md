---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX3JYC3X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIEzuKgG6MmKD8y1%2FeegnSTrbo0fSwu1tQMvaCWh%2FFI4%2BAiAv4o1Rlna8BIRUl0yEDYo%2FK9Mx8HjFBYmkyVrK%2FiBZHir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMdBlvQCzBQ9SRlbQOKtwD0rhFuqgZd7t3NSfvRa2RMlRzJsWj52X6752xONtjB%2F5CgiEVPDqsm7L5Ft84kWbJBL%2FqNA52g5Yifmt4k0fbtGanXe3KZa85POi4OA1AhP3RPQ%2FdRDdsm%2BS9BzmtNwuKPmc1hcWueWm5vwc7599Ck84S1KqA6a3XcRzCRtEjXLSVzY4vKNF6ftp2UItDt9%2B5PUjHFmTeQSSHG1JKdvE2%2BkVsgy0PPQbnm7EM%2Fbqs4o%2Bjl7LeGKum9B3NvMBdSuydcldG%2FoSg9FZIYnG5RO8lulKnFNT%2FoNJ3Q4zKUQMRo%2FfdYvLRbDXlbpPWSZnMi7Jgmycu%2FkdA7obIyx0sAPns%2FRuvCElPzj9CDR9McGAVgegtgNieD%2F59PWsKB8Y%2FsVNUq63R2%2B8xVHuNVpwX8u04CK6n3nDVrMxA6WLnHyBezz%2FUqah%2FPyVe%2BA%2B3PJtcYK%2FLSshEu9oXNdHZgVwU2dymnsno6hG%2Fe4HI5jaIov0%2Fcm%2FjtFso15xuz8flQGUsqxKUULOArD3QqUERSUF8mMbsNLiESKtKZBAgzzOcTY%2B5DjEq1RUsyYfKown%2BbdgPFJyxK9obSKmCuRG5SBStjvoWMrBq5lb77xAbV7ohi1XOZGh36%2BKtXsDIkFLKGwkw0%2BjEyQY6pgGtQOcILDCQTQI8SRKPfGEVB88%2FUmif3VuGjEZ%2FYagxSyEXd71FMUn25lYgbFKBh4%2FX59ZLNCBQxREErY%2FT16%2FBkHYu2DDXELk7z8P6P4zzopFD%2Ftwjw7kipXivDO4wNRDYgn01kDtkPLq30ymZtPpPdjcHgzjAdV1EJKg7AihvKOwA8ePGkepUIKVkairkIFR1WQcSoAR4t5CBt8g843cgVKAsEbkr&X-Amz-Signature=233ede13198bcf81cbf6460eb2ecbb5ee26da2635e16feed92ac48b2eb45a0df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

