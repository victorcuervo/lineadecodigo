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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHRDG5WD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQD8zkfpxetyBvhkHqiQcDFgLrslUjoghlxTDzSv7BSTswIhAPxh8XCIEOZyTQhCXjDrK7f03mZ1HqKm0MTBqLxt76VhKv8DCCcQABoMNjM3NDIzMTgzODA1IgyOfecmiYDbglTcxmsq3ANpP%2B1OclTH973D010DzqzTaFZHrl0zLeYO8g83S20iHwh47zFDspbnR%2F7F6b9Wa5IMO8%2B%2FCTbn6LTWFWFxKNUqHyHeQlFeFr3YwUjAye1ADJgBbx8xRGQvcIF06brZWJAmae3qJJjs27qQ2ZPlZo5Hme9KZfag%2FRvcJBITbWbXAZ7Z9m0IWmau4qi4R7knZdIcKi9xlqPRiJu%2Bvn%2FLh%2BK4ZwQ30tcSWTq%2BvNDco42vKv11FGwK1xCdZrkk78PfVYaJf9mJTfbFMgHqZdg2ghrshOyJltExRr13mbJiJp6bTuXNYjwMNVYQPvR1RfQ4mgyyo4fhYNvAvHcRNkxTDyXl0qsRj1a%2Fwfg420NglHTM2D0SiyABkA893chG3uapu%2FAJ3UbKU63A%2FKxi2gcSknlUWq5ZMvsYSQa4yLANRtL8q8CZXX%2FqbfLqMi%2BIVpLlgP2kjvXVFFLGIuH00F0ozNYqohgVjjT%2FA17HF5Wb6WT7I%2BN3EMCST32KxKJzmNoYIVfmRysSMVcU1LnmJJoCElpG12ENzTlfCnyt0EawZ1G0Or8HvOcFbenSjuokc%2BqWyOHzkcElK3HuPDG4lSMULDCryMVpKZUMRm5pJcB%2Br2igFX1YTXWzWdGRW37bFDD%2Fmr%2FJBjqkAbItceJ%2B16UJAdwblxsTT6wjjsYNBWxPc0VryLyTsEgqotBHle14CDfhX7zgWeVO67%2BTPs8TOu%2B9UFlVWzggD%2FM9TykLNJhpe%2FrG1fKIlGDW8FozAL7gawnTFfY6%2Flph0aUbidVKSEjmwyvPKCOHsRJGrjn7XCqRCqY7tW61lN6432eu9M1Jh%2BjWMex%2FFKYjcYbs%2B3QyqXN5ct0lyleCvVP2uNeY&X-Amz-Signature=084c2a60936b732b399c5ecba9409155863b389a3d7bb04c521cf955b7c9fe6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

