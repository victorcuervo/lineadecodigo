---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ENQYYZB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFKhW0GgyvvxkqGeDbYVaq%2BQIIwxA3Rz0btD90yk5Ln0AiA%2BNop%2BpwhJcUo04KCdtCfrhJt3jx6N9QigWlOAWReWkSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMcXhicnxj21u2G1meKtwDXrjcDlFTMRJyDF1xU59o%2FNedadYetjtINExbOmgbzmk3DOhy4%2F6tI2PTKL17h2kqp227S0hyTTcwqiPruglReIs899Hm9bVmTDtteJfR6XgnngCHF7tF4thRziyl9bd7Zjrw6fDgHYk2FACPi5GcopXGc9atvWjB0wYHuSsXb9tNoYfGIrWKkkL5O3zLInIVyoT9RZxH0XVnsTMykvB08qqzk9%2FcXfn86IiCsM8xr1LgFL6GRdMzrYPSHFnNPex%2FwfD5vblIxErRTBPmgc6jXGl0CTH1%2FuB%2Fii%2F22PwewxgQ37aIo1uiqGmaVVoBBuxkg8OV80bcZqntJd0BEz3Q0oXVDjwR61RilL4aRUPX64O8YK41CL7lNIWYXHlUTtFOtSY8shAnaJd%2BmEw7AtU8C5tCc8E4MPguqAdNwPBfLa005cXYAw9SaEfRJPVDYvMmJ7qjfzD%2B9y4dWvF5Zu034jGPcdLHfrFKOHLWC09w3hi89ERUktXg6OYnQ%2BIC5qgIELY2pa6xZtwW5daVKfP4dYSN%2FPDZbeL7MqtBhz7OR3ZwfVIdCBfJXwI8S8dnMUvUOOwmlZWFyJj30mUVU4kxqrpBVpH0zLRudmHzbdmaVWkybXYbXPnSZDn8COUwlpLCyQY6pgE9l0b%2FemqAdKwx5Gvi3hgW3GDWOfyHJ6jJxvb%2BqUWeVFAsPDXy8dM9%2FCv4TgFbK5%2FTzYB6RXj0flhznhbqdH5YdefwlKoobyS9xcmsPsonIQvvBegvnc%2FnKYZmoBeHhuXu0yZjSkKPgtcA5r1%2FU730A%2BGUCUd7GpQdSjG60s1VgFcJWEL9%2FPsJM%2BbFfgOP8KgZVaLtT2S9MIKPJpucpG0mWWQSIUuN&X-Amz-Signature=24b6b2ec53deb1d9f318550a05bf1dd6669155e91f252472e728f7cd2de0011f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

