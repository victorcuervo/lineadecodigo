---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHF3RPEY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDjFxMDtccxpAdE%2FJLyR9naq%2B0OL%2FONvQAaH7eJ5OglbwIgf2NH2BYuneXa3vQZcgXXDbx%2FPJ38bme8ll%2BH01AGHxsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDJj3tPWwIzHfxYl26CrcAxjX2zFzOykIek0gnRAUJBGVJfnDnCfp7WQlMvpJ%2Bv0Ax1fAs5OvHPDwQVuzstA4FJE1IMYiVg2uThuVvMKWKqC6dUIvmcL4IojSE2zUulrbGboKh%2FXzSBbJJMfWwWvRfoSQhzMd8hSefwbpSCXNPw%2B073PYU6KM7i1mR4QZGNYhUbJO8V9iSKDGu9HiwxAW2ozY3JcO7LwB8cwWOW88pX5rvRaDJ5y6SDWULVORYIKAP%2Bao0KMkgc9Hx1uWcIzeJOz6rLX4SMqlGvenfRwqD7VxMVL9GEC2uJiZdkW0qisxdqh1jPwLlNNZMJ%2Fwne9G1hXbRUZumOGJW6OW9eooyWFidwSiIVvZuLqeoLRWrA4KGqVye6LaH8A1e%2FoydD%2FXtZzcRYJNtXHfaIVWgYg61P1spWfZwvoy0PZyrdV6HXXsCIeBq0RjaV5Li0%2BvZWcZeXNW%2By%2BfMGzL3BV0mmBjuZ4k3y%2FKhrjanxcBus5%2FZHla8L53jtz3BMKq0iFyqV4B%2B0ztjHlNQleLnDnJ5EMRXo1sM5wJuNBlckvDU6SCMGCkTLw1ZyxhRwg%2FDuIslo1MCG%2B%2BSKfLTCpkYGBPVasHiChf5srGv1GIRAdIZm4MvmeIB1txpOOvAhlvFSESMIzzw8kGOqUB85nO9kmPuSPdTrr4c1i4jdaqBW%2FsAoHr3rZO7ffam2OZo3A0BG4c9mEGj62DfWbNZ9W6HiVlzD5XW5sYfvJ4SDL5ai5ZYZOtsVfqphvn5m8IKTHsa5I0DPoDkcKJuStoIogeUIFJ9az6w19ZVmodv3PoVJIJM6%2FX2bSzPliSNbAuj9kH84kKtG3iyR6q8Q6IsnNX9o8q%2F84qf7Qz%2B2UJeH9kRTTF&X-Amz-Signature=d97c2b9a53ba453819fa075b499af61f0f766da8f4c9f0cb688dc429b8c65aeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

