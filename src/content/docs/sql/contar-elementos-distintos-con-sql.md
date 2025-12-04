---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQWYMGF4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCICB34swyL8RUjT8o3FflUzB4xRRxguo8YJE%2Fv02j5I3xAiBtoFXJeHopo4N8yGRnLjTor7Ls9BUJ7nT2vw3NPHu4cir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMnGipE7XIS9pzJGwcKtwD%2FLeetZhq1N%2FpZpAs4xJUPsz47odgWgOHTVwsY%2FY%2Fe0Boo0taEp2l3WeoTEI86h0lNNJ3NVhgcOD2GjLBRK51APINOTuDuqj2amNghAR0eTOfZvnxNcJsmysbv8ur1ERSsIdYKwgSOD0og%2F%2FLfSC8KucsYEs91SWSlAFwdnLtS%2BpxoAGGOblDr29WNv%2BerbTPIKGFsOr4ob8nfLa%2BbgvdUcuj9saOKVkkWz%2F4WdzrxlXQdlsn2zpNiELr4KMXoXMYmanUQRegKap1pGEOMGOJc8GsEAPmnx5JlkjMSbcfvUkPTzjiZwVu%2BLK6K72VmURT9HpQdN1rabVOfWMGzrQwI3jLambC9g85cSKQxeHb5Sx2ayz0CK7MG374S0Jj6guaXrjawHpXK34bHjyHwiVPERv2phujls5%2F9Ee1KiI5QKsqL5kOnvDq08cI%2FfpCyy20FHEztMc3tik3%2F15Biqd1XcYGF4SlumspUsCfCo0s5KkaYYb1f4F%2FN%2F6sZaDIwFm89mJChsNuNAvqRQ4oqjI6JK4GtcNOEI%2BVlcdaoooeqdhxizXB8fGsjNc4cX1OIkqYI807%2BJDjOagaIFztb6WOJr87Rnkx7D2r2l82Y7fA%2BTq7PLs6MqQTifP1EHgw1IPGyQY6pgFccgSJ6YJVOBDhNa9Kd25IkdEdaSQ15A1uKyRZLSHAk%2FuXCgEiEJ8cYPddLj6c7icKWvWk%2BZMJ2afq2AKOjst0K%2B8s9DDZkR3StWKhgp7RkSZk6COjKoi9D1K7kGeDjLDMrTATmMJNREAVjxKXHzb9iLPsnZizufzvGsU9deoN23Y%2FNONGPl1I1tgQls53ZRLgWx6LhlP8GqSJZtjr8WKS34s50DDc&X-Amz-Signature=fa6d266192fca87a13f05e8d48dccc52b6957bdeebc329121a4f6f551564b23e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

