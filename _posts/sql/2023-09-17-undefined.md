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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBFGCC5W%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGVCysfWf8a94VnA%2BbUI68z85uPHJ5a93GQbm2JrOTeoAiB4%2FlscrrAEFosbjCp0sN%2FT6UUTap%2FOlO25sp9xZQgWdSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMnXAGZPvAkRff1B20KtwD1oAhpEEIRYfZ18r4%2ByXW5H7dBEjRPG1%2BrBE4XYhYLwQhiTW1p5%2BFZ6KGPZV2tTS2zJHs7mGAYgqf4%2BFrGgzoPAL7TkXduZWi4B71EHwwZCMy5WyZXYgJS%2BaqdqEW7pDdTDd7Fhr82i2MB%2BYkRUw%2FPrEM4VzXJpeYy8vP0RHCXOZIws4Di967gIPd5YKoSPhSm2JV2LDjrlsmer%2FIg82sSKZVKHX4WFfiMp4RCBtbZiEUPFPRIOuceNa9LAvh2BbOxyjIJfFmlWpTAKqoSs5go4V0PPcJgkeNMHFXlpv8m7oamd6MaMzou7zO%2BVhPzq5tM45%2B6oFgsumzOejdx80MsjBj1Cd%2FNTFNO3TXIojrkT9pyaJOaw%2Fm2IXrxnxE7p59kKbFm%2BELaWt0EEjvpfhWuVGbijoB4FyavVIk9IcOPw11zCSXfoNKiAE8Vm1ICYQjuexiSPSJQ20Tcyi80gJBu%2FbYbcuanAlIjZeR9sAri7lnTQpHUHcj5CuxgpYaCnXFkojnxi0uo5nLeftoTVetvJImt14hmtfFajU%2F%2FPNyL0ZCD6Yo4D%2BNzPstFVdpBBXXvmT8n%2Fc3cNuaT%2Ft7DGWShDNSTn6PWwlvpV6TeGvftu594HhVYfPMvbN8NZIwqJu%2FyQY6pgEklpGCOmEy%2BPato1rUVz64VaXZtLQTPCxMRnoho5WnhyW5%2B41WVsR5pBhYaGUHAaNjpk90xBxY4qIHXbzj1mUL%2BfYF1Afkc2tVbxjf%2B5jZ0uJzi44AhVXWHQajorHHs1ZzZW1SbQ9PVvbVSP32ZVqFCIQ2pz2uYO%2BVL%2Fq2TDve1EKNmoczbxBVdllFiZBqzMTKwvRCNK0UTdRE803ONZaVvZrg0UDp&X-Amz-Signature=3a070ec9b8ea88e02cb68b6d7d4388925061512b978403fe0c4e0e03acc75458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

