---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PR7Z3MG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCEDPU208qnY%2By6qYxqvLmL%2BisMbhT53ByA4z8vdlEk1AIhAK83YpVu0VOPhWSYcRQ2DpAuSvzzXtAwrAQJsWzDbOUWKv8DCDwQABoMNjM3NDIzMTgzODA1Igx0hD%2BkYFMdRSpsDoAq3AMbHofWEf3OpruC4uufEKlDBBT8923ks51O8nTDZ8LeWlltXPsbpwBD2HmWUv70K8FxPsm09zK4%2BTZHxv9N%2F6ZSQho7%2F5Ulmp%2BieiOhdQEWbATb0H%2FT0m7kUxjQjEH5DPuyKnIm%2FbR3IEPOiXJZLwD8xx4NK15ewEQ4mT%2FNfT5dJtzgZbEb%2FxxgFAzzDvMW9k1rhbYIwPIDL4ONZZvSidp8qs2BsYHtzuHw2jaGvEqudOqNIQvyRdN56F2IGfseY3Yt1wa6qZaFumiWlDNe8daPWJE1DVsYCe5hdSRG5F3UVjSjED7ssRcKgKx0iyKHUGPD%2F4Vw%2FQqertrAcSbzicTmYrBr151kELDzty7%2BT719qYuI1J2hxsXV3BCEgl0%2FACsmJlBl7%2FKC%2FKmxpxsmMtf5YvQY9UptXjh9mEUWzKtS6HbgqQViE7r%2FYJVW1UiTOMGYZ%2BsUPVuaGzIoFJm9UGdzDMnGB0Rcj9wKSm%2FsOu05%2BnDqpIwW%2BWwGtWQyUgzuqN4OtQtV8v8jZFHCNNcBzyJ16PwYcFKlqVxLxieX%2FxLTAPkft7NQu5olT%2BdSmkdvm40J0jZi8RsezMrm5OnWxOavsVp5OpowF%2BLkGGr079GMewEH18m9%2BjDOhjKA2jDb8sPJBjqkAWaULW5YAoC28aCiFsk0AcBWxrZZvudJfOP9tkfmzTZbWR6uXN8j6RErzLeXjotCMnaNfd340dC3i22UjLGDiQ3XCbu1Dc5LC2hB3FVWRgGOfwa%2FTCCZRuza%2FkFCbQ9fD8VCqeecpkTejpxtLrYEphu%2FWXWDf%2BZK4Qy8e7mkknKLA5%2F8aDQN7L%2BmTYcyD08WVgEwSIxD6vZ7%2BICe3YeytZv2tf6M&X-Amz-Signature=b00a85eec52c8676a6786fa42c8ac68935d233309fd1bee909314f448bd757b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

