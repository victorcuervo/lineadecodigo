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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCMEZMF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDcGNUDg4Siz3yIAyJMbctPVJp92HSR0ZGiCdzCHlLxyAIgc1hQDnU9nOwol9UlzjyDu6BKRJ0mcF7R9fXZuFRV7gwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDIB8R2imoqxnWnG4CrcA4RBw1KGaiX6XABUjiiO1mpNdmeUKpLL7zsNg4xU5xleuTfXKiJ0GY4FK8yGgqPc%2BL4KkhZJJ8ju6yHpP7xay3wG%2B5IHkMGu1reBi8PS4xMPGgv3kkE1zQC4sGmB7u3Yvtzv0kkJzr03jXgI4MrTQXqXcC8O8MBMhJP5nhsx7wdot%2FhiQ492OW1XUffORyTA0BLFcpREsg93P5wOg5xjow797pQynXxG2KC7dLni18aIUarQT6bPYCXSiFxTt3H9GTJHKLoePQT4qhEQ6%2FeOB2emSiEnk0NFTcyEMup0bvV%2B54bjKQS%2FZs19BZ16Wuhv3mo2m9CAd4P6TTvuDZ57D2wszshXJMQm0LkBkqHhYNd6CpNqSe2NzdvOWhacW9Up%2FOwf86MVcHRkGoxfE3%2FwGQDNTu1P%2BMyOjgpLaVPCdmc1R7rmB2eq0w9jV0NZvgxt1aFvj9hXI%2FS8T5DM76I%2FYB6cFjcVmGe9EgZgIuOjsxKrqHETwdV2Ynkd5Wt9iTaFHbfzXUQOIPfrf9PB4CBQhdV9mF4c21vhs5pfS7q3JD5VbJP61wczDozcN9DGKreQNQn70aNcxuyHpsQ7sfa2yfTiXPTKPbkRiZXBBejzUKGs2%2FrHDeLvh3YziSAWMJKVvskGOqUBHufHt2lSO5xOtd%2F%2BXvXARh8H%2FJBr2bgRei5lHLyt45NCXmaUAXvOdDatE7B0mT9uVdsyK0NxBtDqqlgXk7MZYvPZQYatJm9Pc3JwV3DyainTrzK2oT%2BwzVk66wu%2FznIbbl%2BwL7B3KdXKhI%2BupR95bIC7KyiLX7hnBSrLpCUdgksJNOF1GyMFj8jaxU7QHsOHXoAin3X%2FbfgV3Y3XFO6JcmbpR8DV&X-Amz-Signature=7b066c211e13a794284a65964e9fa7011584beb69c70bc131f77a4cd0e4df9c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

