---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UROU66HV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC3Jn4hc8qqH6422lE3vCyDQuWnfmF3VZ%2F3zZe1Z0u9UwIgB%2BPiAIomc%2BmNW8Zc0hwDK96aVzjF5RLAwJ4oAGRjbMYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKJBn%2BEJlYdJOa8qQSrcA%2BvL3QuYRPN5RHt8j44%2BCCcf2bEKZGBVF7esL6Rdh%2Bg1zM7wUr2SQxjyuRXC0IfsAf5QQFg8UOYgbD7z%2FNgKy2enYP%2FV2C%2B%2BnfRpFPbcYbEkMueiaJ0qmxjkO5AaiMiF6lKZerAuwZEYuO69M%2BQkQwWHIpdiG0ec2fzXhBp84Sa7qhqpy3clnk5MrVYGypkn3DH1m%2BH0V9mBg19jeNiUdYZSEoWwJE%2FcmsogV3B4iVfGTyUPRi1%2BIJubo2P5QgFqZE90%2FUfYMaWgjbGFwlaSpsfkNNdi06HeCH582Yz%2BiEu%2FdTTYGE6Dtkuu0%2FvZ3KyK3n4iXHWHAile63NeYio4qlsbT5y9ZHoNFvvRDJI3IQiwIdX3EZI2S0oebFJUdmb%2FcHV%2FjqEITfFW9RSeyVnAp6PefOIuALXtyF4uajoQ2w8VIGQHaHto16FxSKRyFVvzvIMiMujXkjeYQbsaIkYBN%2FUyvIwVm15QIs%2FcynkClcMC73K0VDpjQCYmCqiKhNNY7Uc8nSj6O%2FCTKRoY9umkxejYS07mfJ0K%2FMUzt5g7vLE%2FvEwhDyf3tibpBeMIYDXWH4sFj1KLn1EBUE5alStlPN%2BVP6wIGSlXGrsdEgJGNrN3feg%2Fccv2DXfIgLpAMJ29wskGOqUBFce6a6SeBEdX6VeswF080RGMolAW5TeQccMucaoKFDD77UXyxY9Ygn7sEOMqar%2FIKrVoRinNaiVKSgAjAICh0PDUVhU3S3G30uN2aWYDM9%2Bzrg%2FA4qEwNhXQ0JbNO98t0XC3%2FIjJ9rERaEpcYP6odfaBen9qTobvS%2BEiNS9B8hvcQKchcIe%2BdhcjQFzvhEQxp4uJukAj5QbaUVhJ2%2BpQc%2F6g%2BQ8B&X-Amz-Signature=90d20278b6ecf3e4d26cdcd6b50a3259a45d6b933f15a45e5174c692416621aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

