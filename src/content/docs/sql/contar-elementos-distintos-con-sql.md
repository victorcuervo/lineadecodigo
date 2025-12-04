---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676QRXMLH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDlPzyI3iGlM0EoqYmTSHr8uWSbURdJyJyQyDURZketVAIhAIv6CNavxTQo%2F6tmazroKVQUE%2BqVIxObJu7wgEP9I%2FUaKv8DCDoQABoMNjM3NDIzMTgzODA1IgzGerg1L2ypIx0jVA4q3AOqUehCb4bb%2BxRYlFDN06bxGM9JIHrmtYokAdFBh9TdUeEkfo0if77wX7HIDubRrp9Bnsqrhu%2FXN3zBu2BiCSIP8BoSGywQh7veGbhaof3F5mJIePfxlwgWwXZWMputxg2MttsvLSpV7oOjoZTl274rc3sHnD71APldhf524el64tlWwo7JIDHSXC1w4k5J0y%2Fx2g1jYjkawtFULxCbZWqIOesbT6XDbybu4o9Rdzu8XPgclf%2BStlhgT5Scn09CQdcDuty94lcTLlv5tKQowilhAOq%2FiGDDdSLGuZI1kMwYZB5cPJ%2FA1UiuEMBbDONjaXbt50vcofRn9Y9oj2%2BqaOz4TnOGpdJRltbJIp7Vil1uC9eg2MKV295o2dtBWbmIJB613FXdxsaFrOU7QJm0fGt2miazd0vLUzSxTQWyVjQGwzLEI76cMzKTmtjJLwllRUX5DihVcT6MXSae%2BlujnJKPoFEVwCBYWSGf%2BxiqOhO2l0PoWsBQIsZY%2FTRmPmJVbws1Ovo4%2FeZ%2BHe8WeOrcF1fo7JBD69laI8q%2BCo1U83P5PcrZX%2BASTAG0Py49GTDegMr1%2BoQ6Re53hwavpwtg6Pi9RbYXP3wH7aFG9FeOSWd9K0UMJ6UWR1XOdWhRnDDbtcPJBjqkAZQxggp0t4P6jzMS7Mm8xeYMi2bcdoqaclY3%2FvioRRKSEgm5wAGiS7YsI5cU1cCJhtmgU9OVytUflZ05qy9do0SSHb5OlTRYon5EU5UniCkr1rI4GKvmCQQ06ICRwG5bIRJmlS7kBdArnk3pkzh3Awjs1LQLEczE4ZLRB2Tpztk4VMYSdheLByabGDqcTLYNzVzKuqk2wmchR04sdOTGrLqcjNyP&X-Amz-Signature=a68eb4b3b73340ee6af1918e530c79bb47f0a36336c9a74e6c339ede27090b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

