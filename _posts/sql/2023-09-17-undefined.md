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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677OSF7Q3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T053711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIFRBxqmgu9lNH6aQcgSs71YJUF6RaSeLK4qemKfLECP3AiEAgMLt5EQLqbkXny%2FZZUGp2Z3CiU%2BzfWNQutmMDFzPHWAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDODZ9YCDjTGk%2B8MqCrcA%2BeqrJX8Eb%2BpdxdGIvLlOiVVRv2q8MgV5GtO%2FeNYUVmiyaHadVtOD0amqIy1m0iVcYgR%2FfojYChKwJMsw%2BGgFgc2cNI3GLQDrzOpldvf%2FC7ctYkTVxfkS8pewv4oen1EL2MNzTC1xpZ%2FJDP8jwGJgJ26z%2FlBs2dXns6J21HwjtMZFo5oIuw153lm5wj%2BE8%2FVr0e%2BGCOOiWJXJMzNc34mebWksCV3FK1D8U2FmDVI%2FwX%2BJox7oDRYcLld3gaALlBlpUilKPtYaq9cwhLFhqpR02kjzn%2FMyOh0ehUDIw7ihpPTcTn5nI4cUQ3PO4%2BMyk0atS6BqZev8PYlQ6m2zL4gFNKdG5wX2TqUZyv3DwIq8OIxzey%2F%2FPHnmfYJcCCRzXYf9CU5MQr2nj6doyBFI66Kuy5HCP0gt6%2BLgUMbBMuT7HISZJF%2BgRP2mOzbsdSaAEhe%2FBdzuyn84tnDQJmBvQvsWnhM48ckKcNwnYsK%2BU8w4zhLFPXr9N1JwdUK2FZX6wOhmS%2BavjQ1UdPoekIimiDVRXJWPgPfirqHpOaXgfRmxLXUKktp7sm0l%2FZBq0zvzqENsy6V4B%2BDpVx3LCZUin9avmARuTmf40iWquZRT7cOmDGcTo40u07y8C8%2FmGedMNSUvskGOqUBqlUMYYLeVfROe0W0oXwW7wcz0pNRHcS%2Bo0k89DvcDDCudOoC6CFV4dFv23GdXdLuSIP1lKrno9hqWcewacCMBKxxWBpN5IAXKJnXcy6Wz3RS0Nkc8LkuHnZiKwaKxXxDWulBC5j7cLdHW2kpKENf8dkFn9wSn9iZAZeseszr5VhCdC2Ua3xukFkaqtLUbz0aOT5VzmKSOPoTUqBRScTVWIhlzHYn&X-Amz-Signature=2d75eafb9a9b6b8831fb50f25c5f7db66a2e211675c722d1907b4101edfeeefe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

