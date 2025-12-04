---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664COI2Y44%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHXw9U6FZNpHwKVocTTUkE7zIsZUxLT%2B51b0iiItFzhLAiBFahof5ptoMUAm1fyVWuMqdq9waCScAeff6%2BDH0fIttCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMfPUQ1sonyLd2II%2FWKtwD%2FowMavf%2FwgsAGXL4fdyUowpmQ5JozdoMig2AUxD%2Bhs0NIAbn9fQXfMzyr%2BTO24smFN6AgFMBsonUqWmc9GDqcg2fwBHnnGuSZd%2BbB1roPLKmJPW1IvoIm4ikRmuUOqf8BtLKUrSpz5lhixyPy4whhYBK0SZEijMzS4uyvXqyh4PmEnKjHWFEDAJ58KIDHgmVgKlVhyQlAF9CsMV81E0UAdvT9E2h1e6jUKl8zfp8j0kGzL%2FNWPExjT9XYWKNODhK3Gt%2FnzxbFzJ8cqQeOE2A9IEOsA6sV5E0egto%2FlgKvglxZjB2wCBLjtFb3VMJj52TrcpxEMI9wjm9zz34mMRNbOaVOC9QcQNv2ngIQUuKVU9QwfdqvJccjebRQmnnnvCAon34yMXITjAAH83sozvnFmk7QW%2FxuOY4%2FfArTLFde66hn%2Fb2EMAZ5ACZg%2B22xNtYj0z6lFbpArFSyP7gqKPqk6piA8D05pk%2FZ443Zb2Uy%2FhbFe201WwHIeXokFXa4MHOvtlBvFBy8IaKtbyfe8zf8r89EBJvX3LM2CX8fYm0b%2BWDtNMo9oJpiBYQjrHYCk0X9yfY6JE9EED8NRWz%2B3IWJytTHuQ%2FV7cASJ0LCCJZW4RGpkJl8lUuYsks5Owwyb%2FGyQY6pgHv6WEXzwhCLy%2FS8t%2FKED6xOviUSFFZuSTfOJh3zQPORD5Z6l05RDV7wyG9KzE0GKVCY0Rqt75xK%2F3XCEqp8yFl10nX6zSaEzOMx2MAn9SW9YjXU8iMRjHfgHmv%2BlmyUwSLqwVeF6LtG4BOLsGaLs1uXffIr%2F8kuriSQ9m0Jo98%2BJtl8G4W8XncPaHgHBYF%2FaYkyynwXy3%2BbHKrIj67MCcwMiS78lct&X-Amz-Signature=6f79a898afe3011697c47980e0cd50da7000ebd22ca07d9f3dd096996359f35b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

