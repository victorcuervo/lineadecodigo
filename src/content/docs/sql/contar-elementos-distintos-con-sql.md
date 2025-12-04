---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WHTOD3J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIHqkyf9k3xpC57VkUHo4bCFoyfxJgS%2FQyoS122wzT9ajAiBnlCaOyeJqLUfavPGhxZ5PQba90amLA6qfOdywyIxwMCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM6bfRAU7vXQDvVfeQKtwDhlfWywMx6SNPV3wiI620KHddkaSXqu9iSFa%2FpX6tnJCjFoj0LbF%2Bas09iKs32iXS%2Bv6oKaW8LgWLmT8awczTrTPJqXHyQu9G6grX29tWaIZnG%2FXk2EH8CfvIzBRMjWeLJGZHnfAp%2FNxXYRsK3Ry0fYjoSnFczBZEeSJZOa6ykrIuH86YnmJGeeHobu%2B81XYrNx4C95NeB4kqFBm2CtdnETBaaSd0B4qKtW6YybpchAQ%2FJQgK7bvZP5BTOa09Rf2wrJ9FsVzyd0eul5TkluCl9mXgMFzAQCmu6rhY97D3FIWgEgUuDMnm5nDbjM3IYo0BN5PEB6oRVwvtwiLDw3CPq26o%2BssgfAH4NTbbx1g3puljtZWnO7w004akop6cEwKyejQoWQfhVXvyJDzw8zlCUmZccnNN12v67CG4vxVJfyoryEGSnDlc1CJ760yPAKKmCg%2FrpVGuybmhnLHNG11jLJmW1w4PdUc0HQiTcxFfEpSE6inew12qoQJthw%2Flrdwa64zl20JKsK8KB938MFFgspyrg%2BTEyAlvanHobX9dX9DYrUI3qop4IxaoDffWQEzc5n8kEVQAqUOIATHwRY3hNf0f6C5Zo4dTV0gdxVqjzaR3oYkC4q%2FtIbvYiegwgOnEyQY6pgHTqK11z3ZS9aKDuPrNr7EjFqPDW%2FQpKxWT3mjnJFOnsw9XWbn7zqaTT%2FRVSmdYSVUutKDLmk9s3JYYTJ3pRuxkooU6rB7JnVsYAhZ1WmEgfph%2FN%2B0lbrQAx0sGgQJNUiVc9836pIzwjhYPIzoO%2FfapMBCox6Hr9EOS9xHA7x0S015hu0S6noKxhkwXe6aVxF2K8zlIpK%2BD9K%2BjZ16VRL%2BoAS3Nmt21&X-Amz-Signature=8c374842de02adb4d89ed2177b93d7e05c34dd8a27355298734cce979c862d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

