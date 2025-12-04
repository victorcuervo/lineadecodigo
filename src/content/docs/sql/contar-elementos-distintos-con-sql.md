---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676WSKNVY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIFSHk5mDcHqfYnPHwge%2FH2JhEJhOmkIXuOYc4tvXfdh8AiA%2F9fJlU0Bayqj8pZqIbjAccVCovSnRWk1VlQWZZbCkQyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM5YiOM4FopRAP64n3KtwDwnqOzm2H6VCVcwjBXHbUwffp29PYHQ4RLOVplk%2BiEpfT8UGWD8rjdVV%2BQXnkQIpO0v40T%2FNRlLxjF6QVA1ft0mFS%2BxSgwPbelb%2BxMy4D%2BqBPF9Doy97xuHTgGJKymOF9yPz7hW3mPqhbNVKyy2Y3fzGKETmgpB8L6NfX7c1zb5LfasTIC7kVlHn9Dok1WCcEW6zcXeoyeHx9AwkZVacpy7plKPjQidRUgGd7LsezJcewYqrlyNZZP%2FpY%2BKtbSUE3ertRyg%2F8ZUGFSUdzn3jFcSpNZ%2BvWIEpz%2BpUGuUX6qZIu%2FFn%2FMe4bdv5wBzU3ZIF2VBn35wB%2B5VIQXId7OjKV%2FQzeLP96SQpdKTlTL7fhHZXm8P3tmLw8A2oX59JUJohOzHGxrhFP7aXmpR5eXBUQO18jNewqtPDC7tzIHpl2tMj9Y5SZmUpaZgFR%2BxPUOq6KsQJd2Jh0g77%2FZum909FnYV9kEG%2Fp0Y82E%2B1xsGZfFaFm6YlqY0oCaf7y6ORLwTiPNMaUezhtpDiIUcYhFrFRuPNJsL9h1sajntFrUlwBc1ELY3515MtA0oS2zhnbni82vqY9Mk9PWB1zdzot%2FKfELhj1ER5VOPj5t%2FlJ4AGrsPVo5b%2F6gzhOrbh8e60w2ejEyQY6pgESUOLchxxSHnU9lovHMAD58IDhInsMGPRQDQI9f0qI0wRW7NfkMTaYX4FPsqpNYxoI99OyA2kHlWgIUl2Iyuc%2FUDGIyKBPwl89mIKeLItrLM4wdZGyvBuQsWtqD5%2Bnig4UMqNjpAAwwxV4WF40d8wiGqhI4eDl1etADrbrBqEmxhPVuej5h8707PKRKfAMuGckQvnAf%2BWe37j8hKooTwJ%2FsUP6Qtml&X-Amz-Signature=ced9bbd89013c2826422ada4ccd2032e6d238550f6ae234ec387bb21d7da09d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

