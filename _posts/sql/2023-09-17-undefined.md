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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZCWRPZL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDC2X6PveURdCpj8jhCN7faK0yyotCVRCUHY3BFaKZITAiEAkuPwLDnjZEVMIjNPAPJgbigqD9E1GjBG4lHI0V81Ga4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDBenMkzBDG4pjwgMJCrcA5lh0dTu6hnbHsPESGckZF9Eoe7gEyIHaYJ6Z5laaEOZH0E6ab5diptiLa7GbZX0fThxtHaQx2UWfwo7O9kYTfxR0%2BB%2Bk5wEe3Q%2Fh4RwfzoEQcuQylWcrrQpLXkZFW%2Ftw9NLaq6J%2F5NlYVkJZeRTEwNize1J%2BtVIOFDIqQX4OyGUVwqVkxmoYta%2Bjq2g%2BIqB25q87nQ5If%2BHIFOSn6YZr0PWyxdThBpYvSuK9wBX%2BLsjUiOhu55bZMcg9qiiYTp5TN1mFmCZn4YEZg6VSQhkDhG0HUwb0DguC9lVsip8Y7bjuw7UKEIhcnQD4sYTyv5HSpArB%2BRhln4%2FYn6Yof30Vq%2Bs9SyuvxxE03e5xhAu9v02U%2BmtjvFKqq64kpkOXdvk1UybZLJLfMimPO7bm8y6IF0i2pJd5LNQ4O4nD6M4jY3KmdAT0Dv6qcVGdBL7Ke1VH1s%2BbcuNtHlAIQKyHTDZTZP93eEobH7j3rg35svjXXsjBCzpFgNwrVcQN7ZyUJo0oZ6UOGRO%2FOLn16jdzRTJ%2BW%2BsqMmiMJhhCUN%2BZOrQQM80uqrUsJedt2Vt%2B9BetA4O7Gr5en3dns37%2BGkxhahZQnId4zQ3WzczUsKlUgmGoBzgr9%2BPtQRe%2FYICGBcrMLKIwckGOqUBgH33DqGmc6ffi5gd4cV1M5Z5om1um7Pnqfo6Ry21zL7Z5meuV61EqIAoIDBl9tinH%2Fe8eXEjErxmncuqW02jrPqEzuBi4XEKXQxUuA539YNjBEkZWi4PpEgSXtSQR3Z5LTZ930kZqEkyuEPSs1ehgWH5QN9u%2FBouAZrAdGDBi0Wm0gdcZ8vZ2c56IJe%2F3bL%2BaRSpdfDg7%2F3KqmjMM%2B20v%2FqQQoFe&X-Amz-Signature=5dc217970205f1d2ed9d6ec22c2904f1268c126dd9ffa737bf049bcc4fa1ad38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

