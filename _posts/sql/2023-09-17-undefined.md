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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB7IQRN5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T034010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDOiTQUnvbk3Q4%2FwnrQoPERBXBJ5hHItNu4cgOMtvGL0gIhANC4VXvjrcnOC2qDzVLA6DtBv17MxX%2FoLYOZapfRsvA4Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyaP%2FHIkXXOkFmQKvUq3APrl%2FixY26bAlNipSUXUq1QqF0MNixYOF0PmCRRgTqgOlZwQqoAzlQFokEtXuctekf9W3jSz1tbPlQvHFKU0H4cbrWeeXJUKuOeyULf2Mgxr8wH04akZZCFkPYMms9JpzF0tHlPr9zyairTw7NGUXOx%2Fs%2B5U1Ld30sNRxOJGLKCo0bRmRWM9LwKioNiBAdN%2BDBmtpD5v3INhjHbFSf0HaxQEjQYJwrCsVh3FaRKOFADhm%2BOxsnFu9iGG3XZNVXX%2FQYXuFL72W0cTNx6tGa%2B4Ffyb%2FAhKicpK1%2BDiFFGNK%2BE7MzZ8Tn976kIEhEg%2Bs1CjQfnYw3utLuWx50P%2BA%2BaMchcUkB9jgJrHsBEyfPEW4JzP6ajJjPCsrz9x0dvXCyObCC%2FNmFAXxH9K8MC3O%2BJZQU7o7BlYW6ZSBPdcdIBgEj3SSNOWH5xP6lxcF6IJmjY6Le15pMYz%2BAHCLyJMHWvFg%2FwJC3iel97jzPfrShebz4KdGMwJiLz9t18EHZHXB5w4daYo7XNGWM9nt%2F22q3xxzeqoSQIWVvhbkGdtFByl5K1ZlVQTonPmJpvNkMCLEpBmnN7ZkjLfJt1vGUyNa%2F6B95faVt%2BNAQ8XspRAisrcAuoVC1JGO4xJnKp40j%2BtzDjlb7JBjqkAW8klKXojkKRj8lV5tNUKBPOzHysXNcb7XihaJCj8bJ2MYoTUXiV1gySzGAE%2FetXjRrBvCZdGZxcHSqTdy5xAlWdzzQzCpV6WLJJlB0POs1suE%2FieIeCfqHbngwEa4N3ZO84rb1FvoZcWJZ5Njm4a9sXJakxUt%2FLn76wK%2FKg2SZwJB7E15csGm9ckteCMxm8n%2FLMxFGLdR2PAHnxxGBI1xz2fykn&X-Amz-Signature=543509caaf2a6b0467d5714be3ca22863cca637fa3b6c4e9a222c113d5538de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

