---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674FK5RYV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDe617wi1uOaQEwWUBwloWxfNDvoqcS%2FmBcoaWUK2GHZAiAu1KB5Z0zobAdnZHLXlLpMjWnWrWeEOFFWVFd98hugcir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM3bJ6l6%2BXHJoTmUKbKtwDxAes5VbeW%2FmiY2y9N9%2FayGjz0795pB6vFrqylKFO4ZqGoGjxzPQvlJD5OZh6O8T05EUk0YYWUqdcfpSwMYUZilcdtWS%2BN7v8evC2%2BGxeh0ar4ti6JOqPihEJ4PblO%2FKyZ5R8uC2GaCJnxgUy%2FsbiGgxSO%2BDRSu1xS2JOwJujBg907qKIF7W0kzgc8QjrnzmHQGY42cr2WlDMz81r6JH8Iuuwpx06EfQUdTVR9OFi2oL9srAZo3pUZzGp4SGAB7H3vHfThXnAr0bcoe1Hzv7G65FUv%2BQttifJhtpifHnCJ36iKYolWAKnlyzPUUYVYSexwxOlkEnyCWgDZsdnkfpzB6MsrVFYSAqy5k9QazR0HgFWuVUcOxSNNdMLM9iMlKX1N%2FFGOoxz7SqpUpgou0MI3lK7maNl%2FQ%2FjBe3bM0vi7cuZoIyoYMPRmNVcDtxBcbn6aTeGj3uzi5V8I8lMwjt9uhPISIS3h65t8S45xTrvduKwaYPnWDlSibL8c%2Fq%2FbhRon2LrNRFyLqm4jum%2BFBnyzSkXNOdkVLS7tIngqJkEs2A%2BNUGOQajj9QakSnjBKwX0OA4CeoV89nlJmrBbGcxVOgvfCGlcd0MbVl%2FSsXTCmbczI68uvrbeSdefzfowzLTDyQY6pgGUrf%2F8G1wAzIuRyt1F2tXI5BjFAG067rezRojjmuq9fsmivJOjk1ke8i%2FJUBM9uJNmcS9H2cXuec3yL3sq0PU5zSK6Th%2BG2VUlwdZuMfTViKvelBZbgY3EOgoXUm%2BzNy%2B%2BqjQr6QXQ7WaCVw6HGImWqSNbFqINjhUfG0it6v4UIa0U7cuj9d4gy9YIVro%2BAfzFci3LJlwZdftk3Qt5UuZd4ZA5oPjP&X-Amz-Signature=2226491684c3688a86af99f140a129d6ab213f3e8853b669cd30d9f76b4a7cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

