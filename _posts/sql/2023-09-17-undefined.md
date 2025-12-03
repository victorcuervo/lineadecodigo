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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWHSJ5I2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T174654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDuunDJIiiYGP%2FdsupyN9AB5lE05wO%2B7rjt3TifQsK2WAIhAKd%2BteWawpWhBNsyLgFN7Gf8YfCJuq8HYPeSd2nG0YatKv8DCDIQABoMNjM3NDIzMTgzODA1Igx%2F3aCW3rNRWL%2B3dNAq3AMmsBZIP7jWbiUHZrLa5c1oF8iyQIooYs4U8GA3sXCr8sBOPQW1HLrMqIYgm%2B0aQreTZJHKTFeBITEvIesOsIUA5L%2FCwwoWcai6mWpeQJWfZpap7d0hCWUD9AevUmoLkQxLDylTox1Lx8GghrXuEr97NwMf0JVHTaRyDlazNlkjSx70bHsH5yTBjhhbkL1EytPXVdA1KhqAhsSbedO0skIHS9gkB5GtNswzaIyII9ySPEy%2FdPXErbB0%2BMYIwZpEoEuD00j6iWU9qObqXHXhMfq%2FU2ty6h0%2FJV3jTbxTi1X45GfZ050PGrKPdh8jjme8lkNjMJFxcuxPtc%2FnkKaJh7IByQH5zUIFP2SgKI68s7xMp%2Ft6q2pXjsNxwEtct5UkcmSVWBTY5Z3pEhHPDcRULOjYsYXDjOFGspuXikT3CTP%2F34cbRPynj049QZtvBA5aEb79r7WpSCs5zqe7QuMwc3lIEoDUMaqb9ST04zH8CCs5sJv1LnY6W1ThmMEQ6Xt3k4%2BfjjUshG4u77QAYv6mWRfYh18y6ZrD%2FwbOPeTk9HTuWoLOaFazQjva7TdjBgiWRISRaaxGk33FxxElQRhrlLQ8qhn5I2FSkYkyAXJJSbOxNONNmXC%2FvF50k8lhrjCn2sHJBjqkAXOGXDdibhLrYPOqz7cS1bY2KChlns8uGqkPyCovvPkNT0lW7OcrAsBKrqrjaKX0vHgxjzGqkc9c33WS%2BatSdqKbntqnPIlU6lqHVO63Kghis1HpymF7LGNBsngcrRhaYPnH3Lf7JIIQwehrnYbARt%2BVz0C5z8vn%2BR04JoML%2B5YJ%2FK4hGAS3SmMiIRD3Jo%2Byx%2BSJCRQ%2FfDt3wMsa1zdyFQfmExv4&X-Amz-Signature=0411d035c2a066b894c78e90bfe4017b60bf23631efbd29d42d8c8622a78616d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

