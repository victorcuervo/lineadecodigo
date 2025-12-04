---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4XK4O5G%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIG%2FFQhaeGk2RZDz6vjNBopEV49GsiCtUhtDxkdxxHVwIAiEArdszr91pZ6FKlfm4I7L0FXipKxMvjSjWI7ppgTDTeWYq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDApODz6GHl%2Fy5NwS0CrcA%2BCrCN7xV4vaUlC1pRrXnhe4lg7Qs3fXSETN5pbhL%2B29HfZxQjn6UScnj3fAECANyX%2FI5%2FeEOVCJn%2FQ0gv1oQco%2FyCUC8G8iSf1W8NNxnbuCnrciIoKhll8aqHrQQoaZidwLpbgHOqN2URC6ixSopOjGQRL%2F1mHPRAm6sS1qdaZwQ0BdiViDlmurzw7IuEfLWu36reHqEXZT5h3dk4lnSAsmyliEb9%2BsLMtkcekr4cbCv496Hpjz5T2j9Fqt20LtiGZlUbaIT0YBAwn2oNJoUK4jXKib2587wTBXPK%2BY2nrdbekYMEIulQaHYLaACsk%2FsvRSbp0VmtEIgS3ujxCPYn4xFTbICWMKGF7reK17NRfsFm4zPDdSAB7FQiO2Q%2BjjvOH4ezApLnLtP5TBDzamEAqGvekO%2FmtW3psLmKEKJ%2Fwnf9T23HY57wbjQ1hrEji%2BJSI8bvEy%2BkhAzyA%2Fuz%2B8R2xIbx%2B%2FEBOvVQzFE8GOeXt1DlMuH2GqK8Pli9jvBCDEbET6Xzl3WUhPYQROaBAU5i3bRJrkGuLngL0Fq3MOqr65hxS9F78LQCw8HpKdvECsUHpfuX206mCVPWvgCgoXDG7rhOh9kiikjgL4I9CFLrF6lHIKGbhpr4ykq2yDMKe%2BxskGOqUBkqqCjL0KyambzDjcRbO2hMTvGUYwDwud8NZjzQDUjdlNNZ8xYXOfPTM132MJppEibD6EaZ15qJaeF4P3DpP3kP2uViF4Gkyc2lIJyrSmMieRd9HbTPb8a5Wmqf1vIUJ3LRmacqRzBJz3z46nt9ioDmCNgLXYTeWWHgJhoWMFBB7XqsKaPlYuikJWHn%2BHLdGG3IyD87Eh555TbAxckW1e%2Bq%2F1L9TV&X-Amz-Signature=8ec8e0cf6d4da9b990d864bcb37f3048622db5bb69043c60f3b48997753a1cb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

