---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S3ENSXJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIHaER98HH7r7mM%2B1TSPduvyo1p7QeDJrWkL%2BWyx2ZAd6AiBXfxYIuzkACHngAiEx%2B%2F1qTwMQ26mfj5lB722vr%2FNdVCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMvwTnzyeUiip9lDUwKtwDW2HAjd7KSgQfbVu9o4QQRCDGc0v%2BMUHILLfrUHQ3b1EIajetof%2BQg3vTS7J7RlrE74x7XsOvS3peVhz0D3qxixzAJDsoiAATP3Xpk%2FqXygxblwHGchRDY38U6xabJFSBXfDGrH%2Fp%2F2%2BStoQYMyIe9fJiYiVp%2FMHpTy6Ty6OhvUssl5yKyrakR5twmTbDxfwV5C4zHt5FSeD3mQsu%2Bly%2FuLzogttxVspZKJCxf7LiUGSrtq7xmRDZFwDDdCtLGPWlLJMzCn2yqCsgSHNkdehajGz%2FYiShQqpsUwIs6u0rODyqJ3LxmY7jR1rcBX6rFXw4xbp%2B9RtretH5ngURkZ6zvnakHOJXQ3pbPCh3WalCBY8hp5nSllTgTtP%2Bi7yMZgW0ptr9y8nCTFA5i2NgzUbyS4KYHw8Kjwihx8YummKoQuqGOT%2FFxOEYls0UbhVOx9BsVkyH55eUpilAXkTZh9CnhwYHiNfDz3RtaeDu5YD4bU30nB7tDK8POujBUCnyueBX7RhVi%2FPoinMbbu1DYOEh42qxgUydu6qAo6QbD355D4ADJXdpTMblWKBrIOkd6mU24m534kITMO%2F2kVAeIiEJgbh5lJ1VrIIgcVpKRCfeXIxZWsV3e1QPO5EHovYwr4XFyQY6pgF1egHZhCv6UmZV8qiOHjR66U2Xa5YQNKe2boxuz9BCzj%2B%2BSdI53%2FfsU0oTTXlg%2FblfPKfFSFosng2iYEVSB4%2Fi5z7vpi3dpVXmCdQLWxF8x5gGBki%2BjaBl3qkKno3HWK%2BCk9XByDuvPFwUuQZXYAsEhG1FELKpAPSiK%2FZLHZq3bO9hUp%2FV5POtUFXUV9LojqO31ZMahzHXIzoh80WL53PuvImwDJnj&X-Amz-Signature=9d7d1587e5decc643cb6ce95522832beb2a95dc349cd7298eec20d4fd9733bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

