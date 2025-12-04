---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGCXCKCV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIEoLv9nQHV8CN1cBXaR8HILmuUwAXIIa%2B%2BXMpHZWK2zUAiEAtxsVcIHIkFmeWdQqP5MtShIT3s%2FsWQ4VTfo%2FBq3ZZxIq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKM3iyYpuoTZjclHgircA%2F8c2zucF1Qnx%2BaiWQ3bP8tMhfgNqjZgiaZoh%2BYfUnFPxom%2BYqyMOcCkag%2FuFgOFHGXlMoVrl5RPtL1UKaFAG1eECtaylYGVTNJzNw1jGscrgCvk78kWmEAekB8wdxDZieiLy8%2B9SodPXEJShrNnmRLWQKJjEtUhhdQ6UbN07L7z9nSG2VfS6gJMfVY3Fx4n%2BkNUvS7CLMpkhGD6zpP3Lq%2BOgKYtwQz23ONVfFXd7u5YPPWTIgK5HUHaNhaHNRFz8UEg5N5vjkbmebUWHXUvuyc%2BlmX2S097Ay621QZY7MOQRDI5Q6WEprpp9Py3LGqo3T8MLR0tW%2BW6j0cxuaHO006x8t%2FiImf1b30rbaDQVMPsfOoK6oCh77eBTeBZbXRKZACb%2FP0Ttzf4w5qe65cimpL1ttqWV6YnSP48gIOQPnzjzgJBWiSM2AIU4X%2FfLEsB7KiojhgEmp0WaceXY3Kl%2B%2Bt2q0dbjnf7OYK7vlgTvzoO6xNIdRaUvgG4Y63y%2Fa78y0awP4zoZ5YgNk4d%2BY%2Bah6v8rBoQKRCYENNXtqI%2FWHDYyvSJkmwlKWdNGCVmawX0Fk4oPayox5AWOLX%2Fg2aiYDefyeJz%2FCsPqrpef%2BVoDkPK1UWPkTStF3NCxNg5MNquxMkGOqUBCKLnTbvcIUgIoC7CYYuuwNuxJ6lqbz%2BWIryQ2Na9cueepdcLzsMOPz6mO8WvfdpbziZI9DpdVQoaT91bjsN7ESHTswCiNVev2KweHsFjgX%2BGLtIcZ9WT%2F6aXxpoIpuMFpnZMIfbqDcRp8pF4mvo6ri8giOs%2B0RfAQumlDOFgBZxpIX4SE1xLNxk%2Bktsk9U9nT9E8098voqsNqCYZajhyjfkOBcqY&X-Amz-Signature=fba2b195542d7c9c046e3f155db5a8511b5db098fa470369fb9dd08f7cd63e69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

