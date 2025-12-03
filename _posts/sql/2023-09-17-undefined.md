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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMKDVHQF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDG5J7qnaegBDY5gA8SqDOFI8%2BWl1kFOOQBhJwvX%2B2YrQIhAJAfO4d4v3XnYIn7mnraIU9pvKs6I%2BDFcu0mVwGUt%2FzVKv8DCCIQABoMNjM3NDIzMTgzODA1IgxjGgGX%2FWL0Rz3tU9sq3ANQJJcge5auZQChEbyrMtBdkIhay%2FZTxQTELK%2Fgb9iMYXJpSRFyN49JV2PtUA4YFDOaqZlpx%2F65V%2Bgo12EZ7Q%2BwBjquTIScoJlj59TGS3tAMzHIeLVlhmRrIKCJ%2FtqK6H%2Fy3eJmwgJxIJ5lRnJgKry%2BZy3uA5bHccaUF5BoSYwinsuB69FRYfrB3ICzuL3kje5lsWa2AUZ1LM%2BGhSJ9buDOWK%2FBccrHNJW2ztVfkT%2B%2B9bVpbnSk125Yi1WttsvIt3KlWkly8R%2B7ib8GtyFkxM31zD44tcNB2C%2BgO3R%2FO2MB0168nqau%2FR7P1d%2BQFQSHHWaNDmzCjFjq36bPb1owaW8YVeZQbK8RD%2BBDeynxnCkQuc4ZqkbxQt3EQaKZY9TA%2BTcNH776u7fyMm1OB2YZHbkRcrsk5anzV1GqJb2bkGEUaJ2rKPoyVO0erwk3KT1%2F7n6%2F6o1QKxWQWl2i%2BMCIUEXwG%2BGWPFSAOoUOFLMGmIxMOL8q27zRGNk%2Bw4KRpsk5vi7EV9yGKN6dpqtWfVEqC6oFETU847WtW9P692udYa3JpmYbyvE%2BKSC0HtRAOWgaQis2D0gO2rJwCS5xCQ%2FIRYBicKw2qk%2BLqrX%2BiMPMmqG68Ikcd61NErSUsOAcpzDslr7JBjqkAQMxu0TP%2B7Vgl1skedPMENKnQbRGQvgWOCi9wnqfeQeuqOiiDqF8uMFx1y7dm5F7xPkuISrSkV%2BjSM%2Ff7tLiuYfSiIFpjOiT4k7mti2vEIEvHneP6ig42l8YHgzSszrbBdbsDljbQR%2BvY%2FGMqYpvfC3bmmax7FS1UfnRLht1EwHAMr144cnwKGCh%2Bx59BBlyIBl%2BaAzhIDLVrYhva%2FtugJWVF%2BRT&X-Amz-Signature=a938b2b6e411c604146151c81623945a578733b5bc685e872067d378c6d47659&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

