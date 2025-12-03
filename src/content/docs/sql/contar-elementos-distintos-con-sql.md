---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZPWXMV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICBTOczsjv4M7UL1sByvjtDGZKq3lWiXa6220S%2BTi6PlAiAz%2FuHwABf%2BmTYh9UCZh2lWwnX88exLQv8Jn7V1F7CRoir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMVF07hIv5SYnfrw7%2FKtwDmIW66cai1apnkjPLv4y%2BPvzvhUAZwyzfY9Kq8DVstF1VqGmbzxatpMGd3bn7XotgkSw6eCrkrAy%2FPdd4Utmvb2Te3sp3XNTofKnwqFMw6LHiHVFaJyaJTpjyhfZAhYTGyzJ%2B4fcnVfN%2ByQ15bcRLM%2F6bdS7ORLkazM0e8YYCgCy2ozUHz4SRBRuvjLRiHWyaPnLkZDYVsrQdWKahTi80K5BjSqa7ZLrlmKUJOvsuq5IXF0hICXINYOiPqEhPi8LRS2ObZRD2NtF7XZbV0xDsjj%2BWucB4kKJtdtUanCg6pcsBQr3D8z329EM9ddNc396Cn%2BEoktt9gmHIdNQmhPBO6FH68%2BtZ2K1rYtZBs29SFHZVor2m1gFV5sL6QgKN2vBOAmf4WroJg6y2820G9omwPRwBqaAiR%2BAMcYLUGLJ7TdINJbed2tPLmD7E7iwgUJHIwYjCE%2BCw5KgZ7bwegW%2F0YW4sshgmWlSVm6hJSl454D67XDzxUbcorFSAiYJ3pTUpiWm%2FcEbRu58SdZJYbJsw%2FAcvzbppVYHlSPHXkCNCoGj4nPZO26s6mp7b4qg5ga4ND4gkRAR0Q5UB2dkMSP8aElcYV7xSFPqyk3DG8XTFjtHl737dPzdcz8jkCUgw1%2FfCyQY6pgHQjX7FmT8%2BhBedHoVmOADGxd5DjIDTpTFIa%2FGTNcodogRQY%2FhF54KTjXqTCH54h7eEs3tvbgwJTqFzdOZhmtmPz40HtfHINkvoQZQsi14D2IG8YFp4NovBmXFfVqbX53BPb7IyshG%2FFt9msl5VmC1VDWPeSzSfj2AVUmjCgzGVCsWs4cYLEJzY1aM%2FDliXl1fQIWYWw70SSZwD6Ou5KYjhA%2Fa2RpH5&X-Amz-Signature=fc4d57a03626d162035e0e89e9caa6889011eda018a2f02f49d2c875dca2db16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

