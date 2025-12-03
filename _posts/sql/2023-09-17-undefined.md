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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D4C6NUH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T171537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDPyFIlstl3g2ZYYW8oFJpJir%2FxHCsgLQVOrLLaC7BPlAIgVYcIj3HoivZNZZWNxc2DSrhmz8INkvUlL9MZQBjwaZYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDPHHDizq5vDDeEn1vircA0rst3C8aFHnWr7RurrbUMRYQMnhDYz3nQvd5dSdcDEmdgQwL%2BZPWXUkNnuP42Tut5uDwys39Zb%2Fq8r0rV8UNyzHaXK3klUCAcd1lxuK5UWXTGWbYRLDyvje28qAMyrCNWOuinn27K4mEw4LLP30haQkOOuY2UlCLvW5Oy7o9ZrFMTGg1ON%2FUz2g4UEfXUMa8YYO4zsoI%2BPmhrN4CjJs0RJbO%2F7La6Y3NCG%2Ba06JbiAZPQgd1Yrg2p3JAXIz%2BFQvd5lne%2Fo%2F3T7Go%2F9v2yMQxpz1HREkfi9f%2BwXOGS%2BDKVG7EhYU8EJApRxSpcbLTPEidjJnWPoIsle9%2FQmOM7wQC4okf7RAEeJl3OLCvzfnymLRnyPUHUuyR3hFeq5oFDiVqgZ%2FXjYAyVc7zOZb%2FHO5G60fnPxghXmGSb7AFz5vFKtzhrHE7guJ4QDUnHa6pyZ9d%2FdWkzmAnECSU5r29xvCuXDlGnWLAcQl5xzrty9v71d8TCcyGLEjqlym8jb5lymX4MlL%2F2FqDDvTs03y08ITKWOwUNfUmt3fjkFw0O9jVbK%2Fqfy5wBS5wFE5woYL4%2BVoMYqDVAVxcRyuEJbVJaaaFXMscTIvW2iIQbIxIC1EJAeFE%2Bk7hKJ8at2WWbCfMNnawckGOqUBu0YIkSO68l81O%2FlX4f2o3fU3uwzkxmU63fYCemownEq7P4HJkTXQzSnWF2%2FXtdKpsqYF2tEUuchF1UsYEnEisPnlv%2Ft02FEWA5cciS90gIGIJjVaV9cCPOZrR%2B2CNURcoBzxYBrYkaZ4uEaFewnaBk4khfzal1ua5685Hk4URrvX7I4PTj0Yy666m9Le6nbpQLxIMgMu5BNRaltxAXqG0efQ%2BBs%2F&X-Amz-Signature=630f1a5e7bbc163b1081845779c63859058da35ab60402764197e738a41e242c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

