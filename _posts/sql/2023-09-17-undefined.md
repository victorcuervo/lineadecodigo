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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MDIF2MJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T090435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDqJSXA%2FfmHkNPRXSn%2Bh42QH9Ruvp%2B7Gdv59mbw1W%2BDkgIhALhH%2FQVOOpYh3GkNFwuXgUse9KIS6h2%2Fs2gJ%2BJCETEHyKv8DCCoQABoMNjM3NDIzMTgzODA1IgzM%2Fky1AU3ucjGD9G0q3AMR3MO8qZtDGbG6bul9xC%2BeIg05NwCrof24r0bJV4KKC3Z8hEzbqEFQwKDtahKIdvX2uYFvdde9Yu8npxEqKtmyydoGYkAyi1deMOJp7M8qddQmpKII0MaDsF0T7FSE4vPTm3r1m0E9hHhRkvnbRz%2F49bVSEVgK5z2p1zt%2Bgwqz%2Bp0%2BB%2FQv0kE3vG8lZlekYEzr2lkUSmrZx3un%2F6KqDCalBg1zzCSp2BKUINIHmDMSB6XA9yAA99HsbFQsr%2BF1LU8WShG40IeseXz8p3D9OMcMgpUpWrQ657QZxRIufbfbyMnM%2Ft%2FukESYgAHF1vlQW%2BuE6fB3KBIWSM3qQpbZ7xmLihzceFX8DxjOvfRR9ogrueDkzzDXAQJT5oVvXEI7JiEbEj7ESe0L3mU136r263XLfiEJZr5nh6c8Dnr7nTM6k6tKPHe7YCSRej3%2F6qEH%2BFwG2CGrCWFoCp1qZvgaw7%2FuAWCwy1D1WsGihlxdnR7XAKRphziIzJ0%2BN0ZyQhC%2FWqhD0zPl5NusOdPpD3tCT5UGMp%2F7HM0UfCB%2BOciTP6l6n1rqlCtMr1Pjn7IAJ%2FXgWfGieVVNZRzaHYMt3ySOlkjQ0UWxT4fJVkE9UaEz4Nw1wmJmOP5tWggjNy6zPDD%2B9r%2FJBjqkAZROAQF7PJm4jj%2BBevyu4xwAf698%2FTnJL3PT9byeXBnxYAGaeg6mQaKpeY8Ip76u8Xwap%2Bbfzs8iuoRN%2BiVM0mQ7RibmJ1250PUxLXaLZ9ahCFIGL6jNOVTnQfE5qQp%2BDAwrpwSHlkXHglclDEjl%2BVVL7kWU52yn34x%2BKM3psvE8Bpv%2FUcH5t%2BDrQrffM03R%2BeEJMsmrySL7xCfLd9tX16vnkDP9&X-Amz-Signature=0b79a0dc9791444c6235e037ea4cda333f4ce12307de8aae0820a22d50f704e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

