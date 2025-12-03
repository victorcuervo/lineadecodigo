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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI7ZO2F7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T034746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCRn8KbBij1g%2FeR7kQCsfsjoOPGl%2FfZna2eY8fNC7O%2FEAIhAKAIayjlUOg5dPUVmoTKWnmHKwg7TjSi7La6L9u%2B9ya8Kv8DCCIQABoMNjM3NDIzMTgzODA1Igz6HDCaaoN2h5PmH0kq3AM8Rs4%2FAj6%2Bz4v95aJ1rIORy2yOivbEqXNJ0wQPD3CXSaH%2B%2BNf04r%2B4ktngu1B5mx42bL%2F1tc0tlY5xLJbL7Mab3mNCrpwYs%2Bmzp2NPEmwhx0uHgXkREzKmMUwhFjnlZnDWOoMRB%2F1yXOsZS80eOaYzuKWdPvKx2umUSmECaJPOfWuo5UG9QWQx3M7SbWoLXTKBgTf6w4kW1GHDgT2oOoXNW4tugetumIiekyAwgSqTgP3GBP1HAuTWTgKbEMr5mlPGWHsZVM4Z9yDhiplecBdONL8VpiEzWNOLXO1mty0S%2B4%2Bi7jpAk%2F11BLlTsffQ0mwbpjFT62a1dgD0Q5IHrP2TfQcL0mOvwR7oWG22ReOaZbbD7O%2BYF8Q6FQ4DUbS1bCSvyyfNsf3WvgaCwsCZMDoC8un%2BHUc5CwcTfn9j9vgHl0vgIzNX32O7P%2BSUzkyd9%2B6C1bFNrnrDsRy3WUfkMtZ9XqJaeHdJsv0Yc36BfV8EBqeY24RFzTGKUzzKOuTQyKtAXTnEKQRvwond4S0GBBP3I6sl0IvsXohlIs502VMgVr5SyThIKeHbB3Pz%2FS5vjQxNe8lwpthC65CIsyglloGZgg6kqzF3d2sjbpGUMUu1WtzIfYyBxJIYtdkvwTCkob7JBjqkAcovdsv3T%2FU8Yrc%2BBdoNDQOPr10gtOAG%2BC3GV1q5TnBk32LhPzplhMBCR9%2F7radPtQvgDWIEl%2BX8nnS4pEGAu8%2FIsyB7NRKFRnwDuTyhEygTPsl6V7Daq7hJZOR2zH%2FzjiOrr%2FJ%2FgU99odrRS540nP25ZvqBc9SpV%2F%2BkaqN2GN6Ed7q1PHGR3sQg17QPhhsLifeG19xJdeu2y1dr1KdPgo30MldT&X-Amz-Signature=a419ac48ff66ba4b2c81ce8e5e850683e99a10be9527a1999a850552ed0aaccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

