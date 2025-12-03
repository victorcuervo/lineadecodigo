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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V73PR7SX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEh5K9buvT3wBFiF0ILYY4%2B71An%2B7awoM3ZyJmaIRuEeAiEAyv45PD71ewWFf7Zqx11P8cOrU58b3k%2BcVZ8csuMXvMcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDP7CaPZ%2B3Fd94XZMsSrcA7FaMKkTicLrKMzKK6PxVU1qt1%2F2Me72rI4TQlV0QkSdED9Rs22J%2F5ChQ%2BV6LwoXbsqF8gin%2FBfNiX3ni%2FrRnxfl6stBXuN8VbY6xw8m6xQvMT3pvV4oMl6gBEYN5S8eEkgTdt%2FKKLynXdsjFnPXp%2F%2F%2FfJgCPk0okoPtZ16Oi2mEC0xfousa0TrUVYxcypYZ5s1e0HQ9f9qsG99NBpjb7BFfJC866Z9TBrXauB7%2Fexj2eHJaxuTRezPYogv8voPpZ6zfNWxqIE3D8KhBeVoknTawuoyFvzcdbtspfajAy8jrjhM3HCKmWtRb9Go6vb%2FEzfeG73Fl1bDIMVeA5q15Q4TY6AqdOqAxqlXN1KrwLgeO5ylDmLHq1pqqDoj55Gy27ukLLIVn87Td1%2BYPUPoIPu1JH531VcJ3yQYgupl4ZqizlOW89BrpVGqnmqSdRSvlDlR%2FojW7xVAyZtFDGhE7piU3Ce3UIGKxD1IxQn5CFf8rFciZgT7Aj9MFN18sedu2SBZ2MLGDRH1sCjvtDVjnfllwTC73DrSECMbSdHyM8HO%2FJdgt3bM2NXPKTkTNbab%2FXYormdvI8Ycn%2BfB1%2FUc3JcBA6r6PsiCFB%2B5IY4KTQ%2BbIe4CqV%2BfJZmZDkRO9MNLawckGOqUB1tPQ9pb%2F%2FibpyLgJsESJBZF0WN5bpkXcg4Lmgpevr52eGZLX8KxuzbPkYtCLavthl%2FqprbfaZMpnotdr%2FzKhpG124UTgHWJs%2FFDIeo87noEdTmeqeUvshq2OiYSfPZqBN9%2FEwNaQdwYXcp1gICUzk6Ep44ea9%2F573%2FccwhHUEzAusdwKk%2FtyX%2B1LLrTtKFajJG7INERzPeSIBJHfQEmObF1oetbP&X-Amz-Signature=4745fd1b7416f650aee3bc8c4f81135e4907fcba2d78c14b498ab7e97a2446af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

