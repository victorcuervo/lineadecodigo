---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLQVJUY6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIB1L8T08PR6tzq0hFRUBrulDtvBU1%2FC3HnEinLbQaPWzAiEA5HxGZcIG36dhVR0Pwr4J3ab38on7PA%2F8oN2fx8hLis0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNQt7srSPtiUc0%2FAUyrcA%2FaKh0sVXubRnuc7caSvizARdiqLa8wLTroTADrMKW1gQIWzEHTLT1PCYSZIrgFcOV%2FnvY2GcIGbyOngisyNDzfeBvTVtxWW9z5L0MjbjDmL6GyN4tuFtFnSEryT2mofG4CUDzX%2FLrlbNG6v%2BYB1W9jujAUKpzIvPTT7OFXHHZeGsv1a9OStPh7sJo4HXGqP3QHc5QTcz%2FV6XBW81FKo16QL1M7ogAzL%2BJtf%2B4ugFCK67WBn6eoHcOWP8ZQLv%2BTqOaJzS30yC9Y1st2dhoL0IVa8L3a6QhCq4zkRHDbwo6qKOTGlrnJuhQh6TwbU8YpSUq3%2FUBwN8F5GRolfdjTgKwQ8BItpl%2FKfa8zNPUjYqccF9kWbBfMKQ4RgEFOXTs%2FDNLoKK4Zzm55ja0Vxj1rUegMhPw12pFYVFsUXP3oC2763d7o3hbZ4xYP0yQPtk%2B3QVrZGBOeODXFvR7CQbB3ClrzZVGtpJdX7%2BJDNpgYgIhA2%2FjBVPJTn14%2F4G4CNBPcAJreiroa%2Bfi6KZL3gltbYnU%2Bzj4H%2BtyxC6hE%2BupzQtFV4Mo8zjTcJNmGstwuK1MhFnjqpo31x8vYEjUZ5L9YIArGQHuNT%2BCKE28peE30Svy3pTolYTLjVh5zbCFwUMP2FxckGOqUBi6lWMeamzTkR0GaBPL27cQDFI48rJWLsqr3Mg1X50ZkT8TZQECT%2FwJzhiGHWBUG61WWeUD6gjh50dP%2FgSCOMqfIYEvaMtdbBglbXe6XIhMgV%2BVYK%2BgQ4N8HoCCLgKiVUHgiDBV9PS06hdkcv1Z6ddLhVGIgXQ0E3twLMWYOPw1tQ9y2JbNYeuxzEl5DJ2PCesW%2Bl2mwWguNCfub%2FoFEaTQWeV2Rt&X-Amz-Signature=d98ad86d67a046aa7f19e44b9237ae8e8630089a35cb5b27e7c23fb454683c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

