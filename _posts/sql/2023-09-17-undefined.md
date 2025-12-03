---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBQQGTRO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T073824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIAi%2BJczvvRzN4NdnRNBqjplDzjRo%2BYkmLqhnyV5rvmWbAiEAuVtxQtveb5MoWh7VOqx22YPu5xNekXjTAECKHcXbOCAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDHdeQyEzjx5FuK7KhCrcAxJFT2Fv2hqA39JH697nAc4F28Gpg6cIPws13oEjBqpfInsQmAg44L8K6628HmEfRz61pf4GVAnuKKa%2FnCgdhXQyLPf5cA4QkExb14ZLnraNyM6W1Z165L%2Fvk1jZgWD%2BBbpPUt%2FCSMxyAsJmtjERcm%2Fz91la1aT%2BeL%2FwHbn9ICAsc1ehIEsJg7r5sSm8wiUxx9YcwmKd7dyvmGpBS28SbXzhTkFfcsi4g8SG9vJw8i536KuDLKLPTcqtW%2FDrcQeuUZZwa5o%2FJsPXhwAuWCNf09Runv7vpDKsdG9Xj%2FdkwX0JVm6goBErECoZBx7mSQLm6pkDvvWfOUIw9KRrGceR2NhALVWZ4thDgOy2MAZ%2BARoEz%2BIU51j9IBLOFLhaWnJxgA0%2FodSmoT6X0JgSL4TFfzFFaWXcph3agovgSm2mViAgUGZhl8qXjKYMylaIZkgjSo1G3sDKsdNe0XnunCOPbava3qolnI9u5qUE7ElF3uoX%2F3enVp6AOOi5nY0oUePln10MTzLzVonI6JJ3CeKrnPskruUlNJABYzHTVAa1KyhwjxqgrhPD73YZAfZ1yMGVMsxhP3rvMLA07YHfp3b5iMb18xOdzPnm5pflbWmrS5UtDu%2BjcthlOJHtj69aMOu5v8kGOqUBB8R7S8ebFGbDO6I0U0iAQ45e8HBoChPewra7anEjzpJFQCD8xCgjrxzL4eaSgk10mdSNF0Jq2JYEXgWQnMrJj3SOePWx6uEdGtlwDQRS5QilWe6Ykuj0oNajMEoPCsZnlNfCbX4m%2BK2zoPvmb7jNjIRyyuUJ7zZt6SKFRILgyrlWdTj1F6EbKzCynaaZwd%2FHMD%2BSoyR3siVBXB34EBaAhBZMzDTc&X-Amz-Signature=3ea6f1d79b5d76b4f93f25299078e936e198333e936c0895005ea37829a0fc04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

