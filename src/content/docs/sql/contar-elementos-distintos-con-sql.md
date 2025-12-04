---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YLF5PQ3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDROG4UkazuJ4INYT4Xn%2FeodQU3ZYeN2g4IxNi%2FSeNQrQIhANB%2BlpHWA52tqtYvUbHaFbNMKesMMBUUAfKDNt98ePNKKv8DCDkQABoMNjM3NDIzMTgzODA1IgxWjAiC5R0Ujz5NVFQq3ANAFL65Q1GikavK8KqcIss%2F3%2FC7wzjospKsG%2B2l8ceUyknRrqveN%2BZDGH9%2FJ1aCsupIFomyR4KVzkm2srB5B4FVR4sPIOpsamT1yV9c68nfulkADzLRxHzVMguBwlSBq6xeSXppXXSjd1CxTDxatvc9AKBJn%2F73OSqneyl1JI%2Fedua%2BAwHOCNggDGI9Do5sTdUHkT%2BXcEjMUUzuxFZeMrfLzo58yBzGtwdxC3YggjHotDAQCiTxy8hJUhLENTrgZ4Z3yBJ5wahQegF2chKPguCgXt4vqjm9QIbSFlKeJdf7r67PfQ9TZp5Lv2n%2BEHfesXXrT6rvCXK7HUOMFugt4ne1IdKlajq76yiNkR08C%2FUIMUXOVQwE5ogebIzm8Nd97wr%2BS7bBvwUPGGYjY6wkdaPxN%2Bg0phRIEH5XSX1Y7MpMruNvVi9hECAF8eJLRKc%2B8UibdU69ycOM7wxg%2BSR%2BqUwP7qNKySy1%2Fc2RMOMSlHXLBEVC1b99mSm%2FAf9DtlRJbJI8m5H7ByKU8nFVzNM84aeM2SbN9lS09eY6CrFRpzsd7RW7pihGssyE8rFpV%2FyDJUI%2FsHoYuBQgql6K7b07vEpG99YxNhOrvQ99dr6UKINo7oemYXJBlLMFeGXNCjCTlcPJBjqkAeGe6GsmLjCXFSIaXOjvJzX7I8uez2P6T24zCn%2BVFYW1hV0LL4pngxhzYu2fa36Lgfe2iWnXZKnS3cOYanLy4pJV667qdUE40TZm5QlHVyOl0x0oMTL16%2BaImZyDxnjg%2FGPwwVRj523K4RGDWVkWqVFWgQVV45HD4ZKJqSGkwfjcZsm17xR7G4BA1m7Ex10fchmjIMb79y3clz026R1QmqV2XiLH&X-Amz-Signature=876b3b362ef6f144e302321c1e6bf2a135cd0d63fb38d055f95c502272dfd1cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

