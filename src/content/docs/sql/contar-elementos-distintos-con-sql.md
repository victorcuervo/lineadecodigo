---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FZUGBPU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFrRwzCxi4XWQC1ElyPcViPKujh74ZPEyQjO0isBrh85AiEAsMkDcaYDREFPKXR4hTJSORKSpTGjFRcPaQLvMbSFijEq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDD6JO59smMd7NQGwFircA%2FPilcyEDcRn1tbU5T6jvTlhaJdv4YRA44b%2BWOcB7T1%2F%2BUhcKE4nsA%2FrZoyLd%2FyhrtZj%2F%2FeXzBZbEDWn8FUiyUq28stC9%2BlVwFGZUy8WXq8ToV1AUgR1pFwnczv1MXycmO8KvNoqcAkzPRYep%2BN4GaZdjKDdrZezrmP9leZ%2BNoyZrYMbkYbu%2BDtPYVq8vRfAAiEYn2h6yJT%2BB4Cg2bbUwwPmir5%2BAeUuDjV%2Fq4gWlB0yl%2FxW7zyH0GhVhxkA9aq2STlHRm6euVWe%2B5k2DJNxIBEXkE7ltUj%2FU1nQpK1oUymNfmNCPkHVKTVvbPFwGjXdDsreur4FOE8eEAX0jdAF1YbaiknLa2aXAEPeXdMAmtIYA6S9dHjMB%2BqRHMGanQwPuT2zWCrJ%2Bk3oOFH81lATeXXghg4YfS0CWaYGpKzWNLooWR84%2F%2B3OZaRvVT7gQmPuOPhkA7VY85JhuLXSKmVKzYvHMpJumjjHE13XIGYDSV5QIOyMLdfh%2B39jR7sifSD8OIl08Ybs0wW%2BvjjBSW9UXLbIRFuXGKKOvbuu%2FJcIcNJgcrVdyRPHk3uTjvJvt5m35KgD%2BCyHJ4oos9F42ODSXeqjtb7AYuH9yxxSZcJzwK%2Bp3ioqPZ5zUchPIoeYMMnzw8kGOqUBGWQ%2B7ZpZ92Ii8xR72mPHyS52SpkuxTn9fElNeMqzGtmwsTA2fsXDkZs9JGQt%2B74c8zH0cHwC57BmygjC3hxCrTa%2Bxrhwcg7RzC7VoDKtGcEs1cEF8KXEd06m5Ebjta%2B5LEgM9clm8wNyW5NWi4YpMjFN2sTRBPySnm11BHB9UBlzszSObg7qw9hISHGRigVzuEOe2s%2Ba9HHwnOz7WBFiXMq%2B0FvX&X-Amz-Signature=91ac462ad6936dcfbd35b59aca9aa5dd8c971dfbf11aa6b6d12e32d8f2b4780e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

