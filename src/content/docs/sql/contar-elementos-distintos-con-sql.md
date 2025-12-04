---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZYYONMO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQD%2B%2BKORGDerVFjDziNYgqq8E2QjW%2FdPyaN8lCUYys69GgIhAIk4I%2F3LQWVkj56iXokBVLhrr%2BmY9i1ZUyQBY5hov8rDKv8DCDwQABoMNjM3NDIzMTgzODA1Igy3AO2uRLUXvH0AJH8q3AO04NfN3g40kulhNUDDoiraaRi%2F20FkROgeCr2emo%2BStcn5w7WT9as%2BzvahR1niQpg%2BRxm898nXRrOMXbCiKme3rci%2FqJ7%2F8EyJnyu5FxPjT04G7GjdQHMBIf%2BFtQ1divuNSWoUc9OmgCVTo593iVjTv18V6wtqIvEpLuel44Pkf38DzvWuraG9XHUKtMLmq5nKsDUpbjMVBOrwEch%2BCij6dpfxnvNom24pU%2Fc7BJ2Y%2FnUyOlnYhtVjV2AffgyGR07vCSPAIvsrqju743w8gMnCqXGJzH07Ei3Ts%2FU5oxpA0Zc8V4%2Fn1pmdYUnBFHKWsLR4L6supQwLci1iVZDBeFGZmL%2BUIZzupJr%2FAxGyDkcg6JspdGYJ9XX%2FtKV%2BS%2Bzj58pt70LMgykERCMrabxTHu5infkp4e5rA1D9S6au%2Fb7dwOmCBWhZUHGL%2Bl6FF5OIY7WNL2sYRqoXWIagVbP%2Fy2dzvfJFW0DCaNIdBO%2BfYzVIV96EOnQ%2FO6eBEh9IvALyH%2F8iyiKKTzQgtJt6ANDrV%2Fx5kO%2FGBEYG9kIYHB36GApDls7qrURKKObsLMcukcapgVKwL%2Ff%2Fdi00zcJU1btMmNueOGg0C6bKYnRBMVRQl47O6kqhUZXBRg0vc%2FXMTzCJ9cPJBjqkAXuI4pPx%2FY9e3mm%2FE0Bu5yHATiGiY84e6b0gJg59x3GqmvZB7J4RPUaGVNqyMTzyRMWznXOAHJp7Dg3Ed86HcknsflMB2x7jckA8neslkdECw6OjAc0LoHNz%2FmaR%2FqGN%2BWXpsIFO2t72abOFcWp3JqvInirhlrY9HHbkBrIUx9UTAGy08Htx4uVAUmHcUQXt6GmasDSpd%2Fv5WekDDozGCIigNEoM&X-Amz-Signature=9b10ec6f3320eca896b6423a7cbce4a6354328d97fe865b7103a2a934381985a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

