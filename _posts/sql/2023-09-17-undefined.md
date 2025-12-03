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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZULEHVHI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T133738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDbDUfJvXbBx2aaemwBN4oQ2Xd%2Bi5SeyqEgrAckygI2kAIgXDqCifnmESZ3IQecUk7W73rGNpFCLqcg5H94s76C5GMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOUFqW3zIh93NG2QmyrcA2XLpH5qblAqgcqY%2BeAy%2FlrWYqHLCld3cAliDAUtDLJYtZdQG88HjFLwMoU2Cza2u3u1Va1mMVz74w5FJGkvhaB%2FFuG8o%2FzmPesacR5a8mjzmChthfCGM1XS8EJ7u07RJFl%2BU8uLlgangieylf6FF%2Fvzab7FkGVn1moAdIpCy63oP7RGYaJQfAhcATWOBLCWj%2FWMpfpmSVVxHaixcWT5NsO1xadHHubnXa6kx6b6%2Fn%2FtV9xhmPOZhCqfFNlFymMhgMjC1LX9uywURGXROQfc%2F8VfyI6wzijDbtSi%2BCGpWA%2FO97j7ZSDwm0rWPN2un7UwBPNUo7MSZYsGBnCxvUx3OJpXFlDiWkKDzxdF0FtYZQ1BZktLyTnXYjMwfPo%2BNRi9DzCSCyVz%2BtGXI8cg23X58IojmAcOY9wGXnYctdwqJ8SnAh3RohzsWx4GY9P0W21NAc8JjJp1avW9pQpQKPPIWT9L4BwMTZ86w6e2fBDntIZ5n7ap8Fhvc04I%2FKiPmWZvrd7axoWT%2FkrFt4jcGg%2Fn8n1aiPvHd%2Bmevye7crttSpz3M11lJBhd2eiQJh9GZzZynU4l8ta46VVMHv2N9K1b35f4scJE6CAYj3ivnnPAmADaou%2BAtOLfGt9%2BOFtbMI%2FpwMkGOqUB1F1MiFSAChNmfUTBLCWPS6%2Bf%2F0iJaYGg7jw1Xao2WOUPMup5y3RILjXqUEBoldCgtq6HgJLpW%2F9aA%2F82vIY370eYTqrY35yWgfMKL7tzJRjhesTq4oAP7YOi2K2Z9bfSbdtqjB9pT0oSy8WVHqEF1yC7Wzc%2BbnNt%2Ffr%2FXtM3jjszpFr4MMojFr%2FrtDae5IHJJ7D3AqdJQXf5VMmfNNtPGStiFBsL&X-Amz-Signature=a67a96c076774f9043db151e3f59d21619a81bb24c03ff7b3f1c3988c1339f45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

